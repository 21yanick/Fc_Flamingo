-- FCFlamingo Kinderbuch-Shop Tables
-- Swiss-optimized e-commerce schema
-- Prices in Rappen (CHF cents), timezone Europe/Zurich

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table for Kinderbuch catalog
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL, -- Price in Rappen (CHF cents)
    currency TEXT DEFAULT 'CHF',
    digital BOOLEAN DEFAULT FALSE, -- TRUE for digital books, FALSE for physical
    image_url TEXT,
    category TEXT,
    isbn TEXT,
    author TEXT,
    age_group TEXT,
    stock_quantity INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,

    -- E-commerce integration fields
    stripe_price_id TEXT, -- Stripe Price ID for checkout integration
    featured BOOLEAN DEFAULT FALSE, -- Featured products for homepage display

    created_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW()),
    updated_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW())
);

-- Orders table for Swiss customers
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'pending', -- pending, confirmed, shipped, delivered, cancelled
    total_amount INTEGER NOT NULL, -- Total in Rappen (CHF cents)
    currency TEXT DEFAULT 'CHF',
    shipping_address JSONB,
    billing_address JSONB,
    payment_method TEXT, -- card, twint
    payment_status TEXT DEFAULT 'pending',
    stripe_session_id TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW()),
    updated_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW())
);

-- Order items (products in each order)
CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price INTEGER NOT NULL, -- Price in Rappen at time of purchase
    total_price INTEGER NOT NULL, -- quantity * unit_price
    created_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW())
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS products_active_idx ON products(active);
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_stripe_price_idx ON products(stripe_price_id); -- E-commerce integration
CREATE INDEX IF NOT EXISTS products_featured_idx ON products(featured); -- Featured products query optimization
CREATE INDEX IF NOT EXISTS orders_customer_id_idx ON orders(customer_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at);
CREATE INDEX IF NOT EXISTS order_items_order_id_idx ON order_items(order_id);
CREATE INDEX IF NOT EXISTS order_items_product_id_idx ON order_items(product_id);

-- Row Level Security (RLS) policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Products: Public read access, admin write access
CREATE POLICY "Products are viewable by everyone" ON products
    FOR SELECT USING (active = TRUE);

-- Orders: Users can only see their own orders  
CREATE POLICY "Users can view own orders" ON orders
    FOR SELECT USING (auth.uid() = customer_id);

CREATE POLICY "Users can create own orders" ON orders
    FOR INSERT WITH CHECK (auth.uid() = customer_id);

-- Order items: Users can only see items from their own orders
CREATE POLICY "Users can view own order items" ON order_items
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM orders 
            WHERE orders.id = order_items.order_id 
            AND orders.customer_id = auth.uid()
        )
    );

-- Sample products for testing (Swiss Kinderbücher)
INSERT INTO products (name, description, price, author, age_group, category, stock_quantity, stripe_price_id, featured) VALUES
    ('Der kleine Drache Kokosnuss', 'Beliebte Kinderbuch-Serie über den kleinen Drachen', 1590, 'Ingo Siegner', '4-8 Jahre', 'Abenteuer', 25, 'demo_price_kokosnuss', TRUE),
    ('Globi und die Piraten', 'Klassisches Schweizer Kinderbuch mit Globi', 1890, 'Globi Verlag', '6-12 Jahre', 'Abenteuer', 30, 'demo_price_globi', TRUE),
    ('Heidi', 'Der Schweizer Klassiker von Johanna Spyri', 1290, 'Johanna Spyri', '8-12 Jahre', 'Klassiker', 20, 'demo_price_heidi', FALSE),
    ('Die kleine Hexe Lilli', 'Magische Abenteuer mit der kleinen Hexe', 1490, 'Knister', '5-9 Jahre', 'Fantasy', 15, 'demo_price_lilli', FALSE),
    ('Papa Moll im Zoo', 'Lustiges Schweizer Familienbuch', 1690, 'Edith Jonas', '3-7 Jahre', 'Familie', 18, 'demo_price_papamoll', FALSE)
ON CONFLICT DO NOTHING;

-- Update trigger for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('Europe/Zurich', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();