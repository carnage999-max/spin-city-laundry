export const businessDetails = {
  name: 'Spin City Laundry®',
  addressLine1: '117 Somerset Ave.',
  addressLine2: 'Pittsfield, ME 04967',
  fullAddress: '117 Somerset Ave., Pittsfield, ME 04967',
  phoneDisplay: '207-947-1999',
  phoneHref: 'tel:+12079471999',
  phoneSchema: '+12079471999',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@spincitylaundry.com',
  hoursShort: '6:00 AM – 10:00 PM',
  hoursSentence: 'Open daily from 6:00 AM to 10:00 PM',
  hoursDuration: '16 hours a day, 7 days a week',
  mapsHref: 'https://maps.google.com/?q=117+Somerset+Ave.,+Pittsfield,+ME+04967',
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=117%20Somerset%20Ave.%2C%20Pittsfield%2C%20ME%2004967&t=&z=15&ie=UTF8&iwloc=&output=embed',
  facebookUrl: 'https://www.facebook.com/spincitylaundry',
  xUrl: 'https://x.com/spincitylaundry',
  instagramUrl: 'https://www.instagram.com/spincitylaundry/'
} as const;
