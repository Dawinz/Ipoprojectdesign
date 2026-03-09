import { StarIcon, VerifiedIcon } from './icons/CustomIcons';
import { Agent } from '../data/mockData';
import { useNavigate } from 'react-router';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/agent/${agent.id}`)}
      className="bg-white rounded-2xl p-4 border border-gray-100 cursor-pointer min-w-[160px] group hover:border-gray-200 transition-colors"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-3">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-gray-100">
            <img 
              src={agent.photo} 
              alt={agent.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          {agent.verified && (
            <div className="absolute -bottom-1 -right-1">
              <VerifiedIcon className="w-5 h-5 text-[#2F6BFF]" />
            </div>
          )}
        </div>
        
        <h3 className="text-sm font-bold text-gray-900 mb-0.5">
          {agent.name}
        </h3>
        
        <p className="text-xs text-gray-500 mb-3">
          {agent.agency}
        </p>
        
        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
          <StarIcon className="w-3.5 h-3.5 text-amber-500" filled />
          <span className="text-sm font-bold text-gray-900">{agent.rating}</span>
          <span className="text-xs text-gray-400">• {agent.properties}</span>
        </div>
      </div>
    </div>
  );
}