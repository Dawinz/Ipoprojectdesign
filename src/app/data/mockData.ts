export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  type: 'buy' | 'rent';
  propertyType: 'house' | 'apartment' | 'land' | 'villa' | 'commercial' | 'short-stay';
  images: string[];
  description: string;
  amenities: string[];
  furnished: boolean;
  parking: number;
  agentId: string;
  views: number;
  dateAdded: string;
  featured: boolean;
  latitude?: number;
  longitude?: number;
}

export interface Agent {
  id: string;
  name: string;
  photo: string;
  agency: string;
  phone: string;
  whatsapp: string;
  email: string;
  rating: number;
  properties: number;
  verified: boolean;
}

export interface Message {
  id: string;
  propertyId: string;
  agentId: string;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isUser: boolean;
}

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Amina Hassan',
    photo: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI5MzM3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    agency: 'Prime Properties Tanzania',
    phone: '+255 754 123 456',
    whatsapp: '+255754123456',
    email: 'amina@primeproperties.co.tz',
    rating: 4.8,
    properties: 24,
    verified: true,
  },
  {
    id: '2',
    name: 'John Mwangi',
    photo: 'https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyOTA0MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    agency: 'Msasani Real Estate',
    phone: '+255 713 987 654',
    whatsapp: '+255713987654',
    email: 'john@msasanire.co.tz',
    rating: 4.9,
    properties: 31,
    verified: true,
  },
  {
    id: '3',
    name: 'Fatima Juma',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    agency: 'Zanzibar Homes',
    phone: '+255 777 555 333',
    whatsapp: '+255777555333',
    email: 'fatima@zanzibarhomes.co.tz',
    rating: 4.7,
    properties: 18,
    verified: true,
  },
];

export const properties: Property[] = [
  {
    id: '1',
    title: '3 Bedroom House in Mbezi Beach',
    price: 450000000,
    location: 'Mbezi Beach',
    city: 'Dar es Salaam',
    bedrooms: 3,
    bathrooms: 3,
    size: 250,
    type: 'buy',
    propertyType: 'house',
    images: [
      'https://images.unsplash.com/photo-1741850820171-22561ea229d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwVGFuemFuaWF8ZW58MXx8fHwxNzczMDA2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMwMDQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Beautiful modern house in the prestigious Mbezi Beach area. Features spacious rooms, modern kitchen, and a large compound with parking for 3 cars.',
    amenities: ['WiFi', 'Generator', 'Security', 'Garden', 'Garage'],
    furnished: false,
    parking: 3,
    agentId: '1',
    views: 234,
    dateAdded: '2026-03-05',
    featured: true,
    latitude: -6.7298,
    longitude: 39.2426,
  },
  {
    id: '2',
    title: 'Luxury 2 Bedroom Apartment - Masaki',
    price: 1200000,
    location: 'Masaki Peninsula',
    city: 'Dar es Salaam',
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    type: 'rent',
    propertyType: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMwMDQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Stunning apartment with sea views, gym, swimming pool, and 24/7 security. Fully furnished with modern amenities.',
    amenities: ['Swimming Pool', 'Gym', 'WiFi', 'Security', 'Elevator', 'Backup Generator'],
    furnished: true,
    parking: 2,
    agentId: '2',
    views: 567,
    dateAdded: '2026-03-06',
    featured: true,
  },
  {
    id: '3',
    title: 'Beachfront Villa - Zanzibar',
    price: 850000000,
    location: 'Nungwi Beach',
    city: 'Zanzibar',
    bedrooms: 5,
    bathrooms: 4,
    size: 400,
    type: 'buy',
    propertyType: 'villa',
    images: [
      'https://images.unsplash.com/photo-1728049006343-9ee0187643d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHdpdGglMjBwb29sJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczMDA2MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Exclusive beachfront villa with private pool, direct beach access, and breathtaking ocean views. Perfect for luxury living or investment.',
    amenities: ['Private Pool', 'Beach Access', 'WiFi', 'Security', 'Garden', 'Staff Quarters'],
    furnished: true,
    parking: 4,
    agentId: '3',
    views: 892,
    dateAdded: '2026-03-01',
    featured: true,
  },
  {
    id: '4',
    title: 'Commercial Plot - Mikocheni',
    price: 280000000,
    location: 'Mikocheni',
    city: 'Dar es Salaam',
    bedrooms: 0,
    bathrooms: 0,
    size: 1200,
    type: 'buy',
    propertyType: 'land',
    images: [
      'https://images.unsplash.com/photo-1606500307322-61cf2c98aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGxhbmQlMjBwbG90JTIwcHJvcGVydHl8ZW58MXx8fHwxNzcyOTkwNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Prime commercial land in Mikocheni, ideal for office building or shopping complex. Clear title deed available.',
    amenities: ['Road Access', 'Electricity', 'Water Connection'],
    furnished: false,
    parking: 0,
    agentId: '1',
    views: 145,
    dateAdded: '2026-03-07',
    featured: false,
  },
  {
    id: '5',
    title: 'Modern Office Space - CBD',
    price: 3500000,
    location: 'City Centre',
    city: 'Dar es Salaam',
    bedrooms: 0,
    bathrooms: 2,
    size: 200,
    type: 'rent',
    propertyType: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1677324574457-645566fea332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcyOTQ1Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Professional office space in prime location with elevator access, parking, and modern facilities.',
    amenities: ['Elevator', 'Parking', 'WiFi', 'Security', 'Backup Power', 'AC'],
    furnished: false,
    parking: 5,
    agentId: '2',
    views: 312,
    dateAdded: '2026-03-04',
    featured: false,
  },
  {
    id: '6',
    title: 'Short Stay Apartment - Arusha',
    price: 150000,
    location: 'Njiro',
    city: 'Arusha',
    bedrooms: 1,
    bathrooms: 1,
    size: 60,
    type: 'rent',
    propertyType: 'short-stay',
    images: [
      'https://images.unsplash.com/photo-1771457362598-eb92f9f4bf42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwcHJvcGVydHklMjB0cm9waWNhbHxlbnwxfHx8fDE3NzMwMDYwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Cozy serviced apartment perfect for safari tourists. Daily or weekly rates available.',
    amenities: ['WiFi', 'Security', 'Housekeeping', 'Kitchen', 'Hot Water'],
    furnished: true,
    parking: 1,
    agentId: '3',
    views: 98,
    dateAdded: '2026-03-08',
    featured: false,
  },
];

export const messages: Message[] = [
  {
    id: '1',
    propertyId: '1',
    agentId: '1',
    messages: [
      {
        id: '1',
        senderId: 'user',
        text: 'Hello, is this property still available?',
        timestamp: '2026-03-08T10:30:00',
        isUser: true,
      },
      {
        id: '2',
        senderId: '1',
        text: 'Yes, it is! Would you like to schedule a viewing?',
        timestamp: '2026-03-08T10:35:00',
        isUser: false,
      },
      {
        id: '3',
        senderId: 'user',
        text: 'That would be great. Are weekends available?',
        timestamp: '2026-03-08T10:40:00',
        isUser: true,
      },
    ],
  },
];

export const popularLocations = [
  { name: 'Dar es Salaam', properties: 1247, image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400' },
  { name: 'Zanzibar', properties: 432, image: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?w=400' },
  { name: 'Arusha', properties: 318, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400' },
  { name: 'Dodoma', properties: 267, image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400' },
  { name: 'Mwanza', properties: 189, image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400' },
  { name: 'Moshi', properties: 145, image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400' },
];
