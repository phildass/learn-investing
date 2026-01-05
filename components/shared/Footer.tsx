import Link from 'next/link';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Learn Investing</h3>
                <p className="text-sm text-gray-400">iiskills.cloud</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Master personal investment for the Indian market through comprehensive lessons, 
              interactive quizzes, and practical simulations. Part of the Indian Institute of 
              Professional Skills Development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://iiskills.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                iiskills.cloud
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://learn-math.iiskills.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Learn Math
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://learn-winning.iiskills.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Learn Winning
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/modules" className="text-gray-400 hover:text-blue-400 transition">
                  Browse Modules
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-blue-400 transition">
                  Market News
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-400 hover:text-blue-400 transition">
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-blue-400 transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@iiskills.cloud</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Indian Institute of Professional Skills Development, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 Learn Investing - iiskills.cloud. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
