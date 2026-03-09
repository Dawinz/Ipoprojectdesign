import { useState } from 'react';
import { Search, SlidersHorizontal, MapIcon, List, X } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/mockData';

interface SearchTabProps {
  onSave: (id: string) => void;
  savedProperties: string[];
}

export function SearchTab({ onSave, savedProperties }: SearchTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: 'all',
    listingType: 'all',
    priceMin: '',
    priceMax: '',
    bedrooms: 'any',
    bathrooms: 'any',
    sortBy: 'newest',
  });

  const filteredProperties = properties.filter((property) => {
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.propertyType !== 'all' && property.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.listingType !== 'all' && property.type !== filters.listingType) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setFilters({
      location: '',
      propertyType: 'all',
      listingType: 'all',
      priceMin: '',
      priceMax: '',
      bedrooms: 'any',
      bathrooms: 'any',
      sortBy: 'newest',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-200">
        <h1 className="text-2xl text-gray-900 mb-4">Search Properties</h1>

        {/* Search Bar */}
        <div className="bg-[#F6F8FB] rounded-2xl p-4 flex items-center gap-3 mb-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search location, property..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* View Toggle and Filters */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#F6F8FB] rounded-xl text-gray-700"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2 bg-[#F6F8FB] rounded-xl p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'list' ? 'bg-white shadow-sm' : ''
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'map' ? 'bg-white shadow-sm' : ''
              }`}
            >
              <MapIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1"></div>

          <div className="text-sm text-gray-600">
            {filteredProperties.length} results
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 py-4">
        {viewMode === 'list' ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSave={onSave}
                isSaved={savedProperties.includes(property.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-200 rounded-2xl h-[600px] flex items-center justify-center">
            <div className="text-center">
              <MapIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Map view coming soon</p>
            </div>
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl text-gray-900">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Property Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {['all', 'house', 'apartment', 'land', 'villa', 'commercial'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilters({ ...filters, propertyType: type })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all capitalize ${
                        filters.propertyType === type
                          ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Listing Type */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Listing Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['all', 'buy', 'rent'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilters({ ...filters, listingType: type })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all capitalize ${
                        filters.listingType === type
                          ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Price Range (TZS)</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Min"
                    value={filters.priceMin}
                    onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                    className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                    className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
                  />
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Bedrooms</label>
                <div className="grid grid-cols-5 gap-2">
                  {['any', '1', '2', '3', '4+'].map((num) => (
                    <button
                      key={num}
                      onClick={() => setFilters({ ...filters, bedrooms: num })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        filters.bedrooms === num
                          ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Bathrooms</label>
                <div className="grid grid-cols-5 gap-2">
                  {['any', '1', '2', '3', '4+'].map((num) => (
                    <button
                      key={num}
                      onClick={() => setFilters({ ...filters, bathrooms: num })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        filters.bathrooms === num
                          ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-700"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
