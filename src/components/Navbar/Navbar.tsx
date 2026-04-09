'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { businessDetails } from '@/data/business';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#location', label: 'Location' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Main navigation">
        <a href="#hero" className={styles.brand} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Spin City Laundry logo"
            width={48}
            height={48}
            className={styles.logo}
            priority
          />
          <span className={styles.brandName}>SPIN CITY LAUNDRY®</span>
        </a>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.desktopCta}>
          <a
            href={businessDetails.mapsHref}
            className={styles.cta}
            target="_blank"
            rel="noreferrer"
          >
            GET DIRECTIONS
          </a>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          ≡
        </button>
      </nav>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href={businessDetails.mapsHref}
            className={styles.cta}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GET DIRECTIONS
          </a>
        </div>
      </div>
    </header>
  );
}
