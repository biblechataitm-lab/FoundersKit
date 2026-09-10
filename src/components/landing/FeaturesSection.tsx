'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="editorial-roadmap container">
  <div className="editorial-header-rule">
    <h3>The Four Stages of Startup Infrastructure</h3>
  </div>
  <div className="editorial-stage-grid">
    <div className="editorial-stage-card">
      <span className="stage-roman">I</span>
      <h4>Formation &amp; Legal</h4>
      <p>Delaware C-Corp incorporation, 83(b) elections, founder vesting agreements, and IP assignments.</p>
    </div>
    <div className="editorial-stage-card">
      <span className="stage-roman">II</span>
      <h4>Treasury &amp; Capital</h4>
      <p>SAFE issuance, venture debt facilities, FDIC sweep accounts, and high-yield operational cash.</p>
    </div>
    <div className="editorial-stage-card">
      <span className="stage-roman">III</span>
      <h4>Execution Cadence</h4>
      <p>Opinionated issue tracking, continuous delivery pipelines, and asynchronous team communication.</p>
    </div>
    <div className="editorial-stage-card">
      <span className="stage-roman">IV</span>
      <h4>Scale &amp; Governance</h4>
      <p>Automated 409A valuations, board resolution records, SOC2 compliance, and global payroll.</p>
    </div>
  </div>
</section>
  );
}
