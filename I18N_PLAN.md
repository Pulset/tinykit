# TinyKit 全站国际化实施方案

## 一、概述

### 目标
将 TinyKit 网站所有用户可见内容、SEO 元数据、结构化数据 (JSON-LD) 全面国际化，覆盖 9 种语言 (en, zh, ja, es, pt, de, ru, ko, fr)。

### 核心决策
| 决策点 | 方案 |
|--------|------|
| 数据层重构 | **方案 B** — 数据文件改为返回翻译 key，组件中通过 `useTranslations()` 解析 |
| 法律页面 | **方案 A** — 保持英文法律文本，顶部添加多语言提示 |
| 执行顺序 | 先完成 `en.json` 全部翻译 key，一个产品一个产品来 |

### 当前状态
| 区域 | 文件数 | 状态 |
|------|--------|------|
| i18n 基础设施 (routing/middleware) | 3 | ✅ 已完成 |
| 翻译文件结构 (messages/) | 9 | ✅ 已有 3 个命名空间 |
| 首页 (Index page) | 1 | ✅ 已国际化 |
| Sitemap | 1 | ✅ 已国际化 |
| 根 layout 元数据 | 1 | ❌ 硬编码英文 |
| File Sortify (layout + page + 9 组件 + 2 数据文件) | 13 | ❌ 硬编码英文 |
| AI Hairstyle (layout + page + 8 组件 + 2 数据文件) | 13 | ❌ 硬编码英文 |
| StructuredData 共享组件 | 1 | ❌ 部分硬编码 |
| 隐私/条款页 | 4 | ❌ 硬编码英文 |

---

## 二、翻译 Key 命名规范

### Namespace 设计

```
messages/en.json
{
  "Index": { ... },              // ✅ 已有 — 首页
  "Brand": { ... },              // ✅ 已有 — 品牌
  "Common": { ... },             // ✅ 已有 — 需扩充

  "Metadata": { ... },           // 🆕 根 layout SEO 元数据
  "StructuredData": { ... },     // 🆕 JSON-LD 结构化数据

  "FileSortify": { ... },        // 🆕 File Sortify 产品全部内容
  "AIHairstyle": { ... },        // 🆕 AI Hairstyle Studio 产品全部内容

  "Legal": { ... }               // 🆕 法律页面提示
}
```

### Key 命名约定
- 使用 **camelCase**，与现有 key 风格一致
- 层级用 `.` 分隔: `FileSortify.hero.title`
- 数组项使用索引: `FileSortify.features.items.0.title`
- aria/alt 使用 `Aria` 或 `Alt` 后缀: `FileSortify.hero.ctaAria`

---

## 三、翻译 Key 完整清单

### 3.1 `Metadata` — 根 layout SEO

**来源文件**: `app/[locale]/layout.tsx`

```jsonc
{
  "Metadata": {
    "title": "TinyKit - Crafting Minimalist & Practical Apps",
    "titleTemplate": "%s | TinyKit",
    "description": "Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.",
    "ogTitle": "TinyKit - Crafting Minimalist & Practical Apps",
    "ogDescription": "Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.",
    "ogImageAlt": "TinyKit - Crafting Minimalist & Practical Apps",
    "twitterTitle": "TinyKit - Crafting Minimalist & Practical Apps",
    "twitterDescription": "Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.",
    "classification": "Mac Utilities"
  }
}
```

**改造方式**: 将 `export const metadata` 改为 `generateMetadata()` 函数

```tsx
// app/[locale]/layout.tsx
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: { default: t('title'), template: t('titleTemplate') },
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      // ... images/url 等不可翻译字段保持原样
    },
    twitter: {
      title: t('twitterTitle'),
      description: t('twitterDescription'),
    },
    // keywords, robots, metadataBase 等不可翻译字段保持原样
  };
}
```

---

### 3.2 `StructuredData` — JSON-LD 结构化数据

**来源文件**: `app/components/StructuredData.tsx`、各 layout.tsx 中的内联 JSON-LD

```jsonc
{
  "StructuredData": {
    "orgDescription": "Developer of productivity apps for Mac users",
    "orgKnowsAbout": {
      "0": "Mac software development",
      "1": "File organization",
      "2": "Productivity tools",
      "3": "macOS utilities"
    },
    "websiteDescription": "Productivity apps for Mac users",
    "productCategory": "Mac Utility Software",
    "fileManagement": "File Management"
  }
}
```

**改造方式**: `StructuredData` 组件新增 `locale` prop，内部用 `useTranslations('StructuredData')` 获取翻译

```tsx
// app/components/StructuredData.tsx
'use client';
import { useTranslations } from 'next-intl';

export default function StructuredData({ productData, breadcrumbList }: StructuredDataProps) {
  const t = useTranslations('StructuredData');

  const organizationSchema = {
    // ...
    description: t('orgDescription'),
    knowsAbout: [t('orgKnowsAbout.0'), t('orgKnowsAbout.1'), t('orgKnowsAbout.2'), t('orgKnowsAbout.3')],
  };

  const websiteSchema = {
    // ...
    description: t('websiteDescription'),
  };
  // ...
}
```

---

### 3.3 `Common` — 扩充公共翻译

**来源**: 多个组件共用的文案

