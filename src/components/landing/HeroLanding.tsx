'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="editorial-hero">
  <div class="editorial-masthead container">
    <div class="editorial-date-bar">
      <span>VOLUME IV · ISSUE NO. 42</span>
      <span class="editorial-motto">“Incipit Innovatio” — Founded for Builders</span>
      <span>CIRCULATION: 48,000 FOUNDERS</span>
    </div>
    <div class="editorial-seal-wrap">
      <div class="editorial-wax-seal">★ FK</div>
    </div>
    <h1 class="editorial-headline">
      The Founder’s Almanac &amp; <span class="editorial-italic">Venture Arsenal</span>
    </h1>
    <p class="editorial-dek">
      A curated dispatch of proven software instruments: from incorporation and cap tables to zero-latency issue trackers and treasury rails.
    </p>
    <div class="editorial-search-bar">
      <input type="text" placeholder="Search startup instruments: e.g. Atlas, Carta, Linear..." class="editorial-input" />
      <button class="editorial-btn">Search Almanac</button>
    </div>
  </div>
</section>
  );
}
