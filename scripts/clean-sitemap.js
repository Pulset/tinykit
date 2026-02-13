const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

// Read sitemap
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Remove unused namespaces (keep only standard sitemap namespace)
sitemap = sitemap.replace(
  /<urlset[^>]*>/,
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
);

// Write back
fs.writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log('✅ Cleaned sitemap.xml - removed unused namespaces');
