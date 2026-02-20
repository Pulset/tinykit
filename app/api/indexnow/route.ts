import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

const INDEXNOW_KEY = '61603048a6d74159ba18880a560ad0d7';
const BASE_URL = 'https://www.tinykit.app';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

// All site routes
const routes = [
  '',
  '/file-sortify',
  '/ai-hairstyle-studio',
  '/file-sortify/privacy',
  '/file-sortify/terms',
  '/ai-hairstyle-studio/privacy',
  '/ai-hairstyle-studio/terms',
];

/**
 * Generate all URLs for the site (all routes x all locales)
 */
function getAllUrls(): string[] {
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;
  const urls: string[] = [];

  for (const route of routes) {
    for (const locale of locales) {
      const prefix = locale === defaultLocale ? '' : `/${locale}`;
      urls.push(`${BASE_URL}${prefix}${route}`);
    }
  }

  return urls;
}

/**
 * GET /api/indexnow
 * Returns the IndexNow key for verification
 */
export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}

/**
 * POST /api/indexnow
 * Submit URLs to IndexNow
 *
 * Body options:
 *   - { "urls": ["https://..."] }  — submit specific URLs
 *   - {} or no body                 — submit all site URLs
 */
export async function POST(request: NextRequest) {
  try {
    // Check for authorization (simple shared secret via header)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${INDEXNOW_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let urlList: string[];

    // Parse request body
    const body = await request.json().catch(() => ({}));

    if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      // Submit specific URLs
      urlList = body.urls;
    } else {
      // Submit all URLs
      urlList = getAllUrls();
    }

    // IndexNow API allows max 10,000 URLs per request
    const batchSize = 10000;
    const results: Array<{ batch: number; status: number; urls: number }> = [];

    for (let i = 0; i < urlList.length; i += batchSize) {
      const batch = urlList.slice(i, i + batchSize);

      const payload = {
        host: 'www.tinykit.app',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: batch,
      };

      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });

      results.push({
        batch: Math.floor(i / batchSize) + 1,
        status: response.status,
        urls: batch.length,
      });
    }

    return NextResponse.json({
      success: true,
      totalUrls: urlList.length,
      results,
    });
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit URLs to IndexNow' },
      { status: 500 }
    );
  }
}
