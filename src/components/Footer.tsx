import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Disclaimer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              This website is an independent service and is not affiliated with, endorsed by, or connected to any of the network providers mentioned. All company names, logos, and trademarks displayed on this website are the property of their respective owners. The information provided is for reference purposes only and may not reflect current roaming agreements or network capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Sources & Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/about"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  About This Service
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a 
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  Privacy Policy
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a 
                  href="/terms"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  Terms of Service
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} International Roaming Checker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}