import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    brandName: 'Ripple and Recall',
    tagline: 'Where Every Memory Leaves a Mark',
    heroTitle: 'Ripple and Recall',
    heroSubtitle: 'Where Every Memory Leaves a Mark',
    heroDescription: 'Some stories are whispered, some echo forever — yours can do both.',
    getStarted: "Let's Get Started",
    login: 'Login',
    signUp: 'Sign Up',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    showPassword: 'Show',
    hidePassword: 'Hide',
    forgotPassword: 'Forgotten your password?',
    noAccount: "Don't have an account?",
    haveAccount: 'Already have an account?',
    loginWithGoogle: 'Log in with Google',
    loginWithFacebook: 'Log in with Facebook',
    loginWithApple: 'Log in with Apple',
    or: 'OR',
    languageToggle: 'Language',
    themeToggle: 'Theme'
  },
  ta: {
    brandName: 'அலை மற்றும் நினைவு',
    tagline: 'ஒவ்வொரு நினைவும் ஒரு அடையாளத்தை விட்டுச்செல்கிறது',
    heroTitle: 'அலை மற்றும் நினைவு',
    heroSubtitle: 'ஒவ்வொரு நினைவும் ஒரு அடையாளத்தை விட்டுச்செல்கிறது',
    heroDescription: 'சில கதைகள் கிசுகிசுக்கப்படுகின்றன, சில என்றென்றும் எதிரொலிக்கின்றன — உங்கள் கதை இரண்டையும் செய்ய முடியும்.',
    getStarted: 'தொடங்குவோம்',
    login: 'உள்நுழைய',
    signUp: 'பதிவு செய்ய',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    fullName: 'முழு பெயர்',
    showPassword: 'காட்டு',
    hidePassword: 'மறை',
    forgotPassword: 'உங்கள் கடவுச்சொல்லை மறந்துவிட்டீர்களா?',
    noAccount: 'கணக்கு இல்லையா?',
    haveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
    loginWithGoogle: 'Google மூலம் உள்நுழைய',
    loginWithFacebook: 'Facebook மூலம் உள்நுழைய',
    loginWithApple: 'Apple மூலம் உள்நுழைய',
    or: 'அல்லது',
    languageToggle: 'மொழி',
    themeToggle: 'தீம்'
  },
  hi: {
    brandName: 'रिप्पल और रिकॉल',
    tagline: 'जहाँ हर याद एक निशान छोड़ती है',
    heroTitle: 'रिप्पल और रिकॉल',
    heroSubtitle: 'जहाँ हर याद एक निशान छोड़ती है',
    heroDescription: 'कुछ कहानियाँ फुसफुसाई जाती हैं, कुछ हमेशा गूंजती हैं — आपकी दोनों कर सकती है।',
    getStarted: 'चलिए शुरू करते हैं',
    login: 'लॉग इन',
    signUp: 'साइन अप',
    email: 'ईमेल',
    password: 'पासवर्ड',
    fullName: 'पूरा नाम',
    showPassword: 'दिखाएं',
    hidePassword: 'छुपाएं',
    forgotPassword: 'अपना पासवर्ड भूल गए?',
    noAccount: 'कोई खाता नहीं है?',
    haveAccount: 'पहले से एक खाता है?',
    loginWithGoogle: 'Google से लॉग इन करें',
    loginWithFacebook: 'Facebook से लॉग इन करें',
    loginWithApple: 'Apple से लॉग इन करें',
    or: 'या',
    languageToggle: 'भाषा',
    themeToggle: 'थीम'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};