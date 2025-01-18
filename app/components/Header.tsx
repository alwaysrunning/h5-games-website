'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md border-b border-gray-200 dark:border-gray-700' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md border-b border-gray-200 dark:border-gray-700'
      }`}>
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.jpg" 
              alt="HTML5 Games" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              HTML5 Games
            </span>
          </Link>

          {/* 搜索框 */}
          <div className="flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games..."
                className="w-full px-4 py-2 pr-12 rounded-full bg-gray-100 dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700
                         focus:outline-none focus:ring-2 focus:ring-primary
                         [&::-webkit-search-cancel-button]:hidden"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* 导航链接 */}
          {/* <nav className="hidden md:flex items-center space-x-4">
            <Link 
              href="/games" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              All Games
            </Link>
          </nav> */}
        </div>
      </div>
    </header>
  );
} 