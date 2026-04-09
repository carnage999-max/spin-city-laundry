import { Heart, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { businessDetails } from '@/data/business';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#location', label: 'Location' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
      <path
        d="M4 4h4.5l4 5.4L17 4H20l-6 7 6 9h-4.5l-4.3-5.8L6.8 20H4l6.2-7.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
      <path
        d="M13.5 20v-6h2.5l.4-3h-2.9V9.1c0-.9.3-1.6 1.6-1.6h1.5V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.5v6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.brandColumn}>
          <Image
            src="/logo.png"
            alt="Spin City Laundry logo"
            width={48}
            height={48}
            className={styles.logo}
          />
          <p className={styles.brandName}>SPIN CITY LAUNDRY®</p>
          <p className={styles.tagline}>Wash · Dry · Done!</p>
          <p className={styles.copy}>© 2025 Spin City Laundry®. All rights reserved.</p>
        </div>

        <div className={styles.linksColumn}>
          <h3>QUICK LINKS</h3>
          <div className={styles.links}>
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.connectColumn}>
          <h3>CONNECT</h3>
          <a href={businessDetails.phoneHref} className={styles.contactLink}>
            <Phone className={styles.contactIcon} aria-hidden="true" />
            <span>{businessDetails.phoneDisplay}</span>
          </a>
          <a href={`mailto:${businessDetails.email}`} className={styles.contactLink}>
            <Mail className={styles.contactIcon} aria-hidden="true" />
            <span>{businessDetails.email}</span>
          </a>
          <div className={styles.socialLinks}>
            <a href={businessDetails.xUrl} target="_blank" rel="noreferrer" aria-label="X">
              <XIcon />
            </a>
            <a href={businessDetails.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={businessDetails.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.bottomRight}>
          Built with <Heart className={styles.heartIcon} aria-hidden="true" /> for clean clothes.
        </p>
      </div>
    </footer>
  );
}
