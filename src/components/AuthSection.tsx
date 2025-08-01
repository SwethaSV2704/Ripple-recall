import React, { useState } from 'react';
import { RippleIcon } from './RippleIcon';
import { AuthForm } from './AuthForm';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { LifeCollage } from './LifeCollage';
import { useLanguage } from '@/contexts/LanguageContext';

export const AuthSection: React.FC = () => {
  const { t } = useLanguage();
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Add forgot password logic here
  };

  return (
    <section id="auth" className="min-h-screen flex">
      {/* Left Side - Brand Soul with Life Collage */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
        {/* Life-themed collage background */}
        <LifeCollage />
        
        {/* Glass panel */}
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          <div className="glass rounded-3xl p-12 max-w-md backdrop-blur-xl border border-white/30 shadow-2xl bg-white/10">
            {/* Brand */}
            <div className="mb-8">
              <RippleIcon size={60} className="mx-auto mb-6 animate-float text-white drop-shadow-2xl" />
              <h2 className="font-display text-3xl font-bold text-white mb-4 drop-shadow-2xl font-black">
                {t("brandName")}
              </h2>
              <p className="text-poetic text-lg text-white/90 drop-shadow-xl font-semibold">
                "{t("tagline")}"
              </p>
            </div>

            {/* Poetic description */}
            <div className="space-y-4">
              <p className="text-white/85 leading-relaxed drop-shadow-xl font-medium text-base">
                {t("heroDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Subtle ripple animation overlay */}
        <div className="absolute inset-0 ripple-animation opacity-30" />
      </div>

      {/* Right Side - Auth Card */}
      <div className="flex-1 lg:max-w-lg xl:max-w-xl flex flex-col justify-center">
        <div className="px-6 sm:px-12 lg:px-16 py-12">
          {/* Mobile brand header */}
          <div className="lg:hidden text-center mb-8">
            <RippleIcon size={48} className="mx-auto mb-4 animate-float" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              {t('brandName')}
            </h2>
            <p className="text-poetic text-muted-foreground">
              "{t('tagline')}"
            </p>
          </div>

          {/* Controls (top right for desktop, top for mobile) */}
          <div className="flex justify-end lg:absolute lg:top-6 lg:right-6 mb-8 lg:mb-0">
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Auth Form */}
          <div className="flex justify-center">
            <AuthForm
              mode={authMode}
              onToggleMode={toggleAuthMode}
              onForgotPassword={handleForgotPassword}
            />
          </div>
        </div>
      </div>
    </section>
  );
};