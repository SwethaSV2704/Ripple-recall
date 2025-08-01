import React from 'react';
import lifeCatImage from '@/assets/life-cat.jpg';
import lifeDeerImage from '@/assets/life-deer.jpg';
import lifeMonkeyImage from '@/assets/life-monkey.jpg';

export const LifeCollage: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Life-themed collage layout */}
      <div className="grid grid-cols-12 grid-rows-8 h-full gap-2 p-4">
        {/* Main focal image - Cat */}
        <div 
          className="col-span-7 row-span-5 rounded-2xl bg-cover bg-center shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
          style={{ backgroundImage: `url(${lifeCatImage})` }}
        />
        
        {/* Deer image */}
        <div 
          className="col-span-5 row-span-4 rounded-2xl bg-cover bg-center shadow-lg transform rotate-[3deg] hover:rotate-1 transition-transform duration-500"
          style={{ backgroundImage: `url(${lifeDeerImage})` }}
        />
        
        {/* Monkey image */}
        <div 
          className="col-span-4 row-span-3 rounded-2xl bg-cover bg-center shadow-lg transform rotate-[-1deg] hover:rotate-[-3deg] transition-transform duration-500"
          style={{ backgroundImage: `url(${lifeMonkeyImage})` }}
        />
        
        {/* Decorative elements */}
        <div className="col-span-8 row-span-1 flex items-center justify-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
        
        {/* Floating decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-primary/20 animate-float" />
        <div className="absolute bottom-1/3 left-1/6 w-4 h-4 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-primary-glow/25 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};