export const features = [
  {
    icon: 'fas fa-magic',
    title: 'Smart Auto-Categorization',
    description:
      'Automatically sorts files into appropriate folders based on file types, names, and content patterns.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: 'fas fa-cog',
    title: 'Custom Rules Engine',
    description:
      'Create personalized sorting rules tailored to your specific workflow and preferences.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: 'fas fa-bell',
    title: 'Real-Time Monitoring',
    description:
      'Watch folders in real-time and automatically organize new files as they arrive.',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: 'fas fa-history',
    title: 'Operation History',
    description:
      'Track all file movements with a comprehensive history log and undo any changes if needed.',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Safe & Secure',
    description:
      'Built with security in mind. Your files never leave your Mac and all operations are safe.',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Lightning Fast',
    description:
      'Optimized for macOS with native performance. Organize thousands of files in seconds.',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Choose Your Folder',
    description:
      'Select the folder you want to organize - typically your Downloads folder',
    image: 'https://oss.picasso-designs.com/static/add.png',
    gradientColors: 'from-purple-400 to-pink-400',
  },
  {
    step: 2,
    title: 'Configure Rules',
    description:
      'Set up custom rules or use our smart defaults for automatic categorization',
    image: 'https://oss.picasso-designs.com/static/rules.png',
    gradientColors: 'from-blue-400 to-cyan-400',
  },
  {
    step: 3,
    title: 'Sit Back & Relax',
    description:
      'File Sortify automatically organizes your files in the background',
    image: 'https://oss.picasso-designs.com/static/start.png',
    gradientColors: 'from-green-400 to-teal-400',
  },
];

export const screenshots = [
  {
    title: 'Main Dashboard',
    description: 'Monitor and control all your file operations',
    image: 'https://oss.picasso-designs.com/static/dashboard.png',
  },
  {
    title: 'Custom Rules',
    description: 'Create powerful organization rules',
    image: 'https://oss.picasso-designs.com/static/rules.png',
  },
  {
    title: 'Operation History',
    description: 'Track and review all file movements',
    image: 'https://oss.picasso-designs.com/static/revert.png',
  },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Designer',
    content:
      "File Sortify has completely transformed how I manage my Downloads folder. It's like having a personal assistant for file organization!",
    avatar: 'https://picsum.photos/seed/testimonial1/50/50.jpg',
  },
  {
    name: 'Mark Johnson',
    role: 'Developer',
    content:
      "The custom rules feature is incredible. I've set it up to organize my work files perfectly. Saves me hours every week!",
    avatar: 'https://picsum.photos/seed/testimonial2/50/50.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Photographer',
    content:
      'Finally, a Mac app that just works! Clean interface, powerful features, and it respects my privacy. Highly recommended!',
    avatar: 'https://picsum.photos/seed/testimonial3/50/50.jpg',
  },
];

export const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Screenshots', href: '#screenshots' },
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
