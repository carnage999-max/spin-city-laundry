import { businessDetails } from '@/data/business';

export const faqItems = [
  {
    question: 'How much does it cost?',
    answer:
      'Self-service washes start from $3.25 for a standard load, with large and extra-large machines available. Wash & fold and drop-off services are priced per pound starting at $1.75/lb with a 5 lb minimum. Full pricing is posted in-store and updated regularly.',
  },
  {
    question: 'What are your hours?',
    answer: `We're open daily from ${businessDetails.hoursShort}. That's ${businessDetails.hoursDuration}. Last wash accepted 45 minutes before closing.`,
  },
  {
    question: 'Do you offer wash and fold?',
    answer:
      "Yes! Drop off your laundry bag with our attendant and collect it clean, dried, and folded — usually ready the same day. Perfect for busy professionals, families, and anyone who'd rather not spend their weekend doing laundry.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit and debit cards, coins, and mobile payments (Apple Pay, Google Pay). Some machines also accept our loyalty app balance.',
  },
  {
    question: 'Do you have oversized washers?',
    answer:
      "Absolutely. We have extra-large front-loading washers specifically designed for comforters, duvets, sleeping bags, rugs, and other bulky items that don't fit in standard home machines.",
  },
  {
    question: 'Is the facility attended?',
    answer:
      'Yes — our facility is staffed during all operating hours. An attendant is always on site to assist with machines, answer questions, and ensure a clean, safe environment.',
  },
  {
    question: 'Do you offer commercial laundry service?',
    answer:
      'Yes. We work with restaurants, salons, gyms, spas, hotels, and other businesses that need reliable, recurring laundry service. Contact us to discuss volume pricing and custom scheduling.',
  },
] as const;
