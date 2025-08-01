import React from 'react';
import { RippleIcon } from './RippleIcon';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onLoginClick, 
  onSignUpClick 
}) => {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Brand */}
          <div className="flex items-center space-x-3">
            <RippleIcon size={40} className="animate-float" />
            <div>
              <h1 className="font-display text-xl font-semibold text-foreground">
                {t('brandName')}
              </h1>
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            
            <div className="hidden sm:flex items-center space-x-2 ml-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onLoginClick}
                className="glow-hover"
              >
                {t('login')}
              </Button>
              <Button 
                size="sm"
                onClick={onSignUpClick}
                className="btn-magic px-6"
              >
                {t('signUp')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};