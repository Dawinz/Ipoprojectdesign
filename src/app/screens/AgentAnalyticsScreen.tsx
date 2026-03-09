import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Eye, MessageCircle, Home, DollarSign, ArrowLeft, Star, Heart } from 'lucide-react';

export function AgentAnalyticsScreen() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = [
    { label: 'Total Views', value: '12,458', change: '+23%', icon: Eye, color: 'from-blue-500 to-blue-600' },
    { label: 'Inquiries', value: '347', change: '+12%', icon: MessageCircle, color: 'from-green-500 to-green-600' },
    { label: 'Properties Sold', value: '28', change: '+8%', icon: Home, color: 'from-purple-500 to-purple-600' },
    { label: 'Total Earnings', value: 'TZS 145M', change: '+34%', icon: DollarSign, color: 'from-amber-500 to-amber-600' },
  ];

  const recentActivity = [
    { action: 'New inquiry', property: 'Modern Villa in Masaki', time: '5 min ago', icon: MessageCircle },
    { action: 'Property viewed', property: 'Luxury Apartment Oyster Bay', time: '23 min ago', icon: Eye },
    { action: 'Property saved', property: 'Beach House Kigamboni', time: '1 hour ago', icon: Heart },
    { action: 'Review received', property: 'Office Space Mikocheni', time: '2 hours ago', icon: Star },
  ];

  const topProperties = [
    { name: 'Modern Villa in Masaki', views: 1247, inquiries: 45, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400' },
    { name: 'Luxury Apartment Oyster Bay', views: 987, inquiries: 32, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400' },
    { name: 'Beach House Kigamboni', views: 856, inquiries: 28, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2F6BFF] to-[#6BCB77] px-5 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Analytics</h1>
            <p className="text-white/80 text-sm">Your performance overview</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-5 -mt-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg">
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 mb-2">{stat.label}</p>
                <span className="text-xs font-bold text-green-600">{stat.change}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Views Overview</h2>
            <select className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-48 flex items-end justify-between gap-2">
            {[45, 78, 62, 89, 95, 72, 84].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-[#2F6BFF] to-[#6BCB77] rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Properties */}
      <div className="px-5 mb-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Top Performing Properties</h2>
        <div className="space-y-3">
          {topProperties.map((property, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2F6BFF] to-[#6BCB77] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                #{index + 1}
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-1">{property.name}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{property.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{property.inquiries}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
          {recentActivity.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 line-clamp-1">{activity.property}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}