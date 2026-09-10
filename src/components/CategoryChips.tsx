'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Incorporation & Legal",
    "path": "/category/legal"
  },
  {
    "label": "Cap Table & Raise",
    "path": "/category/fundraising"
  },
  {
    "label": "Go-To-Market",
    "path": "/category/gtm"
  },
  {
    "label": "Treasury & Finance",
    "path": "/category/finance"
  },
  {
    "label": "Venture Stack",
    "path": "/category/startups"
  },
  {
    "label": "Builder Tools",
    "path": "/category/developer-tools"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll category-chips-list">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`category-chip ${isActive ? 'active chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
