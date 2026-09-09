'use client';

import React, { useEffect, useRef } from 'react';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.fk-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="fk-hero">
      <div className="fk-hero-bg" aria-hidden="true" />
      <div className="fk-hero-container">
        <div className="fk-hero-content">
          <div className="fk-animate fk-hero-badge">
            <span>Built for Builders</span>
          </div>
          <h1 className="fk-animate fk-hero-title">
            The Startup Toolkit for{' '}
            <span className="fk-accent-text">Modern Founders</span>
          </h1>
          <p className="fk-animate fk-hero-subtitle">
            Curated resources, tools, and frameworks that successful founders actually use. From MVP to Series A — we've got your stack covered.
          </p>
          <form
            className="fk-animate fk-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="fk-hero-search-icon" />
            <input type="text" placeholder="Search founder tools, resources..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="fk-animate fk-hero-tags">
            <a href="/category/productivity" className="fk-tag">Productivity</a>
            <a href="/category/developer-tools" className="fk-tag">Dev Tools</a>
            <a href="/category/ai" className="fk-tag">AI Tools</a>
            <a href="/trends" className="fk-tag fk-tag-hot">
              <TrendingUp size={12} /> Trending
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
