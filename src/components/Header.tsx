'use client';

import React from 'react';

export function Header({ siteName = 'FoundersKit' }: { siteName?: string }) {
  return (
    <header className="editorial-navbar">
      <div className="container editorial-nav-inner">
        <div className="editorial-nav-left">
          <a href="/" className="editorial-logo">FoundersKit</a>
          <span className="editorial-tagline">Est. 2026</span>
        </div>
        <div className="editorial-nav-center">
        <a href="/">Dispatch</a>
        <a href="/trends">Top Ranked</a>
        <a href="/category/legal">Formation & Legal</a>
        <a href="/sponsor">Underwrite</a>
        </div>
        <a href="/submit" className="editorial-submit-btn">Submit Venture Tool</a>
      </div>
    </header>
  );
}
