import React from 'react';
import { cn } from '@/lib/utils';

interface PasswordStrengthProps {
  password: string;
  className?: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ 
  password, 
  className 
}) => {
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let score = 0;
    
    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    
    // Character variety checks
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    if (score <= 2) {
      return { strength: 1, label: 'Weak', color: 'bg-destructive' };
    } else if (score <= 4) {
      return { strength: 2, label: 'Medium', color: 'bg-warning' };
    } else {
      return { strength: 3, label: 'Strong', color: 'bg-success' };
    }
  };

  const { strength, label, color } = getPasswordStrength(password);

  if (!password) return null;

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex space-x-1">
        {[1, 2, 3].map((level) => (
          <div
            key={level}
            className={cn(
              'h-2 flex-1 rounded-full transition-all duration-300',
              level <= strength ? color : 'bg-muted'
            )}
          />
        ))}
      </div>
      <p className={cn(
        'text-sm font-medium transition-colors duration-300',
        strength === 1 ? 'text-destructive' :
        strength === 2 ? 'text-warning' : 'text-success'
      )}>
        {label}
      </p>
    </div>
  );
};