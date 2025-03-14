'use client';

import { useState, useEffect } from 'react';

export const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
          <p>© {year} 打字练习. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 