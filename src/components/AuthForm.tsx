import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { PasswordStrength } from '@/components/ui/password-strength';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onToggleMode: () => void;
  onForgotPassword: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ 
  mode, 
  onToggleMode, 
  onForgotPassword 
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add authentication logic here
  };

  const handleSocialLogin = (provider: 'google' | 'facebook' | 'apple') => {
    console.log(`Login with ${provider}`);
    // Add social login logic here
  };

  return (
    <div className="w-full max-w-md">
      {/* Mode Toggle */}
      <div className="flex bg-muted rounded-lg p-1 mb-8">
        <button
          type="button"
          onClick={() => mode === 'signup' && onToggleMode()}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            mode === 'login'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {t('login')}
        </button>
        <button
          type="button"
          onClick={() => mode === 'login' && onToggleMode()}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            mode === 'signup'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {t('signUp')}
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name (Sign Up only) */}
        {mode === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              {t('fullName')}
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              required={mode === 'signup'}
            />
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            {t('email')}
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            {t('password')}
          </Label>
          <PasswordInput
            id="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            showPasswordText={t('showPassword')}
            hidePasswordText={t('hidePassword')}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            required
          />
          
          {/* Password Strength (Sign Up only) */}
          {mode === 'signup' && (
            <PasswordStrength password={formData.password} className="mt-3" />
          )}
        </div>

        {/* Forgot Password (Login only) */}
        {mode === 'login' && (
          <div className="text-right">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-primary hover:text-primary-glow transition-colors duration-200"
            >
              {t('forgotPassword')}
            </button>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full btn-magic py-6 text-base font-semibold"
        >
          {mode === 'login' ? t('login') : t('signUp')}
        </Button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <Separator className="flex-1" />
        <span className="px-4 text-sm text-muted-foreground">{t('or')}</span>
        <Separator className="flex-1" />
      </div>

      {/* Social Login */}
      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialLogin('google')}
          className="w-full py-6 text-base font-medium glow-hover border-border/50"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {t('loginWithGoogle')}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialLogin('facebook')}
          className="w-full py-6 text-base font-medium glow-hover border-border/50"
        >
          <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          {t('loginWithFacebook')}
        </Button>
      </div>

      {/* Toggle Mode */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          {mode === 'login' ? t('noAccount') : t('haveAccount')}
        </p>
        <button
          type="button"
          onClick={onToggleMode}
          className="text-sm text-primary hover:text-primary-glow font-medium transition-colors duration-200 mt-1"
        >
          {mode === 'login' ? t('signUp') : t('login')}
        </button>
      </div>
    </div>
  );
};