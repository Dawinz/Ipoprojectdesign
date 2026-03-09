import { HeartIcon, LocationIcon, BedIcon, BathIcon, AreaIcon } from './icons/CustomIcons';
import { Property } from '../data/mockData';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface PropertyCardProps {
  property: Property;
  onSave?: (id: string) => void;
  isSaved?: boolean;
}

export function PropertyCard({ property, onSave, isSaved = false }: PropertyCardProps) {
  const [saved, setSaved] = useState(isSaved);
  const navigate = useNavigate();

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved(!saved);
    onSave?.(property.id);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000000) {
      return `${(price / 1000000000).toFixed(1)}B`;
    }
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M`;
    }
    return price.toLocaleString();
  };

  return (
    <div 
      onClick={() => navigate(`/property/${property.id}`)}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="relative">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Save Button */}
        <button
          onClick={handleSave}
          className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <HeartIcon 
            className={`w-5 h-5 ${saved ? 'text-red-500' : 'text-gray-700'}`}
            filled={saved}
          />
        </button>

        {/* Type Badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full">
          <span className="text-white text-xs font-semibold">
            {property.type === 'buy' ? 'FOR SALE' : 'FOR RENT'}
          </span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl">
            <p className="text-xs text-gray-600 font-medium mb-0.5">Price</p>
            <p className="text-gray-900 font-bold text-lg">
              TZS {formatPrice(property.price)}
              {property.type === 'rent' && <span className="text-xs font-normal text-gray-600">/mo</span>}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 line-clamp-1 mb-2">
          {property.title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-gray-500 mb-4">
          <LocationIcon className="w-4 h-4" />
          <span className="text-sm">{property.location}, {property.city}</span>
        </div>
        
        <div className="flex items-center gap-5">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <BedIcon className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Beds</p>
                <p className="text-sm font-semibold text-gray-900">{property.bedrooms}</p>
              </div>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <BathIcon className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Baths</p>
                <p className="text-sm font-semibold text-gray-900">{property.bathrooms}</p>
              </div>
            </div>
          )}
          {property.size > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <AreaIcon className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Area</p>
                <p className="text-sm font-semibold text-gray-900">{property.size}m²</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}