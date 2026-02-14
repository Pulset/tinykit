export const features = [
  {
    icon: 'fas fa-magic',
    titleKey: '0.title',
    descKey: '0.description',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: 'fas fa-palette',
    titleKey: '1.title',
    descKey: '1.description',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: 'fas fa-tint',
    titleKey: '2.title',
    descKey: '2.description',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: 'fas fa-camera',
    titleKey: '3.title',
    descKey: '3.description',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: 'fas fa-shield-alt',
    titleKey: '4.title',
    descKey: '4.description',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: 'fas fa-download',
    titleKey: '5.title',
    descKey: '5.description',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

export const howItWorks = [
  {
    step: 1,
    titleKey: '0.title',
    descKey: '0.description',
    imageAltKey: '0.imageAlt',
    image: 'https://cdn.tinykit.app/hairstyle/images/step1.png',
    gradientColors: 'from-pink-400 to-rose-400',
  },
  {
    step: 2,
    titleKey: '1.title',
    descKey: '1.description',
    imageAltKey: '1.imageAlt',
    image: 'https://cdn.tinykit.app/hairstyle/images/step2.png',
    gradientColors: 'from-purple-400 to-pink-400',
  },
  {
    step: 3,
    titleKey: '2.title',
    descKey: '2.description',
    imageAltKey: '2.imageAlt',
    image: 'https://cdn.tinykit.app/hairstyle/images/step3.png',
    gradientColors: 'from-blue-400 to-purple-400',
  },
];

export const testimonials = [
  {
    name: 'Jessica Taylor',
    role: 'Fashion Blogger',
    contentKey: 'items.0.content',
    avatar: 'https://cdn.tinykit.app/hairstyle/images/user1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'College Student',
    contentKey: 'items.1.content',
    avatar: 'https://cdn.tinykit.app/hairstyle/images/user2.jpg',
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Manager',
    contentKey: 'items.2.content',
    avatar: 'https://cdn.tinykit.app/hairstyle/images/user3.jpg',
  },
];

export const navItems = [
  { labelKey: 'items.0.label', href: '#magic' },
  { labelKey: 'items.1.label', href: '#features' },
  { labelKey: 'items.2.label', href: '#how-it-works' },
  { labelKey: 'items.3.label', href: '#pricing' },
];

export const footerLinks = {
  product: [
    { labelKey: 'AIHairstyle.footer.featuresLink', href: '#features' },
    { labelKey: 'AIHairstyle.footer.pricingLink', href: '#pricing' },
  ],
  support: [
    {
      labelKey: 'AIHairstyle.footer.contactLink',
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'support@tinykit.app'}`,
    },
  ],
};