```jsonc
{
  "Common": {
    "download": "Download",                    // ✅ 已有
    "support": "Support",                      // ✅ 已有
    "privacy": "Privacy Policy",               // ✅ 已有
    "terms": "Terms of Service",               // ✅ 已有
    "downloadNow": "Download Now",             // 🆕
    "downloadForMac": "Download for Mac",      // 🆕
    "downloadOnMacAppStore": "Download on the Mac App Store",  // 🆕
    "downloadOnAppStore": "Download on Mac App Store",         // 🆕
    "email": "Email",                          // 🆕
    "allRightsReserved": "All rights reserved.", // 🆕
    "home": "Home",                            // 🆕 面包屑
    "features": "Features",                    // 🆕 导航
    "howItWorks": "How It Works",              // 🆕 导航
    "pricing": "Pricing",                      // 🆕 导航
    "seeHowItWorks": "See How It Works",       // 🆕
    "step": "Step {number}",                   // 🆕 带变量
    "starRating": "5 star rating",             // 🆕 aria
    "contactViaEmail": "Contact us via email", // 🆕 aria
    "viewPrivacy": "View privacy policy",      // 🆕 aria
    "viewTerms": "View terms of service"       // 🆕 aria
  }
}
```

---

### 3.4 `FileSortify` — File Sortify 产品

#### 3.4.1 `FileSortify.meta` — SEO 元数据

**来源文件**: `app/[locale]/file-sortify/layout.tsx`

```jsonc
{
  "FileSortify": {
    "meta": {
      "title": "Automatically Organize Mac Files | File Sortify",
      "description": "Automatically organize your Mac files with File Sortify. Smart file management tool with auto-sorting, custom rules, and real-time monitoring for Downloads folder.",
      "ogTitle": "Automatically Organize Mac Files | File Sortify",
      "ogDescription": "Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring.",
      "ogImageAlt": "Automatically Organize Mac Files | File Sortify",
      "twitterTitle": "Automatically Organize Mac Files | File Sortify",
      "twitterDescription": "Automatically organize your files with File Sortify. The intelligent file management tool.",
      "applicationName": "File Sortify",
      "productType": "Mac Utility Software",
      "targetAudience": "Mac users who need to organize files automatically",
      "keyFeatures": "Auto-categorization, Custom rules, Real-time monitoring, Operation history",
      "useCases": "Organize downloads folder, Sort files by type, Automate file management, Clean up desktop files",
      "jsonLdDescription": "Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring."
    }
  }
}
```

**改造方式**: layout.tsx 改为 `generateMetadata()` + 动态 JSON-LD

```tsx
// app/[locale]/file-sortify/layout.tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FileSortify.meta' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      // locale 根据当前语言动态设置
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : /* ... */ 'en_US',
      // images, url 等保持原样
    },
    // ...
  };
}

export default async function FileSortifyLayout({ children, params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FileSortify.meta' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'File Sortify',                    // 产品名不翻译
    description: t('jsonLdDescription'),     // 描述翻译
    // ... 其他字段保持原样
  };

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
```

#### 3.4.2 `FileSortify.nav` — 导航

**来源文件**: `components/Navigation.tsx`、`data/page-data.ts` → `navItems`

```jsonc
{
  "FileSortify": {
    "nav": {
      "logoAlt": "File Sortify Logo",
      "brand": "File Sortify",
      "items": {
        "0": { "label": "Features" },
        "1": { "label": "How It Works" },
        "2": { "label": "Screenshots" },
        "3": { "label": "Pricing" }
      },
      "downloadForMac": "Download for Mac"
    }
  }
}
```

**数据文件改造 (方案 B)**:

```ts
// app/[locale]/file-sortify/data/page-data.ts
export const navItems = [
  { labelKey: 'FileSortify.nav.items.0.label', href: '#features' },
  { labelKey: 'FileSortify.nav.items.1.label', href: '#how-it-works' },
  { labelKey: 'FileSortify.nav.items.2.label', href: '#screenshots' },
  { labelKey: 'FileSortify.nav.items.3.label', href: '#pricing' },
];
```

**组件改造**:

```tsx
// components/Navigation.tsx
'use client';
import { useTranslations } from 'next-intl';
import { navItems } from '../data/page-data';

export default function Navigation() {
  const t = useTranslations();  // 根命名空间，因为 key 包含完整路径

  return (
    <nav>
      <img alt={t('FileSortify.nav.logoAlt')} ... />
      <span>{t('FileSortify.nav.brand')}</span>
      {navItems.map((item, i) => (
        <a key={i} href={item.href}>{t(item.labelKey)}</a>
      ))}
      <button>{t('FileSortify.nav.downloadForMac')}</button>
    </nav>
  );
}
```

> **备注**: 也可以在组件内直接用 `useTranslations('FileSortify.nav')` 配合短 key `items.0.label`，数据文件存短 key。两种方式等效。下文统一采用组件内指定 namespace 的方式，数据文件存短 key。

#### 3.4.3 `FileSortify.hero` — Hero 区域

**来源文件**: `components/HeroSection.tsx`

