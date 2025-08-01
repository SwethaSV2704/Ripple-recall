import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AuthSection } from '@/components/AuthSection';

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);

  const scrollToAuth = () => {
    const authSection = document.getElementById('auth');
    if (authSection) {
      authSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAuth(true);
  };

  const handleLoginClick = () => {
    scrollToAuth();
  };

  const handleSignUpClick = () => {
    scrollToAuth();
  };

  const handleGetStartedClick = () => {
    scrollToAuth();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onLoginClick={handleLoginClick}
        onSignUpClick={handleSignUpClick}
      />
      
      <HeroSection onGetStartedClick={handleGetStartedClick} />
      
      <AuthSection />
    </div>
  );
};

export default Index;
