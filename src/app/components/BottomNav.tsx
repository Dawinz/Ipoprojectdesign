import { HomeIcon, SearchIcon, HeartIcon, MessageIcon, UserIcon } from './icons/CustomIcons';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'search', label: 'Explore', Icon: SearchIcon },
  { id: 'saved', label: 'Saved', Icon: HeartIcon },
  { id: 'messages', label: 'Messages', Icon: MessageIcon },
  { id: 'profile', label: 'Profile', Icon: UserIcon },
] as const;

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto h-16 px-4 flex items-center justify-between">
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;
          
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className="flex-1 flex flex-col items-center justify-center gap-1 h-full"
              type="button"
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon 
                className={`w-6 h-6 ${isActive ? 'text-[#2F6BFF]' : 'text-gray-400'}`}
                filled={isActive}
              />
              <span className={`text-[10px] leading-none ${isActive ? 'text-[#2F6BFF] font-bold' : 'text-gray-500'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