```jsonc
{
  "FileSortify": {
    "hero": {
      "title": "Sortify Your Files, Automatically!",
      "subtitle": "Transform your chaotic Downloads folder into an organized paradise. File Sortify intelligently categorizes your files based on type, custom rules, and real-time monitoring.",
      "ctaDownload": "Download on the Mac App Store",
      "ctaDownloadAria": "Download File Sortify on the Mac App Store",
      "ctaDemo": "Watch Demo",
      "ctaDemoAria": "Watch demo video"
    }
  }
}
```

**组件改造**:

```tsx
// components/HeroSection.tsx
'use client';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('FileSortify.hero');
  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <a aria-label={t('ctaDownloadAria')}>{t('ctaDownload')}</a>
      <a aria-label={t('ctaDemoAria')}>{t('ctaDemo')}</a>
    </section>
  );
}
```

#### 3.4.4 `FileSortify.features` — 功能特性

**来源文件**: `components/FeaturesSection.tsx`、`data/page-data.ts` → `features`

```jsonc
{
  "FileSortify": {
    "features": {
      "heading": "Powerful Features",
      "subtitle": "Everything you need to keep your files perfectly organized",
      "items": {
        "0": { "title": "Smart Auto-Categorization", "description": "Automatically sorts files into appropriate folders based on file types, names, and content patterns." },
        "1": { "title": "Custom Rules Engine", "description": "Create personalized sorting rules tailored to your specific workflow and preferences." },
        "2": { "title": "Real-Time Monitoring", "description": "Watch folders in real-time and automatically organize new files as they arrive." },
        "3": { "title": "Operation History", "description": "Track all file movements with a comprehensive history log and undo any changes if needed." },
        "4": { "title": "Safe & Secure", "description": "Built with security in mind. Your files never leave your Mac and all operations are safe." },
        "5": { "title": "Lightning Fast", "description": "Optimized for macOS with native performance. Organize thousands of files in seconds." }
      }
    }
  }
}
```

**数据文件改造**:

```ts
// data/page-data.ts
export const features = [
  { icon: 'fas fa-magic',      titleKey: '0.title', descKey: '0.description', bgColor: 'bg-blue-100',   iconColor: 'text-blue-600' },
  { icon: 'fas fa-cog',        titleKey: '1.title', descKey: '1.description', bgColor: 'bg-green-100',  iconColor: 'text-green-600' },
  { icon: 'fas fa-bell',       titleKey: '2.title', descKey: '2.description', bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
  { icon: 'fas fa-history',    titleKey: '3.title', descKey: '3.description', bgColor: 'bg-red-100',    iconColor: 'text-red-600' },
  { icon: 'fas fa-shield-alt', titleKey: '4.title', descKey: '4.description', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  { icon: 'fas fa-bolt',       titleKey: '5.title', descKey: '5.description', bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600' },
];
```

**组件改造**:

```tsx
// components/FeaturesSection.tsx
'use client';
import { useTranslations } from 'next-intl';
import { features } from '../data/page-data';

export default function FeaturesSection() {
  const t = useTranslations('FileSortify.features');
  return (
    <section>
      <h2>{t('heading')}</h2>
      <p>{t('subtitle')}</p>
      {features.map((f, i) => (
        <div key={i}>
          <h3>{t(`items.${f.titleKey}`)}</h3>
          <p>{t(`items.${f.descKey}`)}</p>
        </div>
      ))}
    </section>
  );
}
```

#### 3.4.5 `FileSortify.howItWorks` — 使用步骤

**来源文件**: `components/HowItWorksSection.tsx`、`data/page-data.ts` → `howItWorks`

```jsonc
{
  "FileSortify": {
    "howItWorks": {
      "heading": "How It Works",
      "subtitle": "Get organized in 3 simple steps",
      "stepAria": "Step {number}",
      "steps": {
        "0": { "title": "Choose Your Folder", "description": "Select folder you want to organize - typically your Downloads folder", "imageAlt": "Choose Your Folder Interface" },
        "1": { "title": "Configure Rules", "description": "Set up custom rules or use our smart defaults for automatic categorization", "imageAlt": "Configure Rules Interface" },
        "2": { "title": "Sit Back & Relax", "description": "File Sortify automatically organizes your files in background", "imageAlt": "Sit Back & Relax Interface" }
      }
    }
  }
}
```

**数据文件改造**:

```ts
export const howItWorks = [
  { step: 1, titleKey: '0.title', descKey: '0.description', imageAltKey: '0.imageAlt', image: 'https://cdn.tinykit.app/file-sortify/images/add.png',   gradientColors: 'from-purple-400 to-pink-400' },
  { step: 2, titleKey: '1.title', descKey: '1.description', imageAltKey: '1.imageAlt', image: 'https://cdn.tinykit.app/file-sortify/images/rules.png', gradientColors: 'from-blue-400 to-cyan-400' },
  { step: 3, titleKey: '2.title', descKey: '2.description', imageAltKey: '2.imageAlt', image: 'https://cdn.tinykit.app/file-sortify/images/start.png', gradientColors: 'from-green-400 to-teal-400' },
];
```

#### 3.4.6 `FileSortify.screenshots` — 截图展示

**来源文件**: `components/ScreenshotsSection.tsx`、`data/page-data.ts` → `screenshots`

