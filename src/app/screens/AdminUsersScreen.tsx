import { useState } from 'react';
import { useNavigate } from 'react-router';

export function AdminUsersScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'customers' | 'agents'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 1, name: 'John Mwangi', email: 'john@email.com', role: 'customer', status: 'active', joined: 'Jan 2024', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', properties: 0 },
    { id: 2, name: 'Sarah Kimani', email: 'sarah@email.com', role: 'agent', status: 'active', joined: 'Jun 2022', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', properties: 47, verified: true },
    { id: 3, name: 'James Mkamba', email: 'james@email.com', role: 'customer', status: 'active', joined: 'Mar 2024', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', properties: 0 },
    { id: 4, name: 'Grace Mwenda', email: 'grace@email.com', role: 'agent', status: 'pending', joined: 'Mar 2024', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', properties: 12, verified: false },
    { id: 5, name: 'Peter Juma', email: 'peter@email.com', role: 'customer', status: 'active', joined: 'Feb 2024', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', properties: 0 },
    { id: 6, name: 'Mary Njeri', email: 'mary@email.com', role: 'agent', status: 'active', joined: 'Aug 2023', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', properties: 34, verified: true },
  ];

  const filteredUsers = users.filter(user => {
    const matchesTab = activeTab === 'all' || user.role === activeTab.replace('s', '');
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const stats = [
    { label: 'Total', value: users.length, color: 'from-blue-500 to-blue-600' },
    { label: 'Customers', value: users.filter(u => u.role === 'customer').length, color: 'from-green-500 to-green-600' },
    { label: 'Agents', value: users.filter(u => u.role === 'agent').length, color: 'from-purple-500 to-purple-600' },
    { label: 'Pending', value: users.filter(u => u.status === 'pending').length, color: 'from-amber-500 to-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-5 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">User Management</h1>
            <p className="text-white/70 text-sm">Manage all platform users</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 pl-12"
          />
          <svg className="w-5 h-5 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 -mt-3 mb-6">
        <div className="grid grid-cols-4 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-3 shadow-lg text-center">
              <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold`}>
                {stat.value}
              </div>
              <p className="text-[10px] text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-2xl p-1.5 flex gap-1 shadow-sm">
          {(['all', 'customers', 'agents'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="px-5 space-y-3 mb-8">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                {user.verified && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-gray-900">{user.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    user.role === 'agent' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {user.role}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>📅 Joined {user.joined}</span>
                {user.role === 'agent' && <span>🏠 {user.properties} properties</span>}
              </div>
              <span className={`text-xs font-bold ${
                user.status === 'active' ? 'text-green-600' : 'text-amber-600'
              }`}>
                {user.status}
              </span>
            </div>

            {user.status === 'pending' && (
              <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-bold">
                  Approve
                </button>
                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-bold">
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
