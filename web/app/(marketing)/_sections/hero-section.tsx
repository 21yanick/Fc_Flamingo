"use client"

import Image from "next/image"
import Link from "next/link"
import { FlamingoButton } from "@/components/fc-flamingo/hand-drawn"
import { HeroLogo } from "@/components/fc-flamingo/hybrid"
import { siteConfig } from "@/lib/config"

interface HeroSectionProps {
  isDark: boolean
}

export function HeroSection({ isDark }: HeroSectionProps) {
  const getHeroContent = () => {
    return {
      title: siteConfig.hero.title,
      subtitle: siteConfig.hero.subtitle,
      cta: siteConfig.hero.cta,
      ctaLink: "/shop",
    }
  }

  const hero = getHeroContent()

  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      {/* Background Layer - FULL Hero Coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src={isDark ? "/images/hero-darkmode-bg.png" : "/images/hero-training-bg.jpg"}
          alt={isDark ? "FC Flamingo Stadium - Matchday" : "FC Flamingo Trainingsplatz"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
          quality={85}
        />
      </div>

      {/* Gradient Overlay - Atmosphäre */}
      <div
        className={`absolute inset-0 z-10 bg-gradient-to-b ${
          isDark
            ? "from-matchday-bg/90 via-matchday-bg/60 to-matchday-bg/30"
            : "from-training-bg/90 via-training-bg/60 to-training-bg/30"
        }`}
      />

      {/* Content Layer */}
      <div className="relative z-20 h-full flex items-center">
        {/* Magazine Editorial Layout: Logo links, Content mitte, Flamingo rechts */}
        <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
          {/* Mobile: Centered Stack */}
          <div className="lg:hidden text-center space-y-5 sm:space-y-6 lg:space-y-8">
            {/* Logo - Mobile Centered, HYBRID (3D Tilt + Hand-Drawn Border) */}
            <div className="flex justify-center">
              <HeroLogo size="mobile" />
            </div>

            {/* Content - Mobile Centered */}
            <div>
              <h1 className="text-4xl font-bold mb-4 sm:mb-6 text-primary">{hero.title}</h1>
              <p className="text-xl font-medium mb-6 sm:mb-8 text-foreground leading-relaxed">
                {hero.subtitle}
              </p>
              <Link href={hero.ctaLink}>
                <FlamingoButton variant="outline-hero" size="hero" className="w-full">
                  {hero.cta}
                </FlamingoButton>
              </Link>
            </div>
          </div>

          {/* Desktop/Tablet: Editorial Grid */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start lg:max-w-7xl">
            {/* Logo - Links, HYBRID (3D Tilt + Hand-Drawn Border + Floating) */}
            <div className="lg:col-span-5 flex justify-start items-start">
              <HeroLogo size="desktop" />
            </div>

            {/* Content - Mitte, LEFT-ALIGNED */}
            <div
              className="lg:col-span-4 text-left space-y-8"
              style={{ transform: "rotate(0.5deg)" }}
            >
              <h1 className="text-6xl xl:text-7xl font-bold text-primary leading-tight">
                {hero.title}
              </h1>
              <p className="text-2xl xl:text-3xl font-medium text-foreground leading-relaxed max-w-xl">
                {hero.subtitle}
              </p>
              <div className="pt-2">
                <Link href={hero.ctaLink}>
                  <FlamingoButton variant="outline-hero" size="hero">
                    {hero.cta}
                  </FlamingoButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flamingo Character Layer - Desktop only, steht auf dem Rasen! */}
      <div className="hidden lg:block absolute -bottom-20 right-0 z-30 lg:right-8 xl:-bottom-24 xl:right-12">
        <div className="relative w-48 h-72 md:w-80 md:h-[30rem] lg:w-[44rem] lg:h-[66rem] xl:w-[52rem] xl:h-[78rem]">
          <Image
            src="/images/flamingo-character.png"
            alt="Fizzi - FC Flamingo Charakter"
            fill
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 320px, (max-width: 1280px) 704px, 832px"
            className="object-contain drop-shadow-2xl"
            quality={95}
            priority
          />
        </div>
      </div>
    </section>
  )
}
