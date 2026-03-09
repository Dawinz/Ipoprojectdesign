import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import logoImage from 'figma:asset/88d9b12dac8587aab9710d7a392907affd6f3350.png';

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-br from-[#6BCB77] to-[#2F6BFF] flex items-center justify-center">
      <div className="text-center">
        <img 
          src={logoImage} 
          alt="IPO"
          className="w-40 h-40 mx-auto mb-4 animate-pulse"
        />
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}
