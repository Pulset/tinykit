// Type definitions
export interface SiteConfig {
  title: string;
  description: string;
  keywords: string;
  url: string;
  author: string;
  email: string;
  logo: string;
  stats: {
    happyUsers: string;
    rating: number;
  };
}

export interface ProductConfig {
  appStoreUrl: string;
  pricing: {
    free: {
      titleKey: string;
      price: string;
      periodKey: string;
      badgeKey: string;
      featureKeys: string[];
    };
  };
}

export const siteConfig: SiteConfig = {
  title: 'AI Hairstyle Studio',
  description: 'AI Hairstyle Studio',
  keywords: 'AI Hairstyle Studio',
  url: 'https://www.tinykit.app/ai-hairstyle-studio',
  author: 'TinyKit Team',
  email: 'geek.bo@hotmail.com',
  logo: 'https://cdn.tinykit.app/hairstyle/images/logo.png',
  stats: {
    happyUsers: '50,000+',
    rating: 5,
  },
};

export const productConfig = {
  appStoreUrl: 'https://apps.apple.com/app/id6756533779', // AI Hairstyle App Store URL
  pricing: {
    free: {
      titleKey: 'freeTitle',
      price: '$0',
      periodKey: 'period',
      badgeKey: 'badgeText',
      featureKeys: ['0', '1', '2', '3', '4'],
    },
  },
};
