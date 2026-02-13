import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://www.tinykit.app';

// 页面配置,包含优先级和更新频率
interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

const routeConfigs: RouteConfig[] = [
  // 首页 - 最高优先级
  { path: '', priority: 1.0, changeFrequency: 'daily' },
  // 产品页面 - 高优先级
  { path: '/file-sortify', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-hairstyle-studio', priority: 0.9, changeFrequency: 'weekly' },
  // 法律页面 - 低优先级,低更新频率
  { path: '/file-sortify/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/file-sortify/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/ai-hairstyle-studio/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/ai-hairstyle-studio/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routeConfigs.forEach(({ path, priority, changeFrequency }) => {
    locales.forEach((locale) => {
      // 在 as-needed 模式下，默认语言（en）不加前缀
      const isDefault = locale === defaultLocale;
      const localePrefix = isDefault ? '' : `/${locale}`;

      // 生成当前页面的完整 URL
      const url = `${baseUrl}${localePrefix}${path}`;

      // 生成多语言交联 (Alternates)
      const languages: Record<string, string> = {
        'x-default': `${baseUrl}${path}`, // x-default 指向默认语言版本
      };

      locales.forEach((l) => {
        const lPrefix = l === defaultLocale ? '' : `/${l}`;
        languages[l] = `${baseUrl}${lPrefix}${path}`;
      });

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages,
        },
      });
    });
  });

  return sitemapEntries;
}