```jsonc
{
  "FileSortify": {
    "screenshots": {
      "heading": "Beautiful & Intuitive Interface",
      "subtitle": "Designed exclusively for macOS",
      "items": {
        "0": { "title": "Main Dashboard", "description": "Monitor and control all your file operations" },
        "1": { "title": "Custom Rules", "description": "Create powerful organization rules" },
        "2": { "title": "Operation History", "description": "Track and review all file movements" }
      }
    }
  }
}
```

#### 3.4.7 `FileSortify.pricing` — 定价

**来源文件**: `components/PricingSection.tsx`、`data/site-config.ts` → `productConfig.pricing`

```jsonc
{
  "FileSortify": {
    "pricing": {
      "heading": "One-Time Purchase",
      "subtitle": "Get lifetime access to File Sortify",
      "licenseName": "File Sortify Lifetime License",
      "licenseDescription": "Lifetime access to File Sortify with all features and updates",
      "badgeText": "BEST VALUE",
      "lifetimeTitle": "Lifetime License",
      "period": "/once",
      "cta": "Buy for $9.99",
      "features": {
        "0": "Everything in Free Trial",
        "1": "Unlimited usage",
        "2": "Lifetime updates",
        "3": "All future features",
        "4": "Pay once, use forever"
      }
    }
  }
}
```

**site-config.ts 改造**:

```ts
// 保留不可翻译的配置
export const siteConfig = {
  url: 'https://www.tinykit.app/file-sortify',
  email: 'geek.bo@hotmail.com',
  logo: 'https://cdn.tinykit.app/file-sortify/images/logo.png',
  stats: { happyUsers: '10,000+', rating: 5 },
};

export const productConfig = {
  appStoreUrl: 'https://apps.apple.com/app/id6754158420',
  pricing: {
    lifetime: {
      titleKey: 'lifetimeTitle',      // 翻译 key
      price: '$9.99',                 // 价格不翻译
      periodKey: 'period',
      badgeKey: 'badgeText',
      featureKeys: ['0', '1', '2', '3', '4'],  // features.{key} 对应翻译
    },
  },
};
```

#### 3.4.8 `FileSortify.testimonials` — 用户评价

**来源文件**: `components/TestimonialsSection.tsx`、`data/page-data.ts` → `testimonials`

```jsonc
{
  "FileSortify": {
    "testimonials": {
      "heading": "Loved by Mac Users",
      "subtitle": "See what our customers are saying",
      "starRatingAria": "5 star rating",
      "items": {
        "0": { "name": "Sarah Chen", "role": "Designer", "content": "File Sortify has completely transformed how I manage my Downloads folder. It's like having a personal assistant for file organization!" },
        "1": { "name": "Mark Johnson", "role": "Developer", "content": "The custom rules feature is incredible. I've set it up to organize my work files perfectly. Saves me hours every week!" },
        "2": { "name": "Emily Rodriguez", "role": "Photographer", "content": "Finally, a Mac app that just works! Clean interface, powerful features, and it respects my privacy. Highly recommended!" }
      }
    }
  }
}
```

#### 3.4.9 `FileSortify.cta` — CTA 区域

**来源文件**: `components/CTASection.tsx`

```jsonc
{
  "FileSortify": {
    "cta": {
      "heading": "Ready to Organize Your Digital Life?",
      "subtitle": "Join thousands of Mac users who've simplified their file management",
      "button": "Download on Mac App Store",
      "buttonAria": "Download File Sortify on Mac App Store"
    }
  }
}
```

#### 3.4.10 `FileSortify.footer` — 页脚

**来源文件**: `components/FooterSection.tsx`

```jsonc
{
  "FileSortify": {
    "footer": {
      "logoAlt": "File Sortify Logo",
      "brand": "File Sortify",
      "emailLabel": "Email",
      "contactAria": "Contact us via email",
      "privacyLink": "Privacy Policy",
      "privacyAria": "View privacy policy",
      "termsLink": "Terms of Service",
      "termsAria": "View terms of service",
      "copyright": "© {year} File Sortify. All rights reserved."
    }
  }
}
```

**注意**: `copyright` 使用 ICU 变量 `{year}`，运行时传入:

```tsx
t('copyright', { year: new Date().getFullYear() })
```

#### 3.4.11 `FileSortify.faq` — FAQ 结构化数据

**来源文件**: `app/[locale]/file-sortify/page.tsx` 中内联的 `fileSortifyFAQs`

```jsonc
{
  "FileSortify": {
    "faq": {
      "items": {
        "0": { "question": "What is File Sortify?", "answer": "File Sortify is an intelligent file organization tool for Mac that automatically sorts and organizes your files based on type, custom rules, and real-time monitoring. It is perfect for keeping your Downloads folder and desktop clean and organized." },
        "1": { "question": "How does File Sortify organize files?", "answer": "File Sortify uses smart auto-categorization to sort files by type (documents, images, videos, etc.), allows you to create custom rules for specific file types or names, and monitors folders in real-time to automatically organize new files as they arrive." },
        "2": { "question": "Is File Sortify compatible with my Mac?", "answer": "File Sortify is designed exclusively for macOS. It works with all modern Mac computers running macOS and integrates seamlessly with the Mac file system." },
        "3": { "question": "How much does File Sortify cost?", "answer": "File Sortify is available for a one-time purchase of $20 USD. This includes lifetime access, unlimited usage, lifetime updates, and all future features with no subscription required." },
        "4": { "question": "Can I undo file organization changes?", "answer": "Yes, File Sortify includes an Operation History feature that allows you to review and revert file organization actions if needed, ensuring your files are always safe." }
      }
    }
  }
}
```

