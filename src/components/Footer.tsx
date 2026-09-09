import React from 'react';
import Link from 'next/link';
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
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="fk-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/productivity">Productivity</Link></li>
                <li><Link href="/category/analytics">Analytics</Link></li>
                <li><Link href="/category/marketing">Marketing</Link></li>
                <li><Link href="/category/finance">Finance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="fk-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
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
