import { useState } from 'react';
import { weeklyMenu } from '../data';
import { Sun, Moon } from 'lucide-react';

export default function WeeklyMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayTab, setDisplayTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabClick = (index: number) => {
    if (index === activeTab || isAnimating) return;
    
    setIsAnimating(true);
    setActiveTab(index);
    
    // Slide out duration is 350ms
    setTimeout(() => {
      setDisplayTab(index);
      setIsAnimating(false);
    }, 350);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
        <div className="flex space-x-2 min-w-max mx-auto px-2">
          {weeklyMenu.map((day, index) => (
            <button
              key={day.day}
              onClick={() => handleTabClick(index)}
              className={`snap-center px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === index
                  ? 'menu-tab-active shadow-md'
                  : 'menu-tab-inactive bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl">
        <div className={`bg-white rounded-2xl shadow-xl border border-rekha-gold/20 ${isAnimating ? 'menu-content-leave' : 'menu-content-enter'}`}>
          <div className="bg-rekha-maroon text-rekha-cream px-4 md:px-6 py-3 md:py-4 text-center border-b border-rekha-gold/30">
            <h3 className="font-serif text-xl md:text-2xl font-semibold">
              {weeklyMenu[displayTab].day}'s Menu
            </h3>
          </div>
          
          <div className="p-5 md:p-8 space-y-6 md:space-y-8">
            {/* Lunch */}
            <div className="relative">
              <div className="absolute top-0 left-3 md:left-4 bottom-0 w-px bg-gray-200"></div>
              
              <div className="relative pl-10 md:pl-12">
                <div className="absolute -left-2 md:-left-1 top-0 bg-rekha-gold text-rekha-maroon p-1.5 md:p-2 rounded-full shadow-sm">
                   <Sun size={18} className="fill-current md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-semibold text-rekha-maroon mb-2 md:mb-3 flex items-center gap-2">
                    Afternoon Meal
                    <span className="text-xs md:text-sm font-sans font-normal text-gray-500 bg-gray-100 px-2 py-0.5 md:py-1 rounded-full">Lunch</span>
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {weeklyMenu[displayTab].lunch.map((item, i) => (
                      <li key={i} className="flex items-center text-sm md:text-base text-gray-700 bg-rekha-cream/30 p-2 rounded-lg border border-rekha-cream hover:border-rekha-gold/30 transition-colors">
                        <span className="mr-2 md:mr-3 text-rekha-gold text-xs md:text-sm">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Dinner */}
            <div className="relative">
              <div className="absolute top-0 left-3 md:left-4 bottom-0 w-px bg-gray-200"></div>
              
              <div className="relative pl-10 md:pl-12">
                <div className="absolute -left-2 md:-left-1 top-0 bg-rekha-maroon text-rekha-gold p-1.5 md:p-2 rounded-full shadow-sm">
                   <Moon size={18} className="fill-current md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-semibold text-rekha-maroon mb-2 md:mb-3 flex items-center gap-2">
                    Night Meal
                    <span className="text-xs md:text-sm font-sans font-normal text-gray-500 bg-gray-100 px-2 py-0.5 md:py-1 rounded-full">Dinner</span>
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {weeklyMenu[displayTab].dinner.map((item, i) => (
                      <li key={i} className="flex items-center text-sm md:text-base text-gray-700 bg-rekha-cream/30 p-2 rounded-lg border border-rekha-cream hover:border-rekha-gold/30 transition-colors">
                         <span className="mr-2 md:mr-3 text-rekha-maroon text-xs md:text-sm">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
