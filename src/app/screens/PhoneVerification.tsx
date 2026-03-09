import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Phone, ArrowLeft } from 'lucide-react';

export function PhoneVerification() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/otp-verification');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] flex flex-col">
      <div className="px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-[#6BCB77] to-[#2F6BFF] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Phone className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl text-gray-900 mb-2 text-center">Verify Phone Number</h1>
          <p className="text-gray-600 mb-8 text-center">
            We'll send you a code to verify your phone number
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
                  +255
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="754 123 456"
                  className="w-full pl-16 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
