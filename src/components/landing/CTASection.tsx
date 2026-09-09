'use client';

import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="fk-cta">
      <div className="fk-cta-glow" aria-hidden="true" />
      <div className="fk-cta-content">
        <h2 className="fk-cta-title">List Your Startup Tool</h2>
        <p className="fk-cta-subtitle">Reach 5,000+ active founders building the next generation of startups.</p>
        <div className="fk-cta-buttons">
          <a href="/submit" className="fk-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </a>
          <a href="/sponsor" className="fk-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
