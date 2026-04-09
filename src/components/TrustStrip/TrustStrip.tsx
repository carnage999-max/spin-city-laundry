import type { ComponentType } from 'react';
import { Clock3, CreditCard, Eye, Sparkles, SquareParking, Wifi, Zap } from 'lucide-react';
import styles from './TrustStrip.module.css';

type TrustPoint = {
  icon: ComponentType<{ className?: string }>;
  label: string;
};

const trustPoints: TrustPoint[] = [
  { label: 'Open Late', icon: Clock3 },
  { label: 'Spotless Facility', icon: Sparkles },
  { label: 'Fast Dryers', icon: Zap },
  { label: 'Cards & Coins', icon: CreditCard },
  { label: 'Free Wi-Fi', icon: Wifi },
  { label: 'Free Parking', icon: SquareParking },
  { label: 'Attended Site', icon: Eye },
];

export default function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="Laundry trust points">
      <div className={styles.viewport}>
        <div className={styles.track}>
          {[...trustPoints, ...trustPoints].map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className={styles.item}
              aria-hidden={index >= trustPoints.length}
            >
              <span className={styles.icon}>
                <item.icon className={styles.iconSvg} />
              </span>
              <span>{item.label}</span>
              <span className={styles.separator}>|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
