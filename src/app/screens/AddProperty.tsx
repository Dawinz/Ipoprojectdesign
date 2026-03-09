import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Upload, X } from 'lucide-react';

export function AddProperty() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    city: 'Dar es Salaam',
    propertyType: 'house',
    listingType: 'buy',
    bedrooms: '',
    bathrooms: '',
    size: '',
    parking: '',
    furnished: false,
    description: '',
  });

  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Property listing created successfully!');
    navigate('/app');
  };

  const handleImageUpload = () => {
    // Simulate image upload
    alert('Image upload would happen here');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-200 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <h1 className="text-2xl text-gray-900">Add New Property</h1>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
        {/* Images */}
        <div>
          <label className="block text-sm text-gray-700 mb-3">Property Images</label>
          <button
            type="button"
            onClick={handleImageUpload}
            className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-[#2F6BFF] transition-colors"
          >
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
            <p className="text-gray-600">Upload images</p>
            <p className="text-gray-400 text-sm mt-1">Max 10 images</p>
          </button>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Property Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g. 3 Bedroom House in Mbezi Beach"
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Property Type</label>
          <select
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
            <option value="short-stay">Short Stay</option>
          </select>
        </div>

        {/* Listing Type */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Listing Type</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, listingType: 'buy' })}
              className={`py-4 rounded-xl border-2 transition-all ${
                formData.listingType === 'buy'
                  ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              For Sale
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, listingType: 'rent' })}
              className={`py-4 rounded-xl border-2 transition-all ${
                formData.listingType === 'rent'
                  ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Price (TZS) {formData.listingType === 'rent' && '/ month'}
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="Enter price"
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            required
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-700 mb-2">City</label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            >
              <option>Dar es Salaam</option>
              <option>Zanzibar</option>
              <option>Arusha</option>
              <option>Dodoma</option>
              <option>Mwanza</option>
              <option>Moshi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. Mbezi Beach"
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
              required
            />
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Bedrooms</label>
            <input
              type="number"
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
              placeholder="0"
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Bathrooms</label>
            <input
              type="number"
              value={formData.bathrooms}
              onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
              placeholder="0"
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Size (m²)</label>
            <input
              type="number"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              placeholder="0"
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Parking</label>
            <input
              type="number"
              value={formData.parking}
              onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
              placeholder="0"
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            />
          </div>
        </div>

        {/* Furnished */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.furnished}
              onChange={(e) => setFormData({ ...formData, furnished: e.target.checked })}
              className="w-5 h-5 rounded accent-[#2F6BFF]"
            />
            <span className="text-gray-700">Property is furnished</span>
          </label>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe the property..."
            rows={5}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] resize-none"
            required
          />
        </div>

        {/* Submit */}
        <div className="sticky bottom-0 bg-[#F6F8FB] pt-4 pb-6 -mx-6 px-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Publish Property
          </button>
        </div>
      </form>
    </div>
  );
}
