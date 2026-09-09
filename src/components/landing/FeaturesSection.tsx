'use client';

import React from 'react';
import { Rocket, BarChart3, Users, Layers, Shield, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Rocket, title: 'Launch Playbooks', desc: 'Step-by-step guides for launching your MVP in 30 days or less.' },
  { icon: BarChart3, title: 'Metrics Dashboard', desc: 'Track the KPIs that matter — CAC, LTV, churn, and growth rate.' },
  { icon: Users, title: 'Founder Network', desc: '5,000+ verified founders sharing insights, advice, and war stories.' },
  { icon: Layers, title: 'Stack Recipes', desc: 'Pre-built tech stacks for different startup stages and verticals.' },
  { icon: Shield, title: 'Due Diligence', desc: 'Every tool is evaluated for pricing, scalability, and founder-friendliness.' },
  { icon: TrendingUp, title: 'Funding Radar', desc: 'Track which tools VC-backed startups are using in their stacks.' },
];

export function FeaturesSection() {
  return (
    <section className="fk-features">
      <div className="fk-features-header">
        <h2 className="fk-section-title">
          Why <span className="fk-accent-text">FoundersKit</span>
        </h2>
        <p className="fk-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="fk-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="fk-feature-card">
            <div className="fk-feature-icon"><f.icon size={22} /></div>
            <h3 className="fk-feature-title">{f.title}</h3>
            <p className="fk-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
