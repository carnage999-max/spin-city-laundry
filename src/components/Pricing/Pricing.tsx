import { Banknote, Coins, CreditCard, Smartphone } from 'lucide-react';
import pricesData from '../../../data/prices.json';
import styles from './Pricing.module.css';

type PriceRow = {
  label: string;
  price: string;
};

type PaymentMethod = {
  label: string;
  icon: 'credit-card' | 'coins' | 'smartphone' | 'banknote';
};

type PricesData = {
  machines: PriceRow[];
  services: PriceRow[];
  paymentMethods: PaymentMethod[];
};

const priceTable = pricesData as PricesData;

const paymentIcons = {
  'credit-card': CreditCard,
  coins: Coins,
  smartphone: Smartphone,
  banknote: Banknote
};

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>TRANSPARENT PRICING</span>
        <h2 className={styles.title}>NO SURPRISES. JUST CLEAN CLOTHES.</h2>
      </div>

      <div className={styles.columns}>
        <div className={styles.card}>
          <div className={`${styles.tableHeader} ${styles.yellowHeader}`}>SELF-SERVICE MACHINES</div>
          <table className={styles.table}>
            <tbody>
              {priceTable.machines.map((row, index) => (
                <tr key={row.label} className={index % 2 === 1 ? styles.altRow : ''}>
                  <td>{row.label}</td>
                  <td className={styles.price}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.disclaimer}>*Prices may vary by location. Exact pricing posted in-store.*</p>
        </div>

        <div className={styles.card}>
          <div className={`${styles.tableHeader} ${styles.blueHeader}`}>FULL-SERVICE OPTIONS</div>
          <table className={styles.table}>
            <tbody>
              {priceTable.services.map((row, index) => (
                <tr key={row.label} className={index % 2 === 1 ? styles.altRow : ''}>
                  <td>{row.label}</td>
                  <td className={styles.price}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.payments}>
        {priceTable.paymentMethods.map((method) => {
          const Icon = paymentIcons[method.icon];

          return (
            <span key={method.label} className={styles.paymentPill}>
              <Icon className={styles.paymentIcon} aria-hidden="true" />
              <span>{method.label}</span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
