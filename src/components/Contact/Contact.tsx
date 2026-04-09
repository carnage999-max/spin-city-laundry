'use client';

import { CheckCircle2, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { businessDetails } from '@/data/business';
import styles from './Contact.module.css';

type FormState = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  contact: '',
  subject: 'General Enquiry',
  message: '',
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.inlineIcon}>
      <path
        d="M13.5 20v-6h2.5l.4-3h-2.9V9.1c0-.9.3-1.6 1.6-1.6h1.5V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.5v6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isComplete =
    formState.name.trim() !== '' &&
    formState.contact.trim() !== '' &&
    formState.subject.trim() !== '' &&
    formState.message.trim() !== '';

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!isComplete || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong while sending your message.');
      }

      setSubmitted(true);
      setFormState(initialFormState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>REACH OUT</span>
        <h2 className={styles.title}>LET&apos;S TALK LAUNDRY</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.infoColumn}>
          <a href={businessDetails.phoneHref} className={styles.callBlock}>
            <span className={styles.blockTitle}>
              <Phone className={styles.blockIcon} aria-hidden="true" />
              <span>{businessDetails.phoneDisplay}</span>
            </span>
            <span>Tap to call — we answer fast.</span>
          </a>

          <div className={styles.infoBlock}>
            <a href={`mailto:${businessDetails.email}`} className={styles.blockTitle}>
              <Mail className={styles.blockIcon} aria-hidden="true" />
              <span>{businessDetails.email}</span>
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.blockTitle}>Facebook</span>
            <a
              href={businessDetails.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FacebookIcon />
              <span>facebook.com/spincitylaundry</span>
            </a>
          </div>

          <div className={styles.callout}>
            <p>
              Running a business? Ask about our commercial laundry accounts — custom rates,
              flexible pickup, and priority service.
            </p>
            <a href="#contact-form" className={styles.calloutLink}>
              Enquire about commercial services →
            </a>
          </div>
        </div>

        {submitted ? (
          <div className={styles.successCard} aria-live="polite">
            <CheckCircle2 className={styles.successIcon} aria-hidden="true" />
            <span>Message received! We&apos;ll be in touch within 24 hours.</span>
          </div>
        ) : (
          <div className={styles.formCard} id="contact-form" role="form" aria-labelledby="contact-form-title">
            <h3 id="contact-form-title" className={styles.formTitle}>
              Send us a message
            </h3>

            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formState.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-method">Phone/Email</label>
              <input
                id="contact-method"
                type="text"
                placeholder="Phone number or email"
                value={formState.contact}
                onChange={(event) => updateField('contact', event.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                value={formState.subject}
                onChange={(event) => updateField('subject', event.target.value)}
              >
                <option>General Enquiry</option>
                <option>Wash &amp; Fold Booking</option>
                <option>Commercial Account</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                value={formState.message}
                onChange={(event) => updateField('message', event.target.value)}
              />
            </div>

            {errorMessage ? (
              <p className={styles.errorMessage} role="alert">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="button"
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={!isComplete || isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