#### 3.4.12 `FileSortify.breadcrumb` — 面包屑

```jsonc
{
  "FileSortify": {
    "breadcrumb": {
      "home": "Home",
      "product": "File Sortify"
    }
  }
}
```

---

### 3.5 `AIHairstyle` — AI Hairstyle Studio 产品

#### 3.5.1 `AIHairstyle.meta` — SEO 元数据

**来源文件**: `app/[locale]/ai-hairstyle-studio/layout.tsx`、`page.tsx` 中重复的 metadata

```jsonc
{
  "AIHairstyle": {
    "meta": {
      "title": "AI Hairstyle Try On Free - Virtual Hair Makeover",
      "description": "Try on 100+ hairstyles & hair colors instantly with AI. Upload your photo, find the perfect look before your salon visit. Free download for iOS.",
      "ogTitle": "AI Hairstyle Try On Free - Virtual Hair Makeover | TinyKit",
      "ogDescription": "See how you'd look with a new hairstyle before committing! AI-powered try-on with 100+ styles and colors.",
      "ogImageAlt": "AI Hairstyle Studio - Virtual Hairstyle Try On App Interface",
      "twitterTitle": "AI Hairstyle Try On Free - Virtual Hair Makeover | TinyKit",
      "twitterDescription": "Try on 100+ hairstyles & colors instantly with AI. Transform your look before cutting.",
      "applicationName": "AI Hairstyle Studio",
      "productType": "AI Beauty & Lifestyle App",
      "targetAudience": "Anyone looking to try different hairstyles before committing to a new look",
      "keyFeatures": "AI-powered try-on, Hundreds of styles, Hair color simulator, Instant results, Privacy first, HD export",
      "useCases": "Try hairstyles before salon visit, Experiment with hair colors, Find perfect haircut, Share looks with stylist",
      "jsonLdDescription": "Try on 100+ hairstyles & hair colors instantly with AI. Upload your photo, find the perfect look before your salon visit. Free download for iOS.",
      "jsonLdFeatureList": {
        "0": "AI-powered hairstyle try-on",
        "1": "Hundreds of hairstyle options",
        "2": "Hair color simulator",
        "3": "Instant results",
        "4": "Privacy-focused",
        "5": "HD photo export",
        "6": "Regular style updates"
      }
    }
  }
}
```

#### 3.5.2 `AIHairstyle.nav` — 导航

**来源文件**: `components/HairstyleNavigation.tsx`、`data/page-data.ts` → `navItems`

```jsonc
{
  "AIHairstyle": {
    "nav": {
      "logoAlt": "AI Hairstyle Logo",
      "brand": "AI Hairstyle Studio",
      "items": {
        "0": { "label": "Magic" },
        "1": { "label": "Features" },
        "2": { "label": "How It Works" },
        "3": { "label": "Pricing" }
      },
      "download": "Download",
      "downloadNow": "Download Now",
      "downloadAria": "Download AI Hairstyle Studio on the App Store",
      "closeMenu": "Close menu",
      "openMenu": "Open menu"
    }
  }
}
```

#### 3.5.3 `AIHairstyle.hero` — Hero 区域

**来源文件**: `components/HeroSection.tsx`

```jsonc
{
  "AIHairstyle": {
    "hero": {
      "badge": "✨ The #1 AI Hairstyle App",
      "titleLine1": "New 'Do,",
      "titleLine2": "New You.",
      "subtitle": "Transform your look instantly with our advanced AI. Try on hundreds of salon-quality hairstyles and colors in real-time before you commit to a cut.",
      "ctaDownload": "Download Now",
      "ctaDownloadAria": "Download AI Hairstyle Studio on App Store",
      "ctaHowItWorks": "See How It Works",
      "ctaHowItWorksAria": "See how AI Hairstyle Studio works",
      "screenshotAlt": "AI Hairstyle Studio app screenshot showing virtual hairstyle try-on result with side-by-side comparison of original and transformed hair",
      "appliedLabel": "Applied",
      "aiAccuracyLabel": "AI Accuracy",
      "aiAccuracyValue": "99.8%",
      "lovedByLabel": "Loved by",
      "lovedByValue": "50K+"
    }
  }
}
```

#### 3.5.4 `AIHairstyle.beforeAfter` — 前后对比

**来源文件**: `components/BeforeAfterComparison.tsx`、`page.tsx` 中传入的 props

```jsonc
{
  "AIHairstyle": {
    "beforeAfter": {
      "heading": "See the Magic",
      "subtitle": "Drag the slider to reveal the transformation",
      "beforeLabel": "Before",
      "afterLabel": "After",
      "beforeAlt": "Before hairstyle transformation",
      "afterAlt": "After hairstyle transformation",
      "beforeDescription": "Short pixie cut with a fresh, modern look",
      "afterDescription": "Stunning shoulder-length waves with volume and style",
      "cta": "Try This Transformation"
    }
  }
}
```

#### 3.5.5 `AIHairstyle.features` — 功能特性

**来源文件**: `components/FeaturesSection.tsx`、`data/page-data.ts` → `features`

