export const features = [
  {
    icon: 'fas fa-magic',
    title: 'AI-Powered Try-On',
    description:
      'Advanced AI technology analyzes your face shape and features to realistically apply different hairstyles.',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: 'fas fa-palette',
    title: 'Hundreds of Styles',
    description:
      'From classic cuts to trendy styles - explore a vast collection of hairstyles for every occasion.',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: 'fas fa-tint',
    title: 'Hair Color Simulator',
    description:
      'Try different hair colors instantly - blonde, brunette, red, pastel, or bold fantasy colors.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: 'fas fa-camera',
    title: 'Instant Results',
    description:
      'Upload your photo and see realistic results in seconds. No waiting, no salon appointment needed.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Privacy First',
    description:
      'Your photos are processed securely. Complete privacy guaranteed.',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: 'fas fa-download',
    title: 'HD Export',
    description:
      'Save and share your new look in high-definition. Perfect for showing your stylist.',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Upload Your Photo',
    description: 'Upload a clear front-facing photo of yourself',
    image: 'https://cdn.tinykit.app/hairstyle/images/step1.png',
    gradientColors: 'from-pink-400 to-rose-400',
  },
  {
    step: 2,
    title: 'Choose a Style',
    description: 'Browse hundreds of hairstyles and colors to try on',
    image: 'https://cdn.tinykit.app/hairstyle/images/step2.png',
    gradientColors: 'from-purple-400 to-pink-400',
  },
  {
    step: 3,
    title: 'See Yourself',
    description:
      'AI instantly applies the hairstyle to your photo - new look, new you!',
    image: 'https://cdn.tinykit.app/hairstyle/images/step3.png',
    gradientColors: 'from-blue-400 to-purple-400',
  },
];

// export const screenshots = [
//   {
//     title: 'Style Gallery',
//     description: 'Browse hundreds of hairstyle options',
//     image: 'https://cdn.tinykit.app/ai-hairstyle/images/gallery.png',
//   },
//   {
//     title: 'Live Preview',
//     description: 'See how you look with different hairstyles',
//     image: '/4.png',
//   },
//   {
//     title: 'Color Options',
//     description: 'Experiment with various hair colors',
//     image: 'https://cdn.tinykit.app/ai-hairstyle/images/colors.png',
//   },
// ];

export const testimonials = [
  {
    name: 'Jessica Taylor',
    role: 'Fashion Blogger',
    content:
      "AI Hairstyle Studio saved me from a hair disaster! I tried the bob cut virtually first and realized it wasn't for me. Absolutely love this app!",
    avatar: 'https://cdn.tinykit.app/ai-hairstyle/images/user1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'College Student',
    content:
      "I've always wanted to try different hairstyles but was too scared to commit. This app lets me experiment risk-free. Game changer!",
    avatar: 'https://cdn.tinykit.app/ai-hairstyle/images/user2.jpg',
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Manager',
    content:
      'The AI is incredibly realistic! I showed my stylist the results and she knew exactly what I wanted. Worth every penny!',
    avatar: 'https://cdn.tinykit.app/ai-hairstyle/images/user3.jpg',
  },
];

export const navItems = [
  { label: 'Magic', href: '#magic' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  support: [
    {
      label: 'Contact Us',
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'support@tinykit.app'}`,
    },
  ],
};
