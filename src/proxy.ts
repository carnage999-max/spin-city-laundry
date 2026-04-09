import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

const redirectHosts = new Set<string>(siteConfig.redirectHosts);

export function proxy(request: NextRequest) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return NextResponse.next();
  }

  const host = request.headers.get('host');

  if (!host || !redirectHosts.has(host)) {
    return NextResponse.next();
  }

  const destination = new URL(request.url);
  destination.protocol = 'https:';
  destination.host = siteConfig.primaryHost;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
};
