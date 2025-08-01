import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import forestSunbeamBg from '@/assets/forest-sunbeam-bg.jpg';

interface HeroSectionProps {
  onGetStartedClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${forestSunbeamBg})`,
        }}
      />
      
      {/* Enhanced overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-background/60" />
      
      {/* Ripple animation overlay */}
      <div className="absolute inset-0 ripple-animation" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            {t("heroTitle")}
          </h1>
          
          {/* Tagline */}
          <p className="text-poetic text-xl sm:text-2xl lg:text-3xl mb-8 max-w-2xl mx-auto text-white/95 drop-shadow-xl font-semibold">
            "{t("heroSubtitle")}"
          </p>
          
          {/* Description */}
          <p className="text-white/90 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            {t("heroDescription")}
          </p>
          
          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={onGetStartedClick}
              className="btn-magic px-12 py-6 text-lg font-bold rounded-full glow-soft transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              {t("getStarted")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};