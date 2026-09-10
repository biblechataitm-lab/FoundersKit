'use client';

import React, { useState } from 'react';

export function HeroLanding() {
  const [selectedStage, setSelectedStage] = useState<'formation' | 'banking' | 'equity' | 'scale'>('formation');

  const STAGE_DATA = {
    formation: {
      badge: 'PHASE 01: LEGAL & INCORPORATION',
      title: 'Delaware C-Corp & Founder Vesting Rails',
      desc: 'Set up pristine corporate bylaws, 83(b) tax elections, and IP assignments with venture-grade legal rails.',
      tools: ['Stripe Atlas', 'Clerky', 'Carta Legal', 'Gust Launch'],
      runway: 'Day 1 Setup',
      audit: 'Silicon Valley Legal Standard'
    },
    banking: {
      badge: 'PHASE 02: VENTURE TREASURY',
      title: 'Institutional Yield & Multi-Entity Banking',
      desc: 'FDIC-insured sweeps up to $50M, zero-wire fees, and automated yield sweep accounts for tech venture deposits.',
      tools: ['Mercury Treasury', 'Brex Enterprise', 'Ramp Corporate', 'Rho Banking'],
      runway: '18-24 Mo. Preservation',
      audit: 'SOC-2 Type II Certified'
    },
    equity: {
      badge: 'PHASE 03: CAP TABLE & VALUATION',
      title: 'Real-Time Dilution & 409A Valuations',
      desc: 'Automated SAFE notes, convertible debt calculations, and IRS-compliant valuation filings in 72 hours.',
      tools: ['Carta CapTable', 'Pulley Equity', 'AngelList Stack', 'Captable.io'],
      runway: 'Live Dilution Math',
      audit: 'IRS Section 409A Standard'
    },
    scale: {
      badge: 'PHASE 04: HYPERGROWTH GTM',
      title: 'Autonomous Inbound & Enterprise GTM',
      desc: 'Orchestrate outbound pipelines, pipeline intelligence, and customer acquisition telemetry without headcount bloat.',
      tools: ['Linear App', 'Clay Enterprise', 'Attio CRM', 'Segment Protocols'],
      runway: '10x ARR Acceleration',
      audit: 'GDPR & ISO-27001'
    }
  };

  const active = STAGE_DATA[selectedStage];

  return (
    <section className="fk-hero">
      <div className="container fk-hero-inner">
        {/* Top Badging */}
        <div className="fk-badge-row">
          <span className="fk-hero-badge">
            <span className="fk-crown-icon">★</span>
            THE VENTURE CAPITAL &amp; FOUNDER BLUEPRINT 2026
          </span>
          <span className="fk-pill-audit">
            INSPECTION PASSED: 450+ VERIFIED INSTRUMENTS
          </span>
        </div>

        {/* Headline */}
        <h1 className="fk-headline">
          Build &amp; Scale with the <span className="fk-gradient-text">Unfair Advantage</span> of Silicon Valley Stacks.
        </h1>
        
        <p className="fk-subheadline">
          FoundersKit benchmarks the exact corporate formation, high-yield treasury rails, cap-table engines, and GTM software used by YC and a16z-backed tech enterprises.
        </p>

        {/* Interactive Venture Workbench */}
        <div className="fk-workbench">
          <div className="fk-stage-tabs">
            <button 
              type="button"
              className={`fk-stage-tab ${selectedStage === 'formation' ? 'active' : ''}`}
              onClick={() => setSelectedStage('formation')}
            >
              <span className="tab-index">01</span>
              <span>Formation</span>
            </button>
            <button 
              type="button"
              className={`fk-stage-tab ${selectedStage === 'banking' ? 'active' : ''}`}
              onClick={() => setSelectedStage('banking')}
            >
              <span className="tab-index">02</span>
              <span>Treasury</span>
            </button>
            <button 
              type="button"
              className={`fk-stage-tab ${selectedStage === 'equity' ? 'active' : ''}`}
              onClick={() => setSelectedStage('equity')}
            >
              <span className="tab-index">03</span>
              <span>Cap Table</span>
            </button>
            <button 
              type="button"
              className={`fk-stage-tab ${selectedStage === 'scale' ? 'active' : ''}`}
              onClick={() => setSelectedStage('scale')}
            >
              <span className="tab-index">04</span>
              <span>Scale GTM</span>
            </button>
          </div>

          <div className="fk-stage-card">
            <div className="fk-card-header">
              <div>
                <span className="fk-card-tag">{active.badge}</span>
                <h3 className="fk-card-title">{active.title}</h3>
              </div>
              <div className="fk-card-meta">
                <span className="meta-label">RUNWAY TARGET</span>
                <span className="meta-val">{active.runway}</span>
              </div>
            </div>

            <p className="fk-card-desc">{active.desc}</p>

            <div className="fk-tools-grid">
              {active.tools.map((t, idx) => (
                <div key={idx} className="fk-tool-pill">
                  <span className="pill-dot" />
                  <span className="pill-name">{t}</span>
                  <span className="pill-verified">VERIFIED</span>
                </div>
              ))}
            </div>

            <div className="fk-card-footer">
              <span className="fk-footer-audit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                {active.audit}
              </span>
              <a href="#directory" className="fk-card-cta">
                Explore Stage Stacks &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Global Founder Search Bar */}
        <div className="fk-search-wrap">
          <div className="fk-search-box">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              placeholder="Search 450+ venture instruments (e.g. Atlas, Mercury, Carta, Linear, Brex)..." 
              className="fk-search-input" 
            />
            <button type="button" className="fk-search-btn">Filter Blueprint</button>
          </div>
        </div>

        {/* Trust & Metric Bar */}
        <div className="fk-stats-bar">
          <div className="fk-stat-item">
            <span className="fk-stat-number">100%</span>
            <span className="fk-stat-desc">Direct Maker Submissions</span>
          </div>
          <div className="fk-stat-divider" />
          <div className="fk-stat-item">
            <span className="fk-stat-number">Real-Time</span>
            <span className="fk-stat-desc">Verified Catalog Updates</span>
          </div>
          <div className="fk-stat-divider" />
          <div className="fk-stat-item">
            <span className="fk-stat-number">Community</span>
            <span className="fk-stat-desc">Upvotes &amp; Curation</span>
          </div>
          <div className="fk-stat-divider" />
          <div className="fk-stat-item">
            <span className="fk-stat-number">Zero-Tracking</span>
            <span className="fk-stat-desc">Privacy First Directory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
