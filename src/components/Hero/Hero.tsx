import Image from 'next/image';
import { BadgeCheck, Clock4 } from 'lucide-react';
import { businessDetails } from '@/data/business';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.heroLogoWrapMobile}>
            <Image
              src="/logo.png"
              alt="Spin City Laundry logo"
              width={144}
              height={144}
              className={styles.heroLogo}
              priority
            />
          </div>
          <span className={styles.label}>OPEN 7 DAYS A WEEK</span>
          <h1 className={styles.title}>
            FAST. <span className={styles.clean}>CLEAN.</span> EASY.
          </h1>
          <p className={styles.subtitle}>
            Your neighbourhood laundromat — large machines, fast dryers,
            wash &amp; fold service, and a sparkling clean facility.
          </p>
          <p className={styles.hoursNote}>
            <Clock4 className={styles.hoursNoteIcon} aria-hidden="true" />
            <span>
              {businessDetails.hoursSentence}. {businessDetails.hoursDuration}.
            </span>
          </p>

          <div className={styles.actions}>
            <a
              href={businessDetails.mapsHref}
              className={`${styles.button} ${styles.primaryButton}`}
              target="_blank"
              rel="noreferrer"
            >
              GET DIRECTIONS
            </a>
            <a href={businessDetails.phoneHref} className={`${styles.button} ${styles.secondaryButton}`}>
              CALL NOW
            </a>
            <a href="#pricing" className={`${styles.button} ${styles.outlineButton}`}>
              SEE PRICING
            </a>
          </div>

          <div className={styles.trustLine}>
            <span className={styles.trustItem}>
              <BadgeCheck className={styles.trustIcon} aria-hidden="true" />
              <span>No membership needed</span>
            </span>
            <span className={styles.trustItem}>
              <BadgeCheck className={styles.trustIcon} aria-hidden="true" />
              <span>Cards &amp; coins accepted</span>
            </span>
            <span className={styles.trustItem}>
              <BadgeCheck className={styles.trustIcon} aria-hidden="true" />
              <span>Attended facility</span>
            </span>
          </div>
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.heroLogoWrapDesktop}>
            <Image
              src="/logo.png"
              alt="Spin City Laundry logo"
              width={176}
              height={176}
              className={styles.heroLogo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
