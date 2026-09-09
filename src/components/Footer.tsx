import React from 'react';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'FoundersKit' }: { siteName?: string }) {
  return (
    <footer className="fk-footer">
      <div className="fk-footer-content">
        <div className="fk-footer-top">
          <div className="fk-footer-brand-area">
            <div className="fk-footer-brand"><span>{siteName}</span></div>
            <p className="fk-footer-tagline">The curated toolkit for startup founders. Discover the tools that successful companies actually use, from idea to IPO.</p>
            <div className="fk-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="fk-footer-links-grid">
            <div>
              <h4 className="fk-footer-heading">Explore</h4>
              <ul>
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="fk-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/productivity">Productivity</a></li>
                <li><a href="/category/analytics">Analytics</a></li>
                <li><a href="/category/marketing">Marketing</a></li>
                <li><a href="/category/finance">Finance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="fk-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fk-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
