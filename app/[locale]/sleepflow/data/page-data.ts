// Night-theme accent tokens reused across feature & step cards.
import type { AccentName } from '../constants';

interface Feature {
  icon: string;
  titleKey: string;
  descKey: string;
  accent: AccentName;
}

export const features: Feature[] = [
  {
    icon: 'fas fa-layer-group',
    titleKey: '0.title',
    descKey: '0.description',
    accent: 'indigo',
  },
  {
    icon: 'fas fa-magic',
    titleKey: '1.title',
    descKey: '1.description',
    accent: 'violet',
  },
  {
    icon: 'fas fa-clock',
    titleKey: '2.title',
    descKey: '2.description',
    accent: 'blue',
  },
  {
    icon: 'fas fa-baby',
    titleKey: '3.title',
    descKey: '3.description',
    accent: 'amber',
  },
  {
    icon: 'fas fa-play-circle',
    titleKey: '4.title',
    descKey: '4.description',
    accent: 'teal',
  },
  {
    icon: 'fas fa-crown',
    titleKey: '5.title',
    descKey: '5.description',
    accent: 'rose',
  },
];

export const howItWorks = [
  {
    step: 1,
    titleKey: '0.title',
    descKey: '0.description',
    gradientColors: 'from-[#6B78E8] to-[#9775FA]',
  },
  {
    step: 2,
    titleKey: '1.title',
    descKey: '1.description',
    gradientColors: 'from-[#7C8AFF] to-[#BCC4FF]',
  },
  {
    step: 3,
    titleKey: '2.title',
    descKey: '2.description',
    gradientColors: 'from-[#5563D4] to-[#6B78E8]',
  },
];

export const testimonials = [
  {
    name: 'Olivia Bennett',
    role: 'New Mom',
    contentKey: 'items.0.content',
  },
  {
    name: 'Daniel Park',
    role: 'Shift Worker',
    contentKey: 'items.1.content',
  },
  {
    name: 'Sofia Rossi',
    role: 'Frequent Traveler',
    contentKey: 'items.2.content',
  },
];

export const navItems = [
  { labelKey: 'items.0.label', href: '#features' },
  { labelKey: 'items.1.label', href: '#how-it-works' },
  { labelKey: 'items.2.label', href: '#pricing' },
];

export const footerLinks = {
  product: [
    { labelKey: 'SleepFlow.footer.featuresLink', href: '#features' },
    { labelKey: 'SleepFlow.footer.pricingLink', href: '#pricing' },
  ],
  support: [
    {
      labelKey: 'SleepFlow.footer.contactLink',
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'support@tinykit.app'}`,
    },
  ],
};
