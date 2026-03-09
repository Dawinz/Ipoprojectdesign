import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import logoImage from 'figma:asset/ad9a138f64e3258b9457267f7f7132fc7e82a5fe.png';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app');
  };

  const handleDemoLogin = () => {
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] flex flex-col">
      <div className="flex-1 px-6 py-8">
        <img 
          src={logoImage} 
          alt="IPO"
          className="w-24 h-24 mx-auto mb-8"
        />

        <div className="max-w-md mx-auto">
          <h1 className="text-3xl text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-8">Sign in to continue to IPO</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-[#2F6BFF]" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-[#2F6BFF]">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl hover:bg-gray-200 transition-colors mt-3"
            >
              Demo Login (Skip)
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <button
              onClick={() => navigate('/signup')}
              className="text-[#2F6BFF]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}