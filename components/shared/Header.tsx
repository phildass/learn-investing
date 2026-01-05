'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TrendingUp, Menu, X, User } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Branding */}
          <Link href="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Learn Investing</h1>
              <p className="text-xs text-gray-500">iiskills.cloud</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/modules" className="text-gray-700 hover:text-blue-600 transition">
              Modules
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600 transition">
              Market News
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-blue-600 transition">
              Support
            </Link>
            
            {/* iiskills.cloud Integration */}
            <div className="border-l border-gray-300 pl-6 flex items-center space-x-4">
              <a 
                href="https://iiskills.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 text-sm transition"
              >
                Main Site
              </a>
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
              >
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/modules" 
                className="text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Modules
              </Link>
              <Link 
                href="/news" 
                className="text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Market News
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/support" 
                className="text-gray-700 hover:text-blue-600 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support
              </Link>
              <div className="border-t border-gray-200 pt-3">
                <a 
                  href="https://iiskills.cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600 py-2"
                >
                  iiskills.cloud Main Site
                </a>
                <Link 
                  href="/dashboard" 
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/login" 
                  className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
