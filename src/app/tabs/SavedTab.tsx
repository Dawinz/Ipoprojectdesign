import { Heart } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/mockData';

interface SavedTabProps {
  savedProperties: string[];
  onSave: (id: string) => void;
}

export function SavedTab({ savedProperties, onSave }: SavedTabProps) {
  const savedPropertyList = properties.filter((p) => savedProperties.includes(p.id));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-200">
        <h1 className="text-2xl text-gray-900">Saved Properties</h1>
        <p className="text-gray-600 mt-1">
          {savedPropertyList.length} {savedPropertyList.length === 1 ? 'property' : 'properties'} saved
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {savedPropertyList.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {savedPropertyList.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSave={onSave}
                isSaved={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">No saved properties</h3>
            <p className="text-gray-600 mb-6">
              Start saving properties you're interested in
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
