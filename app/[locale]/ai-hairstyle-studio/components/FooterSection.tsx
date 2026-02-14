import Image from 'next/image';
import Link from 'next/link';
import type { SiteConfig, ProductConfig } from '../data/site-config';

interface FooterSectionProps {
  siteConfig: SiteConfig;
  productConfig: ProductConfig;
}

export default function FooterSection({
  siteConfig,
  productConfig,
}: FooterSectionProps) {
  return (
    <footer className='py-12 border-t border-pink-200 bg-gradient-to-b from-white/50 to-[#fdfbf8]'>
      <div className='container mx-auto px-6 text-center'>
        <div className='flex items-center justify-center gap-3 mb-8'>
          <Image
            src='https://cdn.tinykit.app/hairstyle/images/logo.png'
            alt='AI Hairstyle Studio Logo'
            width={32}
            height={32}
            className='w-8 h-8 rounded-lg'
          />
          <span className='text-lg sm:text-xl font-bold text-gray-800'>
            AI Hairstyle Studio
          </span>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8 text-gray-600 text-sm sm:text-base'>
          <a
            href={productConfig.appStoreUrl}
            className='hover:text-[#d63384] transition flex items-center'
          >
            Download
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className='hover:text-[#d63384] transition flex items-center'
          >
            Support
          </a>
          <Link
            href='/ai-hairstyle-studio/privacy'
            className='hover:text-[#d63384] transition flex items-center'
          >
            Privacy Policy
          </Link>
          <Link
            href='/ai-hairstyle-studio/terms'
            className='hover:text-[#d63384] transition flex items-center'
          >
            Terms of Service
          </Link>
        </div>
        <p className='text-gray-500 text-xs sm:text-sm'>
          &copy; {new Date().getFullYear()} AI Hairstyle Studio. Built with ❤️
          by TinyKit.
        </p>
      </div>
    </footer>
  );
}
