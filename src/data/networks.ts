export interface NetworkStandard {
  voice: boolean;
  gprs: boolean;
  umts: boolean;
  lte: boolean;
  volte: boolean;
  fiveG: boolean;
}

export interface NetworkProvider {
  id: string;
  name: string;
  country: string;
  flag: string;
  type: 'mno' | 'mvno';
  network?: string; // Parent network for MVNOs
}

export interface RoamingInfo {
  homeProvider: string;
  visitingCountry: string;
  hostNetwork: string;
  standards: NetworkStandard;
  euRoaming: boolean;
}

export const providers: NetworkProvider[] = [
  // Germany (DE)
  { id: 'vodafone-de', name: 'Vodafone', country: 'DE', flag: '🇩🇪', type: 'mno' },
  { id: 'telekom-de', name: 'Telekom', country: 'DE', flag: '🇩🇪', type: 'mno' },
  { id: 'o2-de', name: 'O2', country: 'DE', flag: '🇩🇪', type: 'mno' },
  { id: 'lidl-connect-de', name: 'Lidl Connect', country: 'DE', flag: '🇩🇪', type: 'mvno', network: 'vodafone-de' },
  { id: 'congstar-de', name: 'congstar', country: 'DE', flag: '🇩🇪', type: 'mvno', network: 'telekom-de' },
  { id: 'aldi-talk-de', name: 'ALDI TALK', country: 'DE', flag: '🇩🇪', type: 'mvno', network: 'o2-de' },
  
  // Austria (AT)
  { id: 'a1-at', name: 'A1', country: 'AT', flag: '🇦🇹', type: 'mno' },
  { id: 'magenta-at', name: 'Magenta', country: 'AT', flag: '🇦🇹', type: 'mno' },
  { id: 'drei-at', name: '3', country: 'AT', flag: '🇦🇹', type: 'mno' },
  { id: 'hot-at', name: 'HOT', country: 'AT', flag: '🇦🇹', type: 'mvno', network: 'magenta-at' },
  { id: 'spusu-at', name: 'spusu', country: 'AT', flag: '🇦🇹', type: 'mvno', network: 'drei-at' },
  
  // Switzerland (CH)
  { id: 'swisscom-ch', name: 'Swisscom', country: 'CH', flag: '🇨🇭', type: 'mno' },
  { id: 'salt-ch', name: 'Salt', country: 'CH', flag: '🇨🇭', type: 'mno' },
  { id: 'sunrise-ch', name: 'Sunrise', country: 'CH', flag: '🇨🇭', type: 'mno' },
  { id: 'wingo-ch', name: 'Wingo', country: 'CH', flag: '🇨🇭', type: 'mvno', network: 'swisscom-ch' },
  { id: 'yallo-ch', name: 'Yallo', country: 'CH', flag: '🇨🇭', type: 'mvno', network: 'sunrise-ch' },
  
  // Netherlands (NL)
  { id: 'kpn-nl', name: 'KPN', country: 'NL', flag: '🇳🇱', type: 'mno' },
  { id: 'vodafone-nl', name: 'Vodafone', country: 'NL', flag: '🇳🇱', type: 'mno' },
  { id: 't-mobile-nl', name: 'T-Mobile', country: 'NL', flag: '🇳🇱', type: 'mno' },
  { id: 'simyo-nl', name: 'Simyo', country: 'NL', flag: '🇳🇱', type: 'mvno', network: 'kpn-nl' },
  { id: 'lebara-nl', name: 'Lebara', country: 'NL', flag: '🇳🇱', type: 'mvno', network: 'kpn-nl' },
  
  // Denmark (DK)
  { id: 'tdc-dk', name: 'TDC', country: 'DK', flag: '🇩🇰', type: 'mno' },
  { id: 'telenor-dk', name: 'Telenor', country: 'DK', flag: '🇩🇰', type: 'mno' },
  { id: 'telia-dk', name: 'Telia', country: 'DK', flag: '🇩🇰', type: 'mno' },
  { id: '3-dk', name: '3', country: 'DK', flag: '🇩🇰', type: 'mno' },
  { id: 'oister-dk', name: 'Oister', country: 'DK', flag: '🇩🇰', type: 'mvno', network: '3-dk' },
  
  // Poland (PL)
  { id: 'orange-pl', name: 'Orange', country: 'PL', flag: '🇵🇱', type: 'mno' },
  { id: 'play-pl', name: 'Play', country: 'PL', flag: '🇵🇱', type: 'mno' },
  { id: 't-mobile-pl', name: 'T-Mobile', country: 'PL', flag: '🇵🇱', type: 'mno' },
  { id: 'plus-pl', name: 'Plus', country: 'PL', flag: '🇵🇱', type: 'mno' },
  { id: 'nju-mobile-pl', name: 'Nju Mobile', country: 'PL', flag: '🇵🇱', type: 'mvno', network: 'orange-pl' }
];

export const getRoamingData = (providerId: string): string => {
  const provider = providers.find(p => p.id === providerId);
  return provider?.type === 'mvno' ? provider.network! : providerId;
};

export const roamingData: RoamingInfo[] = [
  // German providers roaming
  // Vodafone DE
  {
    homeProvider: 'vodafone-de',
    visitingCountry: 'AT',
    hostNetwork: 'a1-at',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'vodafone-de',
    visitingCountry: 'CH',
    hostNetwork: 'swisscom-ch',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'vodafone-de',
    visitingCountry: 'NL',
    hostNetwork: 'vodafone-nl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'vodafone-de',
    visitingCountry: 'DK',
    hostNetwork: 'tdc-dk',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'vodafone-de',
    visitingCountry: 'PL',
    hostNetwork: 'orange-pl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: false },
    euRoaming: true
  },

  // Telekom DE
  {
    homeProvider: 'telekom-de',
    visitingCountry: 'AT',
    hostNetwork: 'magenta-at',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'telekom-de',
    visitingCountry: 'CH',
    hostNetwork: 'swisscom-ch',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'telekom-de',
    visitingCountry: 'NL',
    hostNetwork: 't-mobile-nl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'telekom-de',
    visitingCountry: 'DK',
    hostNetwork: 'telia-dk',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'telekom-de',
    visitingCountry: 'PL',
    hostNetwork: 't-mobile-pl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },

  // O2 DE
  {
    homeProvider: 'o2-de',
    visitingCountry: 'AT',
    hostNetwork: 'drei-at',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'o2-de',
    visitingCountry: 'CH',
    hostNetwork: 'sunrise-ch',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: false, fiveG: false },
    euRoaming: false
  },
  {
    homeProvider: 'o2-de',
    visitingCountry: 'NL',
    hostNetwork: 'kpn-nl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'o2-de',
    visitingCountry: 'DK',
    hostNetwork: '3-dk',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'o2-de',
    visitingCountry: 'PL',
    hostNetwork: 'play-pl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },

  // Austrian providers roaming
  // A1 AT
  {
    homeProvider: 'a1-at',
    visitingCountry: 'DE',
    hostNetwork: 'telekom-de',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'a1-at',
    visitingCountry: 'CH',
    hostNetwork: 'swisscom-ch',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'a1-at',
    visitingCountry: 'NL',
    hostNetwork: 'kpn-nl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'a1-at',
    visitingCountry: 'DK',
    hostNetwork: 'tdc-dk',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'a1-at',
    visitingCountry: 'PL',
    hostNetwork: 'orange-pl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },

  // Swiss providers roaming
  // Swisscom
  {
    homeProvider: 'swisscom-ch',
    visitingCountry: 'DE',
    hostNetwork: 'telekom-de',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'swisscom-ch',
    visitingCountry: 'AT',
    hostNetwork: 'a1-at',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'swisscom-ch',
    visitingCountry: 'NL',
    hostNetwork: 'kpn-nl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'swisscom-ch',
    visitingCountry: 'DK',
    hostNetwork: 'tdc-dk',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'swisscom-ch',
    visitingCountry: 'PL',
    hostNetwork: 'orange-pl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },

  // Dutch providers roaming
  // KPN
  {
    homeProvider: 'kpn-nl',
    visitingCountry: 'DE',
    hostNetwork: 'telekom-de',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'kpn-nl',
    visitingCountry: 'AT',
    hostNetwork: 'a1-at',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'kpn-nl',
    visitingCountry: 'CH',
    hostNetwork: 'swisscom-ch',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: false
  },
  {
    homeProvider: 'kpn-nl',
    visitingCountry: 'DK',
    hostNetwork: 'tdc-dk',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  },
  {
    homeProvider: 'kpn-nl',
    visitingCountry: 'PL',
    hostNetwork: 'orange-pl',
    standards: { voice: true, gprs: true, umts: true, lte: true, volte: true, fiveG: true },
    euRoaming: true
  }
];