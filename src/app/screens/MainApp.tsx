import { useState } from 'react';
import { BottomNav } from '../components/BottomNav';
import { HomeTab } from '../tabs/HomeTab';
import { SearchTab } from '../tabs/SearchTab';
import { SavedTab } from '../tabs/SavedTab';
import { MessagesTab } from '../tabs/MessagesTab';
import { ProfileTab } from '../tabs/ProfileTab';

export function MainApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [savedProperties, setSavedProperties] = useState<string[]>([]);

  const handleSave = (propertyId: string) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onSave={handleSave} savedProperties={savedProperties} />;
      case 'search':
        return <SearchTab onSave={handleSave} savedProperties={savedProperties} />;
      case 'saved':
        return <SavedTab savedProperties={savedProperties} onSave={handleSave} />;
      case 'messages':
        return <MessagesTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <HomeTab onSave={handleSave} savedProperties={savedProperties} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <div className="pb-16">
        {renderTab()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}