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
}

export const siteConfig: SiteConfig = {
  title: 'SleepFlow',
  description: 'SleepFlow',
  keywords: 'SleepFlow',
  url: 'https://www.tinykit.app/sleepflow',
  author: 'TinyKit Team',
  email: 'geek.bo@hotmail.com',
  logo: 'https://cdn.tinykit.app/sleepflow/images/logo.png',
  stats: {
    happyUsers: '10,000+',
    rating: 5,
  },
};

// Placeholder App Store URL — swap with the real id once the app is live.
export const productConfig: ProductConfig = {
  appStoreUrl: 'https://apps.apple.com/app/idSLEEPFLOW_PLACEHOLDER',
};
