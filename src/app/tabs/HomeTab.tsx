import { SearchIcon, LocationIcon, FilterIcon } from '../components/icons/CustomIcons';
import { PropertyCard } from '../components/PropertyCard';
import { AgentCard } from '../components/AgentCard';
import { properties, agents, popularLocations } from '../data/mockData';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface HomeTabProps {
  onSave: (id: string) => void;
  savedProperties: string[];
}

export function HomeTab({ onSave, savedProperties }: HomeTabProps) {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'land', label: 'Land' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'short-stay', label: 'Short Stay' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const featuredProperties = properties.filter((p) => p.featured);
  const recentProperties = properties.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Header with Search */}
      <div className="bg-gradient-to-br from-[#2F6BFF] via-[#4B7FFF] to-[#6BCB77] px-5 pt-14 pb-6">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-white/80 text-[13px] font-medium mb-1">Location</p>
            <div className="flex items-center gap-2">
              <LocationIcon className="w-5 h-5 text-white" />
              <h1 className="text-white text-xl font-semibold">Dar es Salaam</h1>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <FilterIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        <button 
          onClick={() => navigate('/app')}
          className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 shadow-xl shadow-black/10"
        >
          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-gray-900 text-sm font-medium">Search properties</p>
            <p className="text-gray-400 text-xs">House, apartment, land...</p>
          </div>
        </button>
      </div>

      {/* Category Pills */}
      <div className="px-5 -mt-3 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2.5 rounded-xl whitespace-nowrap text-[13px] font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Featured</h2>
            <p className="text-xs text-gray-500 mt-0.5">Handpicked properties for you</p>
          </div>
          <button className="text-[#2F6BFF] text-[13px] font-semibold">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSave={onSave}
              isSaved={savedProperties.includes(property.id)}
            />
          ))}
        </div>
      </div>

      {/* Explore Locations */}
      <div className="px-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Explore Locations</h2>
            <p className="text-xs text-gray-500 mt-0.5">Popular areas in Tanzania</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {popularLocations.slice(0, 4).map((location, index) => (
            <button
              key={index}
              className="relative h-40 rounded-2xl overflow-hidden group"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-base mb-0.5">{location.name}</h3>
                <p className="text-white/90 text-xs font-medium">{location.properties} listings</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Listings */}
      <div className="px-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Recent Listings</h2>
            <p className="text-xs text-gray-500 mt-0.5">Just added to the market</p>
          </div>
          <button className="text-[#2F6BFF] text-[13px] font-semibold">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {recentProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSave={onSave}
              isSaved={savedProperties.includes(property.id)}
            />
          ))}
        </div>
      </div>

      {/* Top Agents */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Top Agents</h2>
            <p className="text-xs text-gray-500 mt-0.5">Trusted property professionals</p>
          </div>
          <button className="text-[#2F6BFF] text-[13px] font-semibold">
            View all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}