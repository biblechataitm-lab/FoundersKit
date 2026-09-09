'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="editorial-roadmap container">
  <div class="editorial-header-rule">
    <h3>The Four Stages of Startup Infrastructure</h3>
  </div>
  <div class="editorial-stage-grid">
    <div class="editorial-stage-card">
      <span class="stage-roman">I</span>
      <h4>Formation &amp; Legal</h4>
      <p>Delaware C-Corp incorporation, 83(b) elections, founder vesting agreements, and IP assignments.</p>
    </div>
    <div class="editorial-stage-card">
      <span class="stage-roman">II</span>
      <h4>Treasury &amp; Capital</h4>
      <p>SAFE issuance, venture debt facilities, FDIC sweep accounts, and high-yield operational cash.</p>
    </div>
    <div class="editorial-stage-card">
      <span class="stage-roman">III</span>
      <h4>Execution Cadence</h4>
      <p>Opinionated issue tracking, continuous delivery pipelines, and asynchronous team communication.</p>
    </div>
    <div class="editorial-stage-card">
      <span class="stage-roman">IV</span>
      <h4>Scale &amp; Governance</h4>
      <p>Automated 409A valuations, board resolution records, SOC2 compliance, and global payroll.</p>
    </div>
  </div>
</section>
  );
}
