'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Rocket, FileText, DollarSign, Award, Gift, Search, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Star, Users } from 'lucide-react';

const FOUNDER_STAGES = [
  {
    id: 'inception',
    stage: 'Stage 1: Inception & Legal Formation',
    focus: 'Delaware C-Corp • 83(b) Election • Founder Vesting',
    timeline: 'Weeks 1-4',
    perks: '$100,000+ Cloud & Legal Credits Included',
    checklist: ['Clerky / Stripe Atlas Setup', 'Co-founder IP Assignment', 'Initial Cap Table Allocation'],
  },
  {
    id: 'seed-safe',
    stage: 'Stage 2: Seed Round & SAFE Notes',
    focus: 'YC Post-Money SAFE • Cap Table Modeling • Investor CRM',
    timeline: 'Months 2-5',
    perks: 'Pre-vetted Angel & Micro-VC Syndicate Access',
    checklist: ['SAFE vs Priced Model', 'Data Room Diligence Vault', 'Lead Investor Term Sheet'],
  },
  {
    id: 'gtm-scale',
    stage: 'Stage 3: GTM & First 100 Paying Users',
    focus: 'Product Hunt Launchpad • Cold Email Stack • Stripe Billing',
    timeline: 'Months 6-12',
    perks: 'Growth Mentorship & Zero-Fee Payment Rails',
    checklist: ['Landing Page Conversion Tuning', 'Automated Outbound Pipeline', 'Retention & Churn Dashboard'],
  },
];

export function HeroSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentStage = FOUNDER_STAGES[activeStageIndex];

  return (
    <section className="founderskit-hero">
      <div className="founderskit-ambient-glow" />

      <div className="founderskit-hero-grid">
        {/* Left: Venture Value Proposition */}
        <div className="founderskit-hero-content">
          <div className="founderskit-badge">
            <span className="founderskit-spark-gold">✦</span>
            <span>0-to-1 Startup Execution OS & Stack • 2026</span>
            <span className="founderskit-badge-pill">VC READY</span>
          </div>

          <h1 className="founderskit-title">
            The Complete OS for <span className="founderskit-gold-text">Founders</span>, SAFEs, Pitch Decks & Perks.
          </h1>

          <p className="founderskit-lead">
            Everything you need from incorporation to Series A: legal templates, cap table calculators, pitch deck teardowns, and $100k+ in startup credits.
          </p>

          {/* Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="founderskit-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="founderskit-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search SAFE models, pitch deck templates, founder perks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="founderskit-search-input"
            />
            <button type="submit" className="founderskit-search-btn">
              Explore OS
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="founderskit-cta-row">
            <Link href="/category/productivity" className="founderskit-primary-btn">
              Explore 0-to-1 OS <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="founderskit-secondary-btn">
              Submit Founder Tool
            </Link>
          </div>

          {/* Social Proof */}
          <div className="founderskit-social-proof">
            <div className="founderskit-avatar-stack">
              <span className="founder-avatar av-1">🚀</span>
              <span className="founder-avatar av-2">💡</span>
              <span className="founder-avatar av-3">📈</span>
              <span className="founder-avatar av-4">🏆</span>
            </div>
            <div className="founderskit-proof-text">
              <div className="founderskit-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-600 text-amber-600" />
                ))}
                <span className="founderskit-rating">4.9/5.0</span>
              </div>
              <span className="founderskit-subtext">Trusted by 4,100+ venture-backed founders & angels</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="founderskit-tags-row">
            <span className="founderskit-tags-label">Toolkits:</span>
            <div className="founderskit-tags-list">
              <Link href="/category/productivity" className="founderskit-tag-pill">
                <FileText size={12} /> Legal SAFEs
              </Link>
              <Link href="/category/finance" className="founderskit-tag-pill">
                <DollarSign size={12} /> Cap Table Math
              </Link>
              <Link href="/category/ai" className="founderskit-tag-pill">
                <Rocket size={12} /> Pitch Decks
              </Link>
              <Link href="/category/automation" className="founderskit-tag-pill">
                <Gift size={12} /> $100k Perks
              </Link>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="founderskit-metrics-strip">
            <div className="founderskit-metric-box">
              <span className="founderskit-metric-val">$100k+</span>
              <span className="founderskit-metric-desc">Cloud Perks</span>
            </div>
            <div className="founderskit-metric-divider" />
            <div className="founderskit-metric-box">
              <span className="founderskit-metric-val">4,100+</span>
              <span className="founderskit-metric-desc">Active Founders</span>
            </div>
            <div className="founderskit-metric-divider" />
            <div className="founderskit-metric-box">
              <span className="founderskit-metric-val">100% Free</span>
              <span className="founderskit-metric-desc">Verified Blueprints</span>
            </div>
          </div>
        </div>

        {/* Right: Milestone Execution Roadmap Card */}
        <div className="founderskit-roadmap-card">
          <div className="roadmap-card-header">
            <div className="roadmap-title-group">
              <Award size={16} className="text-amber-700" />
              <span className="roadmap-header-title">Startup Execution Blueprint</span>
            </div>
            <span className="roadmap-timeline-badge">{currentStage.timeline}</span>
          </div>

          {/* Stage Switcher */}
          <div className="roadmap-stage-tabs">
            {FOUNDER_STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`roadmap-stage-btn ${activeStageIndex === idx ? 'active' : ''}`}
                type="button"
              >
                Stage {idx + 1}
              </button>
            ))}
          </div>

          {/* Stage Header Info */}
          <div className="roadmap-stage-info">
            <h4 className="stage-title">{currentStage.stage}</h4>
            <p className="stage-focus">{currentStage.focus}</p>
          </div>

          {/* Actionable Checklist */}
          <div className="roadmap-checklist">
            {currentStage.checklist.map((item) => (
              <div key={item} className="checklist-item">
                <CheckCircle2 size={13} className="text-amber-700 flex-shrink-0" />
                <span className="checklist-text">{item}</span>
              </div>
            ))}
          </div>

          {/* Perks Banner Inside Card */}
          <div className="roadmap-perks-box">
            <Gift size={13} className="text-amber-800 flex-shrink-0" />
            <span className="perks-text">{currentStage.perks}</span>
          </div>

          {/* Card Footer */}
          <div className="roadmap-card-footer">
            <span className="roadmap-verified-text">✓ Standard Delaware & YC Compatible</span>
            <Link href="/submit" className="roadmap-submit-link">
              Submit Tool <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
