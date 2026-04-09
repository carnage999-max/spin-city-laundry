import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { businessDetails } from '@/data/business';
import { faqItems } from '@/data/faq';
import { siteConfig } from '@/data/site';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const siteUrl = new URL(siteConfig.primaryUrl);
const logoUrl = new URL(siteConfig.ogImagePath, siteUrl).toString();

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Laundry',
  '@id': `${siteConfig.primaryUrl}/#laundry`,
  name: 'Spin City Laundry®',
  description:
    'Neighbourhood laundromat with self-service machines, wash & fold, and commercial laundry services.',
  url: siteConfig.primaryUrl,
  image: logoUrl,
  logo: logoUrl,
  telephone: businessDetails.phoneSchema,
  email: businessDetails.email,
  hasMap: businessDetails.mapsHref,
  priceRange: '$',
  sameAs: [businessDetails.facebookUrl, businessDetails.xUrl, businessDetails.instagramUrl],
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessDetails.addressLine1,
    addressLocality: 'Pittsfield',
    addressRegion: 'ME',
    postalCode: '04967',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '22:00',
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.primaryUrl}/#website`,
  url: siteConfig.primaryUrl,
  name: businessDetails.name,
  description:
    'Spin City Laundry in Pittsfield, Maine offering self-service washers, dryers, wash and fold, and commercial laundry service.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: businessDetails.name,
  title: 'Spin City Laundry® | Wash · Dry · Done!',
  description:
    'Spin City Laundry® — your neighbourhood laundromat in Pittsfield, Maine with large machines, fast dryers, wash & fold service, and daily hours from 6 AM to 10 PM.',
  keywords: [
    'laundromat',
    'laundromat pittsfield maine',
    'laundromat pittsfield me',
    'laundry service pittsfield maine',
    'wash and fold pittsfield me',
    'wash and fold',
    'coin laundry',
    'self-service laundry',
    'commercial laundry',
    'Spin City Laundry',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Spin City Laundry® | Laundromat in Pittsfield, Maine',
    description:
      'Open daily from 6 AM to 10 PM in Pittsfield, Maine. Self-service laundry, wash & fold, oversized loads, and commercial laundry.',
    type: 'website',
    url: siteConfig.primaryUrl,
    siteName: businessDetails.name,
    locale: 'en_US',
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 512,
        height: 512,
        alt: 'Spin City Laundry logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spin City Laundry® | Laundromat in Pittsfield, Maine',
    description:
      'Open daily from 6 AM to 10 PM in Pittsfield, Maine. Self-service laundry, wash & fold, oversized loads, and commercial laundry.',
    images: [siteConfig.ogImagePath],
  },
  category: 'laundromat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Script
          id="spin-city-local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="spin-city-website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="spin-city-faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
