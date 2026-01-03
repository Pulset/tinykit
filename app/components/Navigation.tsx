'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, productConfig } from '@/app/data/site-config';
import { navItems } from '@/app/data/page-data';
import { Menu, X } from 'lucide-react';
import FontAwesomeIcon from './FontAwesomeIcon';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Image
              src={siteConfig.logo}
              alt='File Sortify Logo'
              width={30}
              height={30}
              className='mr-3'
            />
            <span className='text-2xl font-bold text-gray-800'>
              File Sortify
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-gray-700 hover:text-purple-600 transition'
              >
                {item.label}
              </a>
            ))}
            <Link
              href={productConfig.appStoreUrl}
              className='btn-purple-600 text-white px-6 py-2 rounded-full hover:btn-purple-700 transition inline-block'
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon name='fab fa-apple' className='mr-2' />
              Download for Mac
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-purple-600 focus:outline-none'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden mt-4'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-gray-700 hover:text-purple-600 transition'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Link
                href={productConfig.appStoreUrl}
                className='btn-purple-600 text-white px-6 py-2 rounded-full hover:btn-purple-700 transition inline-block'
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon name='fab fa-apple' className='mr-2' />
                Download for Mac
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
