import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Star, Shield, Phone, MessageCircle, Mail } from 'lucide-react';
import { agents, properties } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';

export function AgentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const agent = agents.find((a) => a.id === id);
  const agentProperties = properties.filter((p) => p.agentId === id);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Agent not found</p>
      </div>
    );
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${agent.whatsapp}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${agent.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${agent.email}`;
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] px-6 pt-12 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="text-center">
          <div className="relative inline-block mb-4">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
            {agent.verified && (
              <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                <Shield className="w-5 h-5 text-white fill-white" />
              </div>
            )}
          </div>
          <h1 className="text-2xl text-white mb-1">{agent.name}</h1>
          <p className="text-white/80 mb-3">{agent.agency}</p>
          <div className="flex items-center justify-center gap-1 mb-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-lg">{agent.rating}</span>
          </div>
          <p className="text-white/80 text-sm">{agent.properties} properties listed</p>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="px-6 -mt-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 grid grid-cols-3 gap-3">
          <button
            onClick={handleCall}
            className="flex flex-col items-center gap-2 p-3 bg-[#F6F8FB] rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-6 h-6 text-[#2F6BFF]" />
            <span className="text-xs text-gray-700">Call</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center gap-2 p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">WhatsApp</span>
          </button>
          <button
            onClick={handleEmail}
            className="flex flex-col items-center gap-2 p-3 bg-[#F6F8FB] rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-6 h-6 text-[#2F6BFF]" />
            <span className="text-xs text-gray-700">Email</span>
          </button>
        </div>
      </div>

      {/* Agent Info */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl p-4">
          <h3 className="text-lg text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-base text-gray-900">{agent.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base text-gray-900">{agent.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Agency</p>
              <p className="text-base text-gray-900">{agent.agency}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agent's Properties */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-gray-900">Active Listings</h2>
          <span className="text-sm text-gray-600">
            {agentProperties.length} {agentProperties.length === 1 ? 'property' : 'properties'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {agentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {agentProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No active listings at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
}
