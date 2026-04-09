import { businessDetails } from '@/data/business';
import type { ReactNode } from 'react';
import styles from './Services.module.css';

type Service = {
  title: string;
  description: string;
  details: [string, string];
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: 'Self-Service Laundry',
    description:
      "Pick your machine, load up, and go. Top-load and front-load washers in three sizes — standard, large, and extra-large.",
    details: ['Walk-in anytime', 'From $3.25/load'],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="8" width="40" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="32" cy="34" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="24" cy="18" r="2.5" fill="currentColor" />
        <circle cx="32" cy="18" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Wash & Fold',
    description:
      'Drop off your bag and collect it clean, dried, and neatly folded. Perfect for busy schedules.',
    details: ['Ready same day', 'From $1.75/lb'],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 42h32l-6 10H22z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M20 22h24l4 20H16z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M24 22l8-8 8 8" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: 'Commercial Laundry',
    description:
      'Recurring laundry contracts for restaurants, salons, gyms, hotels, and small businesses. Bulk rates available.',
    details: ['Custom schedule', 'Contact for quote'],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="14" y="18" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M24 18v-4h8v4" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="48" cy="26" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="52" cy="38" r="4" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: 'Oversized & Bulky Loads',
    description:
      "Comforters, duvets, sleeping bags, and rugs — our extra-large front-loaders handle what home machines can't.",
    details: ['Same-day turnaround', 'From $8.00/load'],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 26h44v22H10z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M16 26v-8h32v8" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M18 34h28" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: 'Drop-Off Service',
    description:
      'Leave your laundry with our attendant and pick it up fresh. No sorting, no waiting, no fuss.',
    details: ['24hr turnaround', 'From $1.75/lb'],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 20h28l6 12v18H12V32z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M24 20c0-4 3-8 8-8s8 4 8 8" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M24 38h16" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M36 34l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>OUR SERVICES</span>
        <h2 className={styles.title}>EVERYTHING YOUR LAUNDRY NEEDS</h2>
        <p className={styles.description}>
          From quick self-service loads to full-service wash &amp; fold — we&apos;ve got every
          wash covered.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.iconBox}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
            <div className={styles.pills}>
              {service.details.map((detail) => (
                <span key={detail} className={styles.pill}>
                  {detail}
                </span>
              ))}
            </div>
            <a href={businessDetails.phoneHref} className={styles.cardLink}>
              Questions? Call us →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
