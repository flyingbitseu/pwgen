import React, { useState, useMemo } from 'react';
import { providers, roamingData, type NetworkStandard, getRoamingData } from '../data/networks';
import { Signal, SignalHigh, SignalLow, SignalMedium, Phone, Wifi, AlertTriangle, Globe2, Search } from 'lucide-react';
import Footer from './Footer';

interface StandardDisplayProps {
  label: string;
  available: boolean;
  icon: React.ReactNode;
}

const StandardDisplay: React.FC<StandardDisplayProps> = ({ label, available, icon }) => (
  <div className={`flex items-center gap-2 p-3 rounded-lg border ${
    available 
      ? 'text-green-400 border-green-900/50 bg-green-900/10' 
      : 'text-red-400 border-red-900/50 bg-red-900/10'
  }`}>
    {icon}
    <span className="font-medium">{label}</span>
    <span className="ml-auto">{available ? '✓' : '✗'}</span>
  </div>
);

export default function RoamingChecker() {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [providerSearch, setProviderSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [destinationSearch, setDestinationSearch] = useState('');

  const filteredProviders = useMemo(() => {
    const query = providerSearch.toLowerCase();
    return providers.filter(provider => 
      provider.name.toLowerCase().includes(query) ||
      provider.country.toLowerCase().includes(query)
    );
  }, [providerSearch]);

  const roamingInfoList = useMemo(() => {
    if (!selectedProvider) return [];
    const providerToCheck = getRoamingData(selectedProvider);
    return roamingData.filter(
      info => info.homeProvider === providerToCheck
    );
  }, [selectedProvider]);

  const availableCountries = useMemo(() => {
    if (!roamingInfoList.length) return [];
    return [...new Set(roamingInfoList.map(info => info.visitingCountry))].sort();
  }, [roamingInfoList]);

  const filteredCountries = useMemo(() => {
    const query = destinationSearch.toLowerCase();
    return availableCountries.filter(country => {
      const countryInfo = providers.find(p => p.country === country);
      return countryInfo?.country.toLowerCase().includes(query) ||
             countryInfo?.flag.toLowerCase().includes(query);
    });
  }, [availableCountries, destinationSearch]);

  const selectedProviderInfo = useMemo(() => {
    return providers.find(p => p.id === selectedProvider);
  }, [selectedProvider]);

  const filteredRoamingInfo = useMemo(() => {
    if (!selectedCountry) return [];
    return roamingInfoList.filter(info => info.visitingCountry === selectedCountry);
  }, [roamingInfoList, selectedCountry]);

  const renderStandards = (standards: NetworkStandard) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <StandardDisplay
        label="Voice & SMS"
        available={standards.voice}
        icon={<Phone className="w-5 h-5" />}
      />
      <StandardDisplay
        label="2G (GPRS)"
        available={standards.gprs}
        icon={<SignalLow className="w-5 h-5" />}
      />
      <StandardDisplay
        label="3G (UMTS)"
        available={standards.umts}
        icon={<SignalMedium className="w-5 h-5" />}
      />
      <StandardDisplay
        label="4G (LTE)"
        available={standards.lte}
        icon={<SignalHigh className="w-5 h-5" />}
      />
      <StandardDisplay
        label="VoLTE"
        available={standards.volte}
        icon={<Wifi className="w-5 h-5" />}
      />
      <StandardDisplay
        label="5G"
        available={standards.fiveG}
        icon={<Signal className="w-5 h-5" />}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe2 className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              International Roaming Checker
            </h1>
            <p className="text-gray-400">Check your network coverage worldwide</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Provider Search */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Network Provider
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-gray-900/50 rounded-lg border border-gray-700 text-white pl-10 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Search provider..."
                    value={providerSearch}
                    onChange={(e) => setProviderSearch(e.target.value)}
                  />
                </div>
                <div className="mt-2 max-h-60 overflow-auto rounded-lg border border-gray-700 bg-gray-900/50">
                  {filteredProviders.map((provider) => (
                    <button
                      key={provider.id}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${
                        selectedProvider === provider.id ? 'bg-blue-900/30' : ''
                      }`}
                      onClick={() => {
                        setSelectedProvider(provider.id);
                        setSelectedCountry('');
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span>{provider.flag}</span>
                        <span>{provider.name}</span>
                        {provider.type === 'mvno' && (
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300">
                            MVNO
                          </span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination Search */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Destination Country
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-gray-900/50 rounded-lg border border-gray-700 text-white pl-10 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Search destination..."
                    value={destinationSearch}
                    onChange={(e) => setDestinationSearch(e.target.value)}
                  />
                </div>
                <div className="mt-2 max-h-60 overflow-auto rounded-lg border border-gray-700 bg-