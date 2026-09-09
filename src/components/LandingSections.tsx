'use client';

import React from 'react';
import { Award, FileText, Calculator, Gift, ArrowRight, CheckCircle2, DollarSign, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Sparkles size={12} className="text-amber-600" />
            <span>0-to-1 Venture Architecture</span>
          </div>
          <h2 className="landing-section-heading">Engineered for Venture-Backed & Bootstrapped Founders</h2>
          <p className="landing-section-sub">
            The complete 0-to-1 startup toolkit: Delaware legal incorporation templates, YC post-money SAFE calculators, investor memo formulas, and $100k+ cloud credits.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Incorporation & Legal */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box gold">
                <FileText size={20} />
              </div>
              <span className="bento-badge">Delaware C-Corp Standard</span>
            </div>
            <h3 className="bento-card-title">Legal Incorporation & 83(b) Election Suite</h3>
            <p className="bento-card-desc">
              Standardized founder IP assignments, 4-year vesting schedules with 1-year cliff, board consent resolutions, and IRS Section 83(b) filings.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">$100k+</span>
                <span className="pill-lbl">Cloud Credits</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">4,100+</span>
                <span className="pill-lbl">Active Founders</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">100% Free</span>
                <span className="pill-lbl">Open Templates</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: YC SAFE Math */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Calculator size={20} />
              </div>
              <span className="bento-badge">Post-Money Math</span>
            </div>
            <h3 className="bento-card-title">Cap Table & Dilution Modeling</h3>
            <p className="bento-card-desc">
              Model valuation caps, MFN clauses, and pro-rata rights across multiple fundraising rounds.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> YC Standard SAFE Format</span>
              <span className="check-item"><CheckCircle2 size={13} /> Option Pool Sizing</span>
            </div>
          </div>

          {/* Bento Card 3: Pitch Deck Teardowns */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box stone">
                <Award size={20} />
              </div>
              <span className="bento-badge">Seed to Series A</span>
            </div>
            <h3 className="bento-card-title">Pitch Deck Teardowns & Memos</h3>
            <p className="bento-card-desc">
              Deconstructed seed decks from Stripe, Airbnb, and Brex with annotated narrative slides.
            </p>
          </div>

          {/* Bento Card 4: $100k+ Perks & Credits */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box gold-soft">
                <Gift size={20} />
              </div>
              <span className="bento-badge">Exclusive Founder Perks</span>
            </div>
            <h3 className="bento-card-title">$100k+ Verified Founder Perks & Cloud Credits</h3>
            <p className="bento-card-desc">
              Direct access to AWS Activate, OpenAI credits, Google Cloud for Startups, Stripe processing discounts, and legal fee waivers.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">AWS Activate</span>
              <span className="tag-chip">OpenAI Credits</span>
              <span className="tag-chip">Google Cloud</span>
              <span className="tag-chip">Stripe Atlas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <TrendingUp size={12} className="text-amber-600" />
            <span>Milestone Execution Loop</span>
          </div>
          <h2 className="landing-section-heading">How FoundersKit Guides Your Startup</h2>
          <p className="landing-section-sub">
            Follow the battle-tested roadmap from day-zero ideation to Series A venture scale.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Inception & Legal Formation</h4>
            <p className="step-desc">
              Incorporate Delaware C-Corp, submit 83(b) elections, and setup multi-founder IP vesting.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Seed SAFE Fundraising</h4>
            <p className="step-desc">
              Model dilution scenarios, generate YC SAFEs, and build an investor pipeline spreadsheet.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">GTM & First 100 Customers</h4>
            <p className="step-desc">
              Launch on top startup directories, activate $100k+ in cloud perks, and scale your ARR.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ JOIN FOUNDERSKIT</span>
          <h3 className="launch-cta-heading">Scale Your Startup with 4,100+ Backed Founders</h3>
          <p className="launch-cta-desc">
            Get instant access to legal templates, financial calculators, investor databases, and founder community discounts.
          </p>
          <div className="launch-cta-buttons">
            <a href="/submit" className="launch-cta-primary">
              Submit Founder Tool <ArrowRight size={15} />
            </a>
            <a href="/category/startups" className="launch-cta-secondary">
              Explore Founder OS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
