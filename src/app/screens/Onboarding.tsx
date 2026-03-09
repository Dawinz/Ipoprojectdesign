import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Home, Users, TrendingUp } from 'lucide-react';

export function Onboarding() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Home,
      title: 'Find Your Dream Property',
      description: 'Browse thousands of properties across Tanzania. From apartments to villas, find your perfect match.',
    },
    {
      icon: Users,
      title: 'Connect with Madalali',
      description: 'Get connected with verified real estate agents who will help you every step of the way.',
    },
    {
      icon: TrendingUp,
      title: 'Buy, Rent, or Invest',
      description: 'Whether buying, renting, or investing, IPO makes real estate simple and accessible.',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const Icon = slides[currentSlide].icon;

  return (
    <div className="h-screen bg-[#F6F8FB] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="bg-gradient-to-br from-[#6BCB77] to-[#2F6BFF] w-32 h-32 rounded-3xl flex items-center justify-center mb-8">
          <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl text-gray-900 mb-4">
          {slides[currentSlide].title}
        </h1>

        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
          {slides[currentSlide].description}
        </p>

        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF]' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 space-y-3">
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={handleSkip}
          className="w-full text-gray-600 py-4 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
