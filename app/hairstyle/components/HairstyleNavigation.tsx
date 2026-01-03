'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productConfig } from '../data/site-config';
import { navItems } from '../data/page-data';
import { Menu, X } from 'lucide-react';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';

export default function HairstyleNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-100'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/hairstyle-logo.png'
              alt='AI Hairstyle Logo'
              width={40}
              height={40}
              className='w-10 h-10 mr-3 rounded-lg'
            />
            <div className='flex flex-col'>
              <span className='text-xl font-bold text-gray-800 leading-tight'>
                AI Hairstyle Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-gray-700 hover:text-[#d63384] transition font-medium'
              >
                {item.label}
              </a>
            ))}
            <Link
              href={productConfig.appStoreUrl}
              className='group px-6 py-2.5 bg-gradient-to-r from-[#d63384] to-[#e83e8c] rounded-full font-semibold text-white shadow-lg shadow-[#d63384]/25 hover:shadow-[#d63384]/40 transition-all hover:scale-105 active:scale-95 inline-flex items-center'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Download AI Hairstyle Studio on the App Store'
            >
              <FontAwesomeIcon name='fab fa-apple' className='text-lg mr-2' />
              Download
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-[#d63384] focus:outline-none transition'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden mt-6 pb-4'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-gray-700 hover:text-[#d63384] transition font-medium py-2'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Link
                href={productConfig.appStoreUrl}
                className='group px-6 py-3 bg-gradient-to-r from-[#d63384] to-[#e83e8c] rounded-full font-semibold text-white shadow-lg shadow-[#d63384]/25 inline-flex items-center justify-center'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Download AI Hairstyle Studio on the App Store'
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon name='fab fa-apple' className='text-lg mr-2' />
                Download Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
