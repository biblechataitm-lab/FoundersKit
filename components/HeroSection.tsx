'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Rocket, FileText, Award, DollarSign, ArrowUpRight, Search, CheckCircle2, ShieldCheck, Briefcase, Sparkles } from 'lucide-react';

const STAGES = [
  {
    id: 'incorporation',
    stageName: 'Stage 1: Inception & Legal',
    badge: 'Day 0 Setup',
    checklist: [
      'Delaware C-Corp Filing & EIN Registration',
      'Founder 83(b) Election & IP Assignment Agreement',
      'Stock Purchase Agreement & Vesting Schedule',
    ],
    perk: '$5,000 in Stripe Atlas & Legal Credits',
  },
  {
    id: 'fundraise',
    stageName: 'Stage 2: Seed Round & SAFE',
    badge: 'Fundraising',
    checklist: [
      'YC Standard Post-Money SAFE ($2M Cap Template)',
      'Dynamic Cap Table & Dilution Modeling Spreadsheet',
      '12-Slide High-Conversion Seed Pitch Deck',
    ],
    perk: '$100,000 AWS & Azure Cloud Credits',
  },
  {
    id: 'gtm-scale',
    stageName: 'Stage 3: GTM & First 100 Users',
    badge: 'Growth Engine',
    checklist: [
      'Cold Outbound AI Sequencer & Lead Scraping Kit',
      'Product Hunt / Hacker News Launch Checklist',
      'Customer Discovery & ICP Interview Scripts',
    ],
    perk: '6 Months Free Notion & Hubspot Enterprise',
  },
];

export function HeroSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentStage = STAGES[activeStageIndex];

  return (
    <section className="founderskit-hero">
      <div className="founderskit-hero-grid">
        {/* Left: Founder Value Proposition */}
        <div className="founderskit-hero-content">
          <div className="founderskit-badge">
            <Sparkles size={14} className="text-amber-600" />
            <span>0-to-1 Startup Blueprints & Founder Toolkit</span>
          </div>

          <h1 className="founderskit-title">
            The Definitive OS for <span className="founderskit-highlight">Early-Stage Founders</span> & Indie Builders.
          </h1>

          <p className="founderskit-lead">
            Curated legal frameworks, investor-ready pitch decks, cap table calculators, GTM playbooks, and $100k+ in verified startup cloud perks.
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
              placeholder="Search SAFE agreements, pitch decks, cap tables, perks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="founderskit-search-input"
            />
            <button type="submit" className="founderskit-search-btn">
              Search OS
            </button>
          </form>

          {/* Stage pills */}
          <div className="founderskit-tags-row">
            <span className="founderskit-tags-label">Toolkit:</span>
            <div className="founderskit-tags-list">
              <Link href="/category/legal" className="founderskit-tag-pill">
                <FileText size={12} /> SAFE Legal Docs
              </Link>
              <Link href="/category/finance" className="founderskit-tag-pill">
                <DollarSign size={12} /> Cap Table Math
              </Link>
              <Link href="/category/productivity" className="founderskit-tag-pill">
                <Briefcase size={12} /> Pitch Decks
              </Link>
              <Link href="/category/automation" className="founderskit-tag-pill">
                <Rocket size={12} /> GTM Playbooks
              </Link>
            </div>
          </div>

          {/* Metrics */}
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
              <span className="founderskit-metric-desc">Open Templates</span>
            </div>
          </div>
        </div>

        {/* Right: Milestone Roadmap & Checklist Card */}
        <div className="founderskit-roadmap-card">
          <div className="roadmap-card-header">
            <div className="roadmap-title-group">
              <span className="roadmap-pulse-amber" />
              <span className="roadmap-header-title">Founder Execution Roadmap</span>
            </div>
            <span className="roadmap-stage-badge">{currentStage.badge}</span>
          </div>

          {/* Stage Selector */}
          <div className="roadmap-stage-tabs">
            {STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`roadmap-stage-btn ${activeStageIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {stage.stageName}
              </button>
            ))}
          </div>

          {/* Checklist Items */}
          <div className="roadmap-checklist-window">
            <span className="checklist-heading">ACTIONABLE DELIVERABLES:</span>
            <div className="checklist-items-list">
              {currentStage.checklist.map((item, i) => (
                <div key={i} className="checklist-item-row">
                  <CheckCircle2 size={15} className="checklist-check-icon" />
                  <span className="checklist-item-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Perk Banner */}
          <div className="roadmap-perk-banner">
            <Award size={14} className="text-amber-700" />
            <span className="perk-banner-text">{currentStage.perk}</span>
          </div>

          {/* Card Footer */}
          <div className="roadmap-card-footer">
            <div className="roadmap-verified-note">
              <ShieldCheck size={14} className="text-emerald-700" />
              <span>Lawyer-Reviewed Blueprints</span>
            </div>
            <Link href="/submit" className="roadmap-submit-link">
              Submit Resource <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
