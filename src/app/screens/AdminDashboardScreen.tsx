import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Users, Home, Building2, DollarSign, CheckSquare, FileText, Home as HomeIcon, MessageCircle, TrendingUp, Activity, Database, Zap, Clock } from 'lucide-react';

export function AdminDashboardScreen() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = [
    { label: 'Total Users', value: '1,247', change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Agents', value: '124', change: '+5%', icon: HomeIcon, color: 'from-green-500 to-green-600' },
    { label: 'Properties', value: '856', change: '+18%', icon: Building2, color: 'from-purple-500 to-purple-600' },
    { label: 'Revenue', value: 'TZS 2.4B', change: '+23%', icon: DollarSign, color: 'from-amber-500 to-amber-600' },
  ];

  const quickActions = [
    { label: 'Verify Agents', count: 5, icon: CheckSquare, action: () => {}, color: 'from-green-500 to-green-600' },
    { label: 'Review Reports', count: 12, icon: FileText, action: () => {}, color: 'from-red-500 to-red-600' },
    { label: 'Approve Properties', count: 8, icon: Building2, action: () => {}, color: 'from-blue-500 to-blue-600' },
    { label: 'User Support', count: 23, icon: MessageCircle, action: () => {}, color: 'from-purple-500 to-purple-600' },
  ];

  const recentUsers = [
    { name: 'James Mkamba', email: 'james@email.com', type: 'Customer', time: '5 min ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    { name: 'Grace Mwenda', email: 'grace@email.com', type: 'Agent', time: '12 min ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { name: 'Peter Juma', email: 'peter@email.com', type: 'Customer', time: '23 min ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  ];

  const systemHealth = [
    { label: 'Server Status', value: 'Operational', status: 'success', icon: Activity },
    { label: 'Database', value: 'Healthy', status: 'success', icon: Database },
    { label: 'API Response', value: '45ms', status: 'success', icon: Zap },
    { label: 'Storage', value: '67% used', status: 'warning', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-5 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-white/70 text-sm">System overview & management</p>
          </div>
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Stats */}
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

      {/* Quick Actions */}
      <div className="px-5 mb-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={action.action}
                className={`bg-gradient-to-br ${action.color} text-white rounded-2xl p-4 text-left relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {action.count}
                </div>
                <Icon className="w-7 h-7 mb-2" />
                <p className="text-sm font-bold">{action.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Growth Chart */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">User Growth</h2>
            <select className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-40 flex items-end justify-between gap-2">
            {[42, 68, 55, 78, 85, 67, 92].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-gray-900 to-gray-700 rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Users */}
      <div className="px-5 mb-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Recent Registrations</h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
          {recentUsers.map((user, index) => (
            <div key={index} className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg mb-1">
                  {user.type}
                </span>
                <p className="text-xs text-gray-400">{user.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Health */}
      <div className="px-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-4">System Health</h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
          {systemHealth.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.status === 'success' ? 'bg-green-100' : 
                  item.status === 'warning' ? 'bg-amber-100' : 
                  'bg-red-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    item.status === 'success' ? 'text-green-600' : 
                    item.status === 'warning' ? 'text-amber-600' : 
                    'text-red-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                </div>
                <span className={`text-sm font-bold ${
                  item.status === 'success' ? 'text-green-600' : 
                  item.status === 'warning' ? 'text-amber-600' : 
                  'text-red-600'
                }`}>
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}