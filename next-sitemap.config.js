/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

// Helper function to get file modification time
function getFileModTime(relativePath) {
  try {
    // Map URL path to file system path
    let fsPath = relativePath;

    // Remove leading slash and convert to file path
    if (fsPath.startsWith('/')) {
      fsPath = fsPath.slice(1);
    }

    // Handle directory routes (e.g., /file-sortify -> app/file-sortify/page.tsx)
    const possiblePaths = [
      path.join(process.cwd(), 'app', fsPath, 'page.tsx'),
      path.join(process.cwd(), 'app', fsPath + '.tsx'),
      path.join(process.cwd(), 'app', fsPath, 'index.tsx'),
      path.join(process.cwd(), 'public', fsPath),
    ];

    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        const stats = fs.statSync(possiblePath);
        return new Date(stats.mtime).toISOString();
      }
    }

    // Default to current time if file not found
    return new Date().toISOString();
  } catch (error) {
    console.error(`Error getting mod time for ${relativePath}:`, error.message);
    return new Date().toISOString();
  }
}

module.exports = {
  siteUrl: 'https://www.tinykit.app',
  generateRobotsTxt: true,

  // Default values for all pages
  changefreq: 'weekly',
  priority: 0.7,

  // Disable index sitemap generation for small sites
  generateIndexSitemap: false,

  // Split large sitemap into multiple files if needed
  sitemapSize: 7000,

  // Exclude paths from sitemap
  exclude: [
    '/api/*',
    '/admin/*',
    '/hairstyle', // Redirects to /ai-hairstyle-studio
    '/hairstyle/*', // Subpages of /hairstyle (privacy, terms)
    '/*.png',
    '/*.jpg',
    '/*.jpeg',
    '/*.svg',
    '/*.ico',
    '/*.webmanifest',
    '/robots.txt',
    '/sitemap.xml',
  ],

  // Custom transformation function for each path
  transform: async (config, path) => {
    // Set different priorities based on path patterns
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Home page - highest priority
    if (path === '/') {
      priority = 1;
      changefreq = 'daily';
    }
    // Main app pages
    else if (
      path.includes('/file-sortify') ||
      path.includes('/ai-hairstyle-studio')
    ) {
      // Privacy policy and terms pages - lower priority
      if (path.includes('/privacy') || path.includes('/terms')) {
        priority = 0.5;
        changefreq = 'yearly';
      } else {
        // Main app pages
        priority = 0.9;
        changefreq = 'weekly';
      }
    }

    // Get actual file modification time
    const lastmod = getFileModTime(path);

    // Return transformed entry
    return {
      loc: path,
      changefreq,
      priority,
      lastmod,
    };
  },

  // Additional paths (if you have dynamic routes)
  additionalPaths: async (config) => {
    const result = [];

    // You can add dynamic paths here
    // Example:
    // result.push({
    //   loc: '/your-dynamic-page',
    //   changefreq: 'weekly',
    //   priority: 0.8,
    //   lastmod: new Date().toISOString(),
    // });

    return result;
  },

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
};
