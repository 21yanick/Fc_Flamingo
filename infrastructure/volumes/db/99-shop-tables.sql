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
    email TEXT, -- Guest order tracking email
    status TEXT DEFAULT 'pending', -- pending, confirmed, shipped, delivered, cancelled
    total_amount INTEGER NOT NULL, -- Total in Rappen (CHF cents)
    currency TEXT DEFAULT 'CHF',
    shipping_address JSONB,
    billing_address JSONB,
    payment_method TEXT, -- card, twint
    payment_status TEXT DEFAULT 'pending',
    stripe_session_id TEXT,
    stripe_payment_intent_id TEXT, -- Stripe Payment Intent ID for dashboard links
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW()),
    updated_at TIMESTAMPTZ DEFAULT timezone('Europe/Zurich', NOW())
);

-- Order items (products in each order)
CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    product_name TEXT NOT NULL, -- E-commerce pattern: denormalized for historical data
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

-- Admin-only System: Authenticated user access
-- Any authenticated user can access orders (admin-only system)
CREATE POLICY "Authenticated users can view all orders" ON orders
    FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update all orders" ON orders
    FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Service role can create guest orders (for Stripe webhooks)
CREATE POLICY "Service role can create orders" ON orders
    FOR INSERT WITH CHECK (auth.role() = 'service_role');

-- Admin can view all order items
CREATE POLICY "Authenticated users can view all order items" ON order_items
    FOR SELECT USING (auth.uid() IS NOT NULL);

-- Service role can create order items (for Stripe webhooks)
CREATE POLICY "Service role can create order items" ON order_items
    FOR INSERT WITH CHECK (auth.role() = 'service_role');

-- Sample products for testing (Swiss Kinderbücher)
INSERT INTO products (name, description, price, author, age_group, category, stock_quantity, stripe_price_id, featured) VALUES
    ('FC Flamingo', 'Die Flamingos des FC Flamingo träumen vom ersten Schweizer Meistertitel, doch ihre seltsame Vorliebe, auf einem Bein zu stehen, bringt den Trainer Mister King an den Rand der Verzweiflung. Als plötzlich zwei geheimnisvolle Neuzugänge und ein Couvert mit einer magischen Botschaft auftauchen, nimmt die turbulente Fussballsaison eine überraschende Wendung.', 2200, 'Natalie Barros', '8-13 Jahre', 'Kinderbuch Fussball', 0, 'demo_price_kokosnuss', FALSE)
ON CONFLICT DO NOTHING;

-- ADMIN USER CREATION: Via Supabase Studio only
--
-- Manual steps after DB reset:
-- 1. Go to Studio → Authentication → Users
-- 2. Create user with email: info@fcflamingo.ch
-- 3. Set password as needed
-- 4. RLS policies will automatically grant access to @fcflamingo.ch domain

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