import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { 
  UserIcon, 
  HeartIcon, 
  HomeIcon, 
  MessageIcon,
  VerifiedIcon,
  StarIcon,
  SearchIcon,
  SettingsIcon
} from '../components/icons/CustomIcons';
import { 
  User, 
  Heart, 
  Home, 
  MessageCircle, 
  Search, 
  Bell, 
  CreditCard, 
  Settings, 
  HelpCircle,
  Plus,
  BarChart3,
  Star,
  DollarSign,
  Calendar,
  LayoutDashboard,
  Users,
  Building2,
  CheckSquare,
  FileText,
  TrendingUp,
  Shield,
  Globe,
  Moon,
  LogOut
} from 'lucide-react';

export function ProfileTab() {
  const navigate = useNavigate();
  const { user, role, setRole, logout } = useAuth();
  const [showRoleSwitch, setShowRoleSwitch] = useState(false);

  if (!user) return null;

  // Role-specific menu items with Lucide icons
  const customerMenuItems = [
    { label: 'Edit Profile', icon: User, action: () => navigate('/edit-profile') },
    { label: 'Saved Properties', icon: Heart, count: 5, action: () => navigate('/app') },
    { label: 'My Inquiries', icon: MessageCircle, count: 3, action: () => {} },
    { label: 'Search History', icon: Search, action: () => {} },
    { label: 'Notifications', icon: Bell, count: 2, action: () => {} },
    { label: 'Payment Methods', icon: CreditCard, action: () => {} },
    { label: 'Settings', icon: Settings, action: () => {} },
    { label: 'Help & Support', icon: HelpCircle, action: () => {} },
  ];

  const agentMenuItems = [
    { label: 'Edit Profile', icon: User, action: () => navigate('/edit-profile') },
    { label: 'My Properties', icon: Home, count: user.properties || 0, action: () => navigate('/agent/properties') },
    { label: 'Add New Property', icon: Plus, action: () => navigate('/add-property'), primary: true },
    { label: 'Messages', icon: MessageCircle, count: 8, action: () => {} },
    { label: 'Analytics', icon: BarChart3, action: () => navigate('/agent/analytics') },
    { label: 'Reviews', icon: Star, action: () => {} },
    { label: 'Earnings', icon: DollarSign, action: () => {} },
    { label: 'Schedule', icon: Calendar, action: () => {} },
    { label: 'Settings', icon: Settings, action: () => {} },
  ];

  const adminMenuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, action: () => navigate('/admin/dashboard') },
    { label: 'User Management', icon: Users, action: () => navigate('/admin/users') },
    { label: 'Property Management', icon: Building2, action: () => navigate('/admin/properties') },
    { label: 'Agent Verification', icon: CheckSquare, count: 5, action: () => {} },
    { label: 'Reports', icon: FileText, action: () => {} },
    { label: 'Analytics', icon: TrendingUp, action: () => {} },
    { label: 'System Settings', icon: Settings, action: () => {} },
    { label: 'Audit Logs', icon: Shield, action: () => {} },
  ];

  const menuItems = role === 'customer' ? customerMenuItems : role === 'agent' ? agentMenuItems : adminMenuItems;

  const roles = [
    { 
      id: 'customer', 
      label: 'Customer', 
      desc: 'Browse & buy properties',
      icon: User,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'agent', 
      label: 'Agent', 
      desc: 'List & manage properties',
      icon: Home,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 'admin', 
      label: 'Admin', 
      desc: 'System management',
      icon: Shield,
      color: 'from-gray-700 to-gray-900'
    },
  ] as const;

  const getRoleIcon = () => {
    if (role === 'customer') return User;
    if (role === 'agent') return Home;
    return Shield;
  };

  const RoleIcon = getRoleIcon();

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2F6BFF] via-[#4B7FFF] to-[#6BCB77] px-5 pt-14 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Profile</h1>
          <button 
            onClick={() => setShowRoleSwitch(!showRoleSwitch)}
            className="text-white text-sm font-medium px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
          >
            Switch Role
          </button>
        </div>
      </div>

      {/* Role Switcher Modal */}
      {showRoleSwitch && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-5" 
          onClick={() => setShowRoleSwitch(false)}
        >
          <div 
            className="bg-[#F6F8FB] rounded-3xl w-full max-w-sm p-6 shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Switch Role</h2>
              <p className="text-sm text-gray-600">Choose how you want to use IPO</p>
            </div>
            
            <div className="space-y-4 mb-6">
              {roles.map((r) => {
                const Icon = r.icon;
                const isActive = role === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      setRole(r.id);
                      setShowRoleSwitch(false);
                    }}
                    style={{
                      backgroundColor: isActive ? '#2F6BFF' : '#FFFFFF',
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    }}
                    className={`w-full p-5 rounded-2xl transition-all duration-200 text-left shadow-md border-2 ${
                      isActive
                        ? 'border-[#2F6BFF]'
                        : 'border-transparent hover:border-gray-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        style={{
                          background: isActive 
                            ? 'rgba(255, 255, 255, 0.25)' 
                            : r.id === 'customer' ? 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
                            : r.id === 'agent' ? 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)'
                            : 'linear-gradient(135deg, #374151 0%, #1F2937 100%)'
                        }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p 
                          style={{ color: isActive ? '#FFFFFF' : '#111827' }}
                          className="font-bold text-lg mb-1"
                        >
                          {r.label}
                        </p>
                        <p 
                          style={{ color: isActive ? 'rgba(255, 255, 255, 0.8)' : '#6B7280' }}
                          className="text-sm"
                        >
                          {r.desc}
                        </p>
                      </div>
                      {isActive && (
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <svg className="w-5 h-5 text-[#2F6BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowRoleSwitch(false)}
              className="w-full py-3.5 bg-white text-gray-900 font-bold rounded-xl transition-all shadow-md hover:shadow-lg border border-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Profile Card */}
      <div className="px-5 -mt-16 mb-6">
        <div className="bg-white rounded-2xl shadow-xl p-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg">
                <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
              </div>
              {user.verified && (
                <div className="absolute -bottom-1 -right-1">
                  <VerifiedIcon className="w-6 h-6 text-[#2F6BFF]" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{user.email}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-full">
                <RoleIcon className="w-3.5 h-3.5" />
                <span className="uppercase">{role}</span>
              </div>
            </div>
          </div>

          {/* Role-specific Stats */}
          {role === 'agent' && (
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{user.properties}</p>
                <p className="text-xs text-gray-500 mt-1">Properties</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <StarIcon className="w-4 h-4 text-amber-500" filled />
                  <p className="text-2xl font-bold text-gray-900">{user.rating}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">128</p>
                <p className="text-xs text-gray-500 mt-1">Reviews</p>
              </div>
            </div>
          )}

          {role === 'admin' && (
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-xs text-gray-500 mt-1">Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">856</p>
                <p className="text-xs text-gray-500 mt-1">Properties</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">124</p>
                <p className="text-xs text-gray-500 mt-1">Agents</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions - Agent Only */}
      {role === 'agent' && (
        <div className="px-5 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/add-property')}
              className="bg-gradient-to-br from-[#2F6BFF] to-[#6BCB77] text-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Plus className="w-6 h-6" />
              <span className="text-sm font-bold">Add Property</span>
            </button>
            <button 
              onClick={() => navigate('/agent/analytics')}
              className="bg-white text-gray-900 p-4 rounded-2xl flex flex-col items-center gap-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm font-bold">Analytics</span>
            </button>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                  item.primary ? 'bg-blue-50' : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.primary ? 'bg-[#2F6BFF]' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${item.primary ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <span className={`flex-1 text-left font-medium ${
                  item.primary ? 'text-[#2F6BFF]' : 'text-gray-900'
                }`}>
                  {item.label}
                </span>
                {item.count !== undefined && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[24px] text-center">
                    {item.count}
                  </span>
                )}
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      {/* Account Section */}
      <div className="px-5 mb-6">
        <h3 className="text-sm font-bold text-gray-500 uppercase mb-3 px-2">Account</h3>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 text-gray-700" />
            </div>
            <span className="flex-1 text-left font-medium text-gray-900">Language</span>
            <span className="text-sm text-gray-500">English</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Moon className="w-5 h-5 text-gray-700" />
            </div>
            <span className="flex-1 text-left font-medium text-gray-900">Dark Mode</span>
            <div className="w-12 h-6 bg-gray-200 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm" />
            </div>
          </button>
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-700" />
            </div>
            <span className="flex-1 text-left font-medium text-gray-900">Notifications</span>
            <div className="w-12 h-6 bg-[#2F6BFF] rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm" />
            </div>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-5 mb-8">
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className="w-full flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm text-red-600 font-bold hover:bg-red-50 transition-colors border border-red-100"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* App Info */}
      <div className="px-5 pb-8 text-center">
        <p className="text-gray-500 text-sm font-medium">IPO Real Estate v1.0.0</p>
        <p className="text-gray-400 text-xs mt-1">Member since {user.joinDate}</p>
        <p className="text-gray-400 text-xs mt-1">© 2026 IPO. All rights reserved.</p>
      </div>
    </div>
  );
}