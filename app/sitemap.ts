import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://www.tinykit.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  // 定义所有需要出现在 sitemap 的页面路径（不含前缀）
  const routes = [
    '', // 首页
    '/file-sortify',
    '/ai-hairstyle-studio',
    '/ai-hairstyle-studio/privacy',
    '/ai-hairstyle-studio/terms',
    '/file-sortify/privacy',
    '/file-sortify/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      // 在 as-needed 模式下，默认语言（en）不加前缀
      const isDefault = locale === defaultLocale;
      const localePrefix = isDefault ? '' : `/${locale}`;
      
      // 生成当前页面的完整 URL
      const url = `${baseUrl}${localePrefix}${route}`;

      // 生成多语言交联 (Alternates)
      const languages = locales.reduce((acc, l) => {
        const lPrefix = l === defaultLocale ? '' : `/${l}`;
        acc[l] = `${baseUrl}${lPrefix}${route}`;
        return acc;
      }, {} as Record<string, string>);

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages,
        },
      });
    });
  });

  return sitemapEntries;
}
