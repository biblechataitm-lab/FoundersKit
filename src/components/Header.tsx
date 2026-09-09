'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, TrendingUp, PlusCircle, Menu, X } from 'lucide-react';

export function Header({ siteName = 'FoundersKit' }: { siteName?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0';
      requestAnimationFrame(() => {
        if (headerRef.current) {
          headerRef.current.style.transition = 'opacity 0.4s ease';
          headerRef.current.style.opacity = '1';
        }
      });
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header ref={headerRef} className={`fk-nav ${scrolled ? 'fk-nav-scrolled' : ''}`}>
      <div className="fk-nav-inner">
        <Link href="/" className="fk-nav-brand">
          <span className="fk-nav-brand-text">{siteName}</span>
        </Link>
        <form onSubmit={handleSearchSubmit} className="fk-nav-search">
          <Search size={14} className="fk-nav-search-icon" />
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
        <nav className="fk-nav-links">
          <Link href="/trends" className={`fk-nav-link ${pathname === '/trends' ? 'active' : ''}`}>
            <TrendingUp size={13} /> Trends
          </Link>
          <Link href="/sponsor" className={`fk-nav-link ${pathname === '/sponsor' ? 'active' : ''}`}>Sponsor</Link>
          <Link href="/submit" className="fk-nav-cta"><PlusCircle size={14} /> Submit</Link>
        </nav>
        <button className="fk-nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="fk-nav-mobile-menu">
          <Link href="/trends" onClick={() => setMobileOpen(false)}>Trends</Link>
          <Link href="/sponsor" onClick={() => setMobileOpen(false)}>Sponsor</Link>
          <Link href="/submit" onClick={() => setMobileOpen(false)}>Submit</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
