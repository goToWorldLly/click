'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/home" className="text-2xl font-bold text-blue-600">
              打字练习
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {pathname !== '/practice' && (
              <Link 
                href="/practice"
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                开始练习
              </Link>
            )}
            {pathname === '/practice' && (
              <Link 
                href="/home"
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                返回首页
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}; 