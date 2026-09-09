'use client';

import React from 'react';
import Hero1 from '@/components/ui/hero-1';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero1
        brand="FoundersKit"
        headline={
          <>
            The 0-to-1 Startup OS for <br />
            <span className="text-amber-500 font-serif italic">Venture Formation</span> & Growth.
          </>
        }
        description="Delaware incorporation kits, 83(b) elections, YC post-money SAFE models, and $100k+ in verified cloud perks for tech founders."
        ctaLabel="Explore 420+ Founder Kits"
        ctaHref="/category/startups"
        signInLabel="Submit Founder Tool"
        signInHref="/submit"
      />
    </div>
  );
}
