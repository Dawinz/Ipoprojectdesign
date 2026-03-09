import { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react';

export function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    userType: 'buyer',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/phone-verification');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] flex flex-col">
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600 mb-8">Join IPO to find your dream property</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+255 XXX XXX XXX"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a password"
                  className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">I am a</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: 'buyer' })}
                  className={`py-4 rounded-xl border-2 transition-all ${
                    formData.userType === 'buyer'
                      ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  Property Seeker
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: 'agent' })}
                  className={`py-4 rounded-xl border-2 transition-all ${
                    formData.userType === 'agent'
                      ? 'border-[#2F6BFF] bg-blue-50 text-[#2F6BFF]'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  Agent/Madalali
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded accent-[#2F6BFF]" required />
              <span className="text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <button
              onClick={() => navigate('/login')}
              className="text-[#2F6BFF]"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
