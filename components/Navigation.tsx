'use client';

import { useState } from 'react';
import { Menu, X, Home, Users, Trophy, Settings } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'Community', href: '/community' },
    { icon: Trophy, label: 'Challenges', href: '/challenges' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="bg-surface shadow-card sticky top-0 z-50">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white text-sm font-bold">AP</span>
              </div>
              <h1 className="text-lg font-bold text-gray-900">Aether Pets</h1>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-surface border-t border-gray-200">
            <div className="max-w-xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} className="text-gray-600" />
                  <span className="font-medium text-gray-900">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 z-40">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <item.icon size={20} className="text-gray-600 mb-1" />
                <span className="text-xs text-gray-600">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