```jsonc
{
  "AIHairstyle": {
    "features": {
      "heading": "Magical Features",
      "subtitle": "Everything you need to find your perfect look",
      "items": {
        "0": { "title": "AI-Powered Try-On", "description": "Advanced AI technology analyzes your face shape and features to realistically apply different hairstyles." },
        "1": { "title": "Hundreds of Styles", "description": "From classic cuts to trendy styles - explore a vast collection of hairstyles for every occasion." },
        "2": { "title": "Hair Color Simulator", "description": "Try different hair colors instantly - blonde, brunette, red, pastel, or bold fantasy colors." },
        "3": { "title": "Instant Results", "description": "Upload your photo and see realistic results in seconds. No waiting, no salon appointment needed." },
        "4": { "title": "Privacy First", "description": "Your photos are processed securely. Complete privacy guaranteed." },
        "5": { "title": "HD Export", "description": "Save and share your new look in high-definition. Perfect for showing your stylist." }
      }
    }
  }
}
```

#### 3.5.6 `AIHairstyle.howItWorks` — 使用步骤

**来源文件**: `components/HowItWorksSection.tsx`、`data/page-data.ts` → `howItWorks`

```jsonc
{
  "AIHairstyle": {
    "howItWorks": {
      "heading": "Simple Steps",
      "subtitle": "3 steps to your new style",
      "steps": {
        "0": { "title": "Upload Your Photo", "description": "Upload a clear front-facing photo of yourself", "imageAlt": "AI Hairstyle Studio step 1: Upload Your Photo. Upload a clear front-facing photo of yourself" },
        "1": { "title": "Choose a Style", "description": "Browse hundreds of hairstyles and colors to try on", "imageAlt": "AI Hairstyle Studio step 2: Choose a Style. Browse hundreds of hairstyles and colors to try on" },
        "2": { "title": "See Yourself", "description": "AI instantly applies the hairstyle to your photo - new look, new you!", "imageAlt": "AI Hairstyle Studio step 3: See Yourself. AI instantly applies the hairstyle to your photo - new look, new you!" }
      }
    }
  }
}
```

#### 3.5.7 `AIHairstyle.testimonials` — 用户评价

**来源文件**: `components/TestimonialsSection.tsx`、`data/page-data.ts` → `testimonials`

```jsonc
{
  "AIHairstyle": {
    "testimonials": {
      "heading": "User Love",
      "avatarAlt": "Avatar of {name}",
      "ratingAria": "Rating: 5 out of 5 stars",
      "items": {
        "0": { "name": "Jessica Taylor", "role": "Fashion Blogger", "content": "AI Hairstyle Studio saved me from a hair disaster! I tried the bob cut virtually first and realized it wasn't for me. Absolutely love this app!" },
        "1": { "name": "Michael Chen", "role": "College Student", "content": "I've always wanted to try different hairstyles but was too scared to commit. This app lets me experiment risk-free. Game changer!" },
        "2": { "name": "Emma Williams", "role": "Marketing Manager", "content": "The AI is incredibly realistic! I showed my stylist the results and she knew exactly what I wanted. Worth every penny!" }
      }
    }
  }
}
```

#### 3.5.8 `AIHairstyle.pricing` — 定价

**来源文件**: `components/PricingSection.tsx`、`data/site-config.ts` → `productConfig.pricing`

```jsonc
{
  "AIHairstyle": {
    "pricing": {
      "badgeText": "GET STARTED",
      "freeTitle": "Free Download",
      "period": "/forever",
      "cta": "Download Now",
      "ctaAria": "Download AI Hairstyle Studio for free",
      "features": {
        "0": "Free to download",
        "1": "Preview hairstyles",
        "2": "Purchase credits for generations",
        "3": "HD photo exports",
        "4": "Regular style updates"
      }
    }
  }
}
```

#### 3.5.9 `AIHairstyle.footer` — 页脚

**来源文件**: `components/FooterSection.tsx`、`data/page-data.ts` → `footerLinks`

```jsonc
{
  "AIHairstyle": {
    "footer": {
      "logoAlt": "AI Hairstyle Studio Logo",
      "brand": "AI Hairstyle Studio",
      "downloadLink": "Download",
      "supportLink": "Support",
      "privacyLink": "Privacy Policy",
      "termsLink": "Terms of Service",
      "featuresLink": "Features",
      "pricingLink": "Pricing",
      "contactLink": "Contact Us",
      "copyright": "© {year} AI Hairstyle Studio. Built with ❤️ by TinyKit."
    }
  }
}
```

#### 3.5.10 `AIHairstyle.faq` — FAQ 结构化数据

**来源文件**: `app/[locale]/ai-hairstyle-studio/page.tsx` 中内联的 `aiHairstyleFAQs`

```jsonc
{
  "AIHairstyle": {
    "faq": {
      "items": {
        "0": { "question": "What is AI Hairstyle Studio?", "answer": "AI Hairstyle Studio is an innovative app that uses advanced AI technology to let you try on hundreds of different hairstyles and hair colors virtually. Upload your photo and see how you would look with a new hairstyle before making any commitment." },
        "1": { "question": "How does AI Hairstyle Studio work?", "answer": "Simply upload a clear front-facing photo of yourself, browse through our extensive collection of hairstyles and colors, and our AI instantly applies them to your photo with realistic results. You can try unlimited styles and save or share your favorites." },
        "2": { "question": "Is my photo data safe?", "answer": "Absolutely! Your privacy is our top priority. All photos are processed securely and are never stored on our servers. Your images are deleted immediately after processing." },
        "3": { "question": "How much does AI Hairstyle Studio cost?", "answer": "AI Hairstyle Studio is available for a one-time purchase of $9.99 USD. This gives you lifetime access with unlimited hairstyle try-ons, access to all collections, HD exports, and all future updates." },
        "4": { "question": "Can I save and share my new looks?", "answer": "Yes! You can save your transformed photos in high-definition quality and easily share them with friends, family, or your hairstylist to show them exactly what you want." }
      }
    }
  }
}
```

#### 3.5.11 `AIHairstyle.breadcrumb` — 面包屑

```jsonc
{
  "AIHairstyle": {
    "breadcrumb": {
      "home": "Home",
      "product": "AI Hairstyle Studio"
    }
  }
}
```

#### 3.5.12 `AIHairstyle.page` — 页面级文案

**来源文件**: `page.tsx` 中的内联文案

```jsonc
{
  "AIHairstyle": {
    "page": {
      "skipToContent": "Skip to main content"
    }
  }
}
```

---

### 3.6 `Legal` — 法律页面提示

**来源**: 4 个隐私/条款页面顶部新增的语言提示

```jsonc
{
  "Legal": {
    "languageNotice": "This document is available in English only.",
    "privacyTitle": "Privacy Policy",
    "termsTitle": "Terms of Service"
  }
}
```

---

## 四、文件改造清单

### 4.1 阶段一: 根 layout + StructuredData

| 文件 | 改造内容 | 类型 |
|------|----------|------|
| `messages/en.json` | 添加 `Metadata`, `StructuredData`, 扩充 `Common` | 翻译文件 |
| `app/[locale]/layout.tsx` | `metadata` → `generateMetadata()`, JSON-LD 使用翻译 | Server Component |
| `app/components/StructuredData.tsx` | 添加 `useTranslations('StructuredData')` | Client Component |

### 4.2 阶段二: File Sortify 产品

| 文件 | 改造内容 | 类型 |
|------|----------|------|
| `messages/en.json` | 添加 `FileSortify` 全部 key | 翻译文件 |
| `file-sortify/layout.tsx` | `metadata` → `generateMetadata()`, JSON-LD 翻译 | Server Component |
| `file-sortify/page.tsx` | FAQ 数据改为翻译 key, 面包屑翻译 | Server Component → 需改为异步或传 t |
| `file-sortify/data/site-config.ts` | 移除可翻译文本，仅保留 URL/价格等配置 | 数据文件 |
| `file-sortify/data/page-data.ts` | `title/description` 改为 `titleKey/descKey` | 数据文件 |
| `file-sortify/components/Navigation.tsx` | 添加 `useTranslations('FileSortify.nav')` | Client Component |
| `file-sortify/components/HeroSection.tsx` | 添加 `useTranslations('FileSortify.hero')` | Client Component |
| `file-sortify/components/FeaturesSection.tsx` | 添加 `useTranslations('FileSortify.features')` | Client Component |
| `file-sortify/components/HowItWorksSection.tsx` | 添加 `useTranslations('FileSortify.howItWorks')` | Client Component |
| `file-sortify/components/ScreenshotsSection.tsx` | 添加 `useTranslations('FileSortify.screenshots')` | Client Component |
| `file-sortify/components/PricingSection.tsx` | 添加 `useTranslations('FileSortify.pricing')` | Client Component |
| `file-sortify/components/TestimonialsSection.tsx` | 添加 `useTranslations('FileSortify.testimonials')` | Client Component |
| `file-sortify/components/CTASection.tsx` | 添加 `useTranslations('FileSortify.cta')` | Client Component |
| `file-sortify/components/FooterSection.tsx` | 添加 `useTranslations('FileSortify.footer')` | Client Component |

### 4.3 阶段三: AI Hairstyle Studio 产品

| 文件 | 改造内容 | 类型 |
|------|----------|------|
| `messages/en.json` | 添加 `AIHairstyle` 全部 key | 翻译文件 |
| `ai-hairstyle-studio/layout.tsx` | `metadata` → `generateMetadata()`, 2 个 JSON-LD 翻译 | Server Component |
| `ai-hairstyle-studio/page.tsx` | FAQ 翻译, 面包屑翻译, BeforeAfter labels 翻译, metadata 移除 (合并到 layout) | Server/Client |
| `ai-hairstyle-studio/data/site-config.ts` | 移除可翻译文本 | 数据文件 |
| `ai-hairstyle-studio/data/page-data.ts` | 改为翻译 key 引用 | 数据文件 |
| `ai-hairstyle-studio/components/HairstyleNavigation.tsx` | 添加 `useTranslations('AIHairstyle.nav')` | Client Component |
| `ai-hairstyle-studio/components/HeroSection.tsx` | 添加 `useTranslations('AIHairstyle.hero')` | Client Component |
| `ai-hairstyle-studio/components/BeforeAfterComparison.tsx` | 添加 `useTranslations('AIHairstyle.beforeAfter')` | Client Component |
| `ai-hairstyle-studio/components/FeaturesSection.tsx` | 添加 `useTranslations('AIHairstyle.features')` | Client Component |
| `ai-hairstyle-studio/components/HowItWorksSection.tsx` | 添加 `useTranslations('AIHairstyle.howItWorks')` | Client Component |
| `ai-hairstyle-studio/components/TestimonialsSection.tsx` | 添加 `useTranslations('AIHairstyle.testimonials')` | Client Component |
| `ai-hairstyle-studio/components/PricingSection.tsx` | 添加 `useTranslations('AIHairstyle.pricing')` | Client Component |
| `ai-hairstyle-studio/components/FooterSection.tsx` | 添加 `useTranslations('AIHairstyle.footer')` | Client Component |

