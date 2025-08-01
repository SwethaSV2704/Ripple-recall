import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  { code: 'ta' as const, name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi' as const, name: 'हिन्दी', flag: '🇮🇳' },
];

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 px-3 glow-hover"
          aria-label={t('languageToggle')}
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
          <span className="sm:hidden">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="glass min-w-[160px] border-border/50"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer transition-colors duration-200 ${
              language === lang.code ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <span className="mr-3 text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};