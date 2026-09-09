'use client';

import React from 'react';

export function Header({ siteName = 'FoundersKit' }: { siteName?: string }) {
  return (
    <header class="editorial-navbar">
  <div class="container editorial-nav-inner">
    <div class="editorial-nav-left">
      <a href="/" class="editorial-logo">FoundersKit</a>
      <span class="editorial-tagline">Est. 2026</span>
    </div>
    <div class="editorial-nav-center">
      <a href="/">Dispatch</a>
      <a href="/trends">Top Ranked</a>
      <a href="/category/developer-tools">Formation</a>
      <a href="/sponsor">Underwrite</a>
    </div>
    <a href="/submit" class="editorial-submit-btn">Submit Venture Tool</a>
  </div>
</header>
  );
}
