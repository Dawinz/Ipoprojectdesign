import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Camera, User } from 'lucide-react';

export function EditProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+255 754 123 456',
    city: 'Dar es Salaam',
    bio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    navigate(-1);
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
        <h1 className="text-2xl text-gray-900">Edit Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white p-2 rounded-full"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-3">Change profile photo</p>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            required
          />
        </div>

        {/* City */}
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

        {/* Bio */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Bio</label>
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself..."
            rows={4}
            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
