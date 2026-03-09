import { useState } from 'react';
import { useNavigate } from 'react-router';
import { properties } from '../data/mockData';
import { BedIcon, BathIcon, AreaIcon, LocationIcon } from '../components/icons/CustomIcons';

export function AdminPropertiesScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allProperties = properties.slice(0, 10);
  const pendingProperties = allProperties.filter((_, i) => i < 3);
  const approvedProperties = allProperties.filter((_, i) => i >= 3 && i < 8);
  const rejectedProperties = allProperties.filter((_, i) => i >= 8);

  const currentProperties = 
    activeTab === 'all' ? allProperties :
    activeTab === 'pending' ? pendingProperties :
    activeTab === 'approved' ? approvedProperties :
    rejectedProperties;

  const filteredProperties = currentProperties.filter(prop =>
    prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prop.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: 'Total', value: allProperties.length, color: 'from-blue-500 to-blue-600' },
    { label: 'Pending', value: pendingProperties.length, color: 'from-amber-500 to-amber-600' },
    { label: 'Approved', value: approvedProperties.length, color: 'from-green-500 to-green-600' },
    { label: 'Rejected', value: rejectedProperties.length, color: 'from-red-500 to-red-600' },
  ];

  const formatPrice = (price: number) => {
    if (price >= 1000000000) return `${(price / 1000000000).toFixed(1)}B`;
    if (price >= 1000000) return `${(price / 1000000).toFixed(1)}M`;
    return price.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-5 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Properties</h1>
            <p className="text-white/70 text-sm">Manage all property listings</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 pl-12"
          />
          <svg className="w-5 h-5 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 -mt-3 mb-6">
        <div className="grid grid-cols-4 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-3 shadow-lg text-center">
              <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold`}>
                {stat.value}
              </div>
              <p className="text-[10px] text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-1.5 grid grid-cols-4 gap-1 shadow-sm">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 rounded-xl text-[11px] font-bold transition-all ${
                activeTab === tab
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Properties List */}
      <div className="px-5 space-y-4 mb-8">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="flex gap-4 p-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                  <LocationIcon className="w-3 h-3" />
                  <span className="line-clamp-1">{property.location}, {property.city}</span>
                </div>
                <p className="text-base font-bold text-[#2F6BFF]">
                  TZS {formatPrice(property.price)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <BedIcon className="w-4 h-4" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BathIcon className="w-4 h-4" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <AreaIcon className="w-4 h-4" />
                  <span>{property.size}m²</span>
                </div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                activeTab === 'pending' ? 'bg-amber-100 text-amber-700' :
                activeTab === 'approved' ? 'bg-green-100 text-green-700' :
                activeTab === 'rejected' ? 'bg-red-100 text-red-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {activeTab === 'all' ? 'Active' : activeTab}
              </span>
            </div>

            {activeTab === 'pending' && (
              <div className="flex gap-2 p-4 border-t border-gray-100">
                <button className="flex-1 bg-green-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-green-600">
                  ✓ Approve
                </button>
                <button className="flex-1 bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-red-600">
                  ✕ Reject
                </button>
                <button className="px-4 bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200">
                  👁️
                </button>
              </div>
            )}

            {activeTab !== 'pending' && (
              <div className="flex gap-2 p-4 border-t border-gray-100">
                <button 
                  onClick={() => navigate(`/property/${property.id}`)}
                  className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-gray-800"
                >
                  View Details
                </button>
                <button className="px-4 bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200">
                  ⚙️
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
