import { Clock4, Mail, MapPinned, Phone, Timer } from 'lucide-react';
import { businessDetails } from '@/data/business';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>FIND US</span>
        <h2 className={styles.title}>WE&apos;RE RIGHT IN YOUR NEIGHBOURHOOD</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.mapWrap}>
          <iframe
            src={businessDetails.mapsEmbedSrc}
            width="100%"
            height="420"
            style={{ border: '3px solid #000', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Spin City Laundry location map"
          />
          <p className={styles.mapNote}>
            Can&apos;t see the map?{' '}
            <a
              href={businessDetails.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.addressBlock}>
            <div className={styles.detailHeading}>
              <MapPinned className={styles.detailIcon} aria-hidden="true" />
              <h3>{businessDetails.addressLine1}</h3>
            </div>
            <p>{businessDetails.addressLine2}</p>
          </div>

          <div className={styles.hoursBlock}>
            <span className={styles.hoursLabel}>HOURS</span>
            <p>
              <span className={styles.hoursMeta}>
                <Clock4 className={styles.inlineIcon} aria-hidden="true" />
                <span>Daily:</span>
              </span>
              <span>{businessDetails.hoursShort}</span>
            </p>
            <p className={styles.hoursDuration}>
              <Timer className={styles.inlineIcon} aria-hidden="true" />
              <span>{businessDetails.hoursDuration}</span>
            </p>
          </div>

          <div className={styles.contactBlock}>
            <a href={businessDetails.phoneHref}>
              <Phone className={styles.inlineIcon} aria-hidden="true" />
              <span>{businessDetails.phoneDisplay}</span>
            </a>
            <a href={`mailto:${businessDetails.email}`}>
              <Mail className={styles.inlineIcon} aria-hidden="true" />
              <span>{businessDetails.email}</span>
            </a>
          </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
