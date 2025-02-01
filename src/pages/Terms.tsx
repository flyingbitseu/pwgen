import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Checker
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the International Roaming Checker website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Service</h2>
          <p>
            International Roaming Checker provides information about mobile network roaming capabilities and agreements between various providers. The service is provided "as is" and is intended for informational purposes only.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclaimer of Warranties</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy or completeness of the information provided. The information may change without notice, and you should always verify roaming capabilities with your network provider before traveling.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall International Roaming Checker be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Use License</h2>
          <p>
            Permission is granted to temporarily access the International Roaming Checker for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. User Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the service</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Collect or store personal data about other users</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Governing Law</h2>
          <p>
            These terms shall be governed and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}