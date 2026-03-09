import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Car,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { properties, agents } from '../data/mockData';

export function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const property = properties.find((p) => p.id === id);
  const agent = property ? agents.find((a) => a.id === property.agentId) : null;

  if (!property || !agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Property not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M`;
    }
    return price.toLocaleString();
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${agent.whatsapp}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${agent.phone}`;
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Image Gallery */}
      <div className="relative h-80 bg-gray-900">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </>
          )}
        </div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${isSaved ? 'fill-red-500 stroke-red-500' : 'stroke-gray-900'}`}
              />
            </button>
            <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
              <Share2 className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Image Counter */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </span>
          </div>
        )}

        {/* Listing Type Badge */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white px-4 py-2 rounded-full text-sm">
          {property.type === 'buy' ? 'For Sale' : 'For Rent'}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6 pb-24">
        {/* Price and Title */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-2xl text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>
                  {property.location}, {property.city}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FFB020] bg-opacity-10 border border-[#FFB020] rounded-2xl p-4">
            <p className="text-sm text-gray-600 mb-1">Price</p>
            <p className="text-3xl text-[#FFB020]">
              TZS {formatPrice(property.price)}
              {property.type === 'rent' && <span className="text-lg">/month</span>}
            </p>
          </div>
        </div>

        {/* Key Details */}
        <div className="bg-white rounded-2xl p-4">
          <h3 className="text-lg text-gray-900 mb-4">Property Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6F8FB] p-3 rounded-xl">
                  <Bed className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="text-base text-gray-900">{property.bedrooms}</p>
                </div>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6F8FB] p-3 rounded-xl">
                  <Bath className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="text-base text-gray-900">{property.bathrooms}</p>
                </div>
              </div>
            )}
            {property.size > 0 && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6F8FB] p-3 rounded-xl">
                  <Maximize className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Size</p>
                  <p className="text-base text-gray-900">{property.size} m²</p>
                </div>
              </div>
            )}
            {property.parking > 0 && (
              <div className="flex items-center gap-3">
                <div className="bg-[#F6F8FB] p-3 rounded-xl">
                  <Car className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Parking</p>
                  <p className="text-base text-gray-900">{property.parking} cars</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
            <div>
              <p className="text-sm text-gray-600">Furnished</p>
              <p className="text-base text-gray-900">
                {property.furnished ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Type</p>
              <p className="text-base text-gray-900 capitalize">{property.propertyType}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-4">
          <h3 className="text-lg text-gray-900 mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">{property.description}</p>
        </div>

        {/* Amenities */}
        {property.amenities.length > 0 && (
          <div className="bg-white rounded-2xl p-4">
            <h3 className="text-lg text-gray-900 mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="bg-[#F6F8FB] px-4 py-2 rounded-full text-sm text-gray-700"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Agent Card */}
        <div className="bg-white rounded-2xl p-4">
          <h3 className="text-lg text-gray-900 mb-4">Contact Agent</h3>
          <div
            onClick={() => navigate(`/agent/${agent.id}`)}
            className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-xl transition-colors"
          >
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="text-base text-gray-900 mb-1">{agent.name}</h4>
              <p className="text-sm text-gray-600">{agent.agency}</p>
              <p className="text-sm text-gray-600">{agent.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCall}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-[#F6F8FB] rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700">Call</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl p-4">
          <h3 className="text-lg text-gray-900 mb-3">Location</h3>
          <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Map view</p>
              <p className="text-gray-500 text-xs">
                {property.location}, {property.city}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3">
        <button
          onClick={handleCall}
          className="flex-1 bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          Contact Agent
        </button>
      </div>
    </div>
  );
}