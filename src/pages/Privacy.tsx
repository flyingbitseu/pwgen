import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Checker
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            The International Roaming Checker is designed with privacy in mind. We do not collect any personal information from our users. The service operates entirely client-side, meaning your provider selections and searches are processed locally in your browser and are not transmitted to or stored on our servers.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Usage Data</h2>
          <p>
            We may collect anonymous usage statistics to improve our service, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Most frequently searched providers</li>
            <li>Popular country combinations</li>
            <li>Browser type and version</li>
            <li>Device type (mobile/desktop)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Cookies</h2>
          <p>
            We do not use cookies or any other tracking mechanisms on our website.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Third-Party Services</h2>
          <p>
            Our website does not integrate with any third-party services that collect user data.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
          <p>
            While we don't collect personal data, we still implement security best practices to protect our service and its users:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>HTTPS encryption for all connections</li>
            <li>Regular security updates and maintenance</li>
            <li>Secure development practices</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify users of any material changes by posting the new privacy policy on this page.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@roamingchecker.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}