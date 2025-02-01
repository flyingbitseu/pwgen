import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Checker
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">About International Roaming Checker</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>
            International Roaming Checker is a comprehensive tool designed to help travelers understand their mobile network coverage when traveling abroad. Our service provides detailed information about roaming agreements between mobile network operators and the available network standards in different countries.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to provide transparent and accurate information about international roaming capabilities, helping users make informed decisions about their mobile connectivity needs while traveling.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How It Works</h2>
          <p>
            The International Roaming Checker aggregates data from various mobile network operators and their roaming agreements. We maintain an up-to-date database of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Network operators and MVNOs across Europe</li>
            <li>Roaming agreements between operators</li>
            <li>Available network standards (2G, 3G, 4G, 5G)</li>
            <li>Voice and data services availability</li>
            <li>EU roaming inclusion status</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Updates</h2>
          <p>
            We regularly update our database to reflect the latest changes in roaming agreements and network capabilities. However, please note that roaming agreements and network availability can change, and it's always recommended to verify the information with your network provider before traveling.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}