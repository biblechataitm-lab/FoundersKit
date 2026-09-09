'use client';

import React from 'react';

const STATS = [
  { value: '1,200+', label: 'Founder Tools' },
  { value: '5K+', label: 'Active Founders' },
  { value: '200+', label: 'Stack Recipes' },
  { value: '94%', label: 'Would Recommend' },
];

export function StatsSection() {
  return (
    <section className="fk-stats">
      <div className="fk-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="fk-stat-card">
            <div className="fk-stat-value">{s.value}</div>
            <div className="fk-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
