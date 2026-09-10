'use client';

import React from 'react';

export function Header({ siteName = 'FoundersKit' }: { siteName?: string }) {
  return (
    <header className="fk-navbar">
      <div className="container fk-nav-inner">
        <div className="fk-nav-left">
          <a href="/" className="fk-brand">
            <span className="fk-logo-mark">FK</span>
            <span className="fk-brand-text">FoundersKit<span className="fk-dot">.</span></span>
          </a>
          <span className="fk-stage-badge">
            <span className="fk-live-ping" />
            SERIES A·SEED RADAR
          </span>
        </div>
        
        <nav className="fk-nav-center">
          <a href="/" className="fk-nav-link active">Venture Arsenal</a>
          <a href="/trends" className="fk-nav-link">Cap-Table Stacks</a>
          <a href="/category/legal" className="fk-nav-link">Legal & Delaware</a>
          <a href="/sponsor" className="fk-nav-link">Underwrite Stack</a>
        </nav>

        <div className="fk-nav-right">
          <span className="fk-metric-pill">
            <span className="fk-metric-label">CATALOG STATUS</span>
            <span className="fk-metric-val">VERIFIED LIVE</span>
          </span>
          <a href="/submit" className="fk-cta-btn">
            + Submit Venture Tool
          </a>
        </div>
      </div>
    </header>
  );
}
