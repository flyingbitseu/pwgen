import React, { useState } from 'react';
import { Fingerprint, Copy, Check } from 'lucide-react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });

  const generatePassword = () => {
    let charset = '';
    if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) charset += '0123456789';
    if (options.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset === '') {
      charset = 'abcdefghijklmnopqrstuvwxyz'; // Fallback to lowercase if nothing selected
      setOptions(prev => ({ ...prev, lowercase: true }));
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 500);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(64, Math.max(1, Number(e.target.value)));
    setLength(value);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#1e1e2e] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#2a2a3c] rounded-xl shadow-2xl p-8 space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <Fingerprint className="w-8 h-8 text-[#7f5af0]" />
          <h1 className="text-2xl font-bold text-[#e0e0e0]">Password Generator</h1>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="length" className="block text-sm font-medium text-[#e0e0e0]">
              Password Length: {length}
            </label>
            <input
              type="range"
              id="length"
              value={length}
              onChange={handleLengthChange}
              className="w-full h-2 bg-[#414158] rounded-lg appearance-none cursor-pointer accent-[#7f5af0]"
              min="1"
              max="64"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2 text-[#e0e0e0]">
              <input
                type="checkbox"
                checked={options.uppercase}
                onChange={() => toggleOption('uppercase')}
                className="w-4 h-4 accent-[#7f5af0]"
              />
              <span>Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center space-x-2 text-[#e0e0e0]">
              <input
                type="checkbox"
                checked={options.lowercase}
                onChange={() => toggleOption('lowercase')}
                className="w-4 h-4 accent-[#7f5af0]"
              />
              <span>Lowercase (a-z)</span>
            </label>
            <label className="flex items-center space-x-2 text-[#e0e0e0]">
              <input
                type="checkbox"
                checked={options.numbers}
                onChange={() => toggleOption('numbers')}
                className="w-4 h-4 accent-[#7f5af0]"
              />
              <span>Numbers (0-9)</span>
            </label>
            <label className="flex items-center space-x-2 text-[#e0e0e0]">
              <input
                type="checkbox"
                checked={options.symbols}
                onChange={() => toggleOption('symbols')}
                className="w-4 h-4 accent-[#7f5af0]"
              />
              <span>Symbols (!@#$)</span>
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="w-full py-3 bg-[#7f5af0] hover:bg-[#6e46e0] text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Generate Password</span>
          </button>

          {password && (
            <div className="mt-6 p-4 bg-[#414158] rounded-lg relative group">
              <p 
                className={`text-xl text-center font-mono text-[#e0e0e0] break-all
                  ${glitchEffect ? 'animate-glitch' : ''}`}
              >
                {password}
              </p>
              <button
                onClick={copyToClipboard}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#e0e0e0] hover:text-[#7f5af0] transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;