/**
 * IndexNow URL Submission Script
 *
 * Submit all site URLs to IndexNow for faster indexing by Bing and other
 * participating search engines.
 *
 * Usage:
 *   npx tsx scripts/submit-indexnow.ts          # Submit all URLs
 *   npx tsx scripts/submit-indexnow.ts --dry-run # Preview without submitting
 */

const INDEXNOW_KEY = '61603048a6d74159ba18880a560ad0d7';
const BASE_URL = 'https://www.tinykit.app';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

const locales = ['en', 'zh', 'ja', 'es', 'pt', 'de', 'ru', 'ko', 'fr'];
const defaultLocale = 'en';

const routes = [
  '',
  '/file-sortify',
  '/ai-hairstyle-studio',
  '/file-sortify/privacy',
  '/file-sortify/terms',
  '/ai-hairstyle-studio/privacy',
  '/ai-hairstyle-studio/terms',
];

function getAllUrls(): string[] {
  const urls: string[] = [];
  for (const route of routes) {
    for (const locale of locales) {
      const prefix = locale === defaultLocale ? '' : `/${locale}`;
      urls.push(`${BASE_URL}${prefix}${route}`);
    }
  }
  return urls;
}

async function submitToIndexNow(dryRun: boolean) {
  const urls = getAllUrls();

  console.log(`\n📋 IndexNow URL Submission`);
  console.log(`${'─'.repeat(50)}`);
  console.log(`Total URLs: ${urls.length}`);
  console.log(`Key: ${INDEXNOW_KEY}`);
  console.log(`Endpoint: ${INDEXNOW_ENDPOINT}`);
  console.log(`Key Location: ${BASE_URL}/${INDEXNOW_KEY}.txt`);
  console.log(`${'─'.repeat(50)}\n`);

  if (dryRun) {
    console.log('🔍 Dry run mode - URLs that would be submitted:\n');
    urls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    console.log(`\n✅ Dry run complete. ${urls.length} URLs would be submitted.`);
    return;
  }

  const payload = {
    host: 'www.tinykit.app',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log('🚀 Submitting URLs to IndexNow...\n');

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    console.log(`Response Status: ${response.status} ${response.statusText}`);

    if (response.status === 200) {
      console.log('\n✅ All URLs submitted successfully!');
    } else if (response.status === 202) {
      console.log('\n✅ URLs accepted for processing.');
    } else {
      const text = await response.text().catch(() => '');
      console.log(`\n⚠️  Unexpected response: ${text}`);
    }

    // Status code reference
    const statusMessages: Record<number, string> = {
      200: 'OK - URLs submitted successfully',
      202: 'Accepted - URLs accepted for processing',
      400: 'Bad Request - Invalid format',
      403: 'Forbidden - Key not valid',
      422: 'Unprocessable Entity - URLs dont belong to host or key mismatch',
      429: 'Too Many Requests - Potential spam detected',
    };

    if (statusMessages[response.status]) {
      console.log(`   ${statusMessages[response.status]}`);
    }
  } catch (error) {
    console.error('\n❌ Error submitting URLs:', error);
    process.exit(1);
  }
}

// Parse args
const dryRun = process.argv.includes('--dry-run');
submitToIndexNow(dryRun);
