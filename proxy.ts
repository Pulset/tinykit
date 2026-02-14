import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes (/api)
  // - Static files (_next, static, images, etc.)
  // - Files with extensions (e.g. favicon.ico, logo.png)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