### 4.4 阶段四: 法律页面

| 文件 | 改造内容 |
|------|----------|
| `messages/en.json` | 添加 `Legal` key |
| `file-sortify/privacy/page.tsx` | 非英文 locale 显示语言提示 banner |
| `file-sortify/terms/page.tsx` | 同上 |
| `ai-hairstyle-studio/privacy/page.tsx` | 同上 |
| `ai-hairstyle-studio/terms/page.tsx` | 同上 |

**法律页面改造示例**:

```tsx
// privacy/page.tsx
'use client';
import { useTranslations, useLocale } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('Legal');
  const locale = useLocale();

  return (
    <div>
      {/* 非英文 locale 显示语言提示 */}
      {locale !== 'en' && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">{t('languageNotice')}</p>
        </div>
      )}
      {/* 原有英文内容保持不变 */}
      ...
    </div>
  );
}
```

### 4.5 阶段五: 翻译其余 8 种语言

| 文件 | 操作 |
|------|------|
| `messages/zh.json` | 添加全部新 key 的中文翻译 |
| `messages/ja.json` | 添加全部新 key 的日文翻译 |
| `messages/es.json` | 添加全部新 key 的西班牙语翻译 |
| `messages/pt.json` | 添加全部新 key 的葡萄牙语翻译 |
| `messages/de.json` | 添加全部新 key 的德语翻译 |
| `messages/ru.json` | 添加全部新 key 的俄语翻译 |
| `messages/ko.json` | 添加全部新 key 的韩语翻译 |
| `messages/fr.json` | 添加全部新 key 的法语翻译 |

---

## 五、Server Component vs Client Component 策略

| 场景 | 方案 | 原因 |
|------|------|------|
| layout.tsx 的 `generateMetadata()` | `getTranslations()` (Server) | metadata 只能在 Server 端生成 |
| layout.tsx 的 JSON-LD | `getTranslations()` (Server) | 在 `<script>` 标签中输出，无需客户端 |
| page.tsx 的 StructuredData | 改为 Server Component 或传入翻译后的 props | 减少客户端 bundle |
| 交互组件 (Navigation, 含动画的 Section) | `useTranslations()` (Client) | 需要客户端交互 |
| 纯展示 Section (Features, HowItWorks 等) | 优先 Server Component + `getTranslations()` | 减少 JS bundle，SEO 友好 |

**注意**: 当前大部分 Section 组件是 Client Component（隐式，因导入了 page-data.ts 等）。如果改为 Server Component 需要确保不使用 hooks、事件处理等客户端 API。如果改动成本过高，保持 Client Component + `useTranslations()` 也完全可行。

---

## 六、翻译 Key 总量估算

| Namespace | Key 数量 |
|-----------|---------|
| Metadata | ~9 |
| StructuredData | ~7 |
| Common (新增部分) | ~15 |
| FileSortify (全部) | ~95 |
| AIHairstyle (全部) | ~100 |
| Legal | ~3 |
| **合计新增** | **~229** |

---

## 七、执行顺序总结

```
阶段 1: 基础设施 & 根 layout
  └─ en.json 添加 Metadata + StructuredData + Common 扩充
  └─ 改造 layout.tsx → generateMetadata()
  └─ 改造 StructuredData.tsx

阶段 2: File Sortify 产品 (一次性完成)
  └─ en.json 添加 FileSortify 全部 key
  └─ 改造 layout.tsx → generateMetadata() + JSON-LD
  └─ 改造 data/site-config.ts + data/page-data.ts
  └─ 改造 page.tsx (FAQ, 面包屑)
  └─ 逐个改造 9 个组件

阶段 3: AI Hairstyle Studio 产品 (一次性完成)
  └─ en.json 添加 AIHairstyle 全部 key
  └─ 改造 layout.tsx → generateMetadata() + JSON-LD
  └─ 改造 data/site-config.ts + data/page-data.ts
  └─ 改造 page.tsx (FAQ, 面包屑, metadata 合并)
  └─ 逐个改造 8 个组件

阶段 4: 法律页面
  └─ en.json 添加 Legal key
  └─ 4 个页面添加语言提示 banner

阶段 5: 多语言翻译
  └─ AI 辅助翻译 8 种语言的 JSON
  └─ 人工校对

阶段 6: 验证
  └─ npm run build 确认无报错
  └─ 各语言页面抽检
  └─ SEO 元数据验证 (查看页面源码)
  └─ 结构化数据验证 (Google Rich Results Test)
```
