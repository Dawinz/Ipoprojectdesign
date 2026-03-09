import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { properties } from '../data/mockData';
import { BedIcon, BathIcon, AreaIcon, LocationIcon } from '../components/icons/CustomIcons';
import { Plus, ArrowLeft, Edit, Eye, Trash2 } from 'lucide-react';

export function AgentPropertiesScreen() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'sold'>('active');

  // Mock agent properties
  const agentProperties = properties.slice(0, 6);
  const activeProperties = agentProperties.filter((_, i) => i < 4);
  const pendingProperties = agentProperties.filter((_, i) => i === 4);
  const soldProperties = agentProperties.filter((_, i) => i === 5);

  const currentProperties = 
    activeTab === 'active' ? activeProperties :
    activeTab === 'pending' ? pendingProperties :
    soldProperties;

  const stats = [
    { label: 'Active', value: activeProperties.length, color: 'bg-green-500' },
    { label: 'Pending', value: pendingProperties.length, color: 'bg-amber-500' },
    { label: 'Sold', value: soldProperties.length, color: 'bg-blue-500' },
  ];

  const formatPrice = (price: number) => {
    if (price >= 1000000000) return `${(price / 1000000000).toFixed(1)}B`;
    if (price >= 1000000) return `${(price / 1000000).toFixed(1)}M`;
    return price.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2F6BFF] to-[#6BCB77] px-5 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">My Properties</h1>
            <p className="text-white/80 text-sm">Manage your listings</p>
          </div>
          <button 
            onClick={() => navigate('/add-property')}
            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className={`w-8 h-8 ${stat.color} rounded-lg mb-2`} />
              <p className="text-white text-2xl font-bold">{stat.value}</p>
              <p className="text-white/80 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 -mt-3 mb-6">
        <div className="bg-white rounded-2xl p-1.5 flex gap-1 shadow-lg">
          {(['active', 'pending', 'sold'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
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
      <div className="px-5 space-y-4 mb-6">
        {currentProperties.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No properties yet</h3>
            <p className="text-sm text-gray-500 mb-6">Start by adding your first property listing</p>
            <button
              onClick={() => navigate('/add-property')}
              className="bg-gradient-to-br from-[#2F6BFF] to-[#6BCB77] text-white px-6 py-3 rounded-xl font-bold"
            >
              Add Property
            </button>
          </div>
        ) : (
          currentProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="flex gap-4 p-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                    <LocationIcon className="w-3 h-3" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  <p className="text-lg font-bold text-[#2F6BFF]">
                    TZS {formatPrice(property.price)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center gap-4 text-xs text-gray-600">
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
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 border border-gray-200">
                    <Edit className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 border border-gray-200">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 border border-gray-200">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-px bg-gray-200">
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-lg font-bold text-gray-900">127</p>
                  <p className="text-xs text-gray-500">Views</p>
                </div>
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-lg font-bold text-gray-900">23</p>
                  <p className="text-xs text-gray-500">Inquiries</p>
                </div>
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-lg font-bold text-gray-900">8</p>
                  <p className="text-xs text-gray-500">Saved</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}