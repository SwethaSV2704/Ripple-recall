import React from 'react';
import { cn } from '@/lib/utils';

interface RippleIconProps {
  className?: string;
  size?: number;
}

export const RippleIcon: React.FC<RippleIconProps> = ({ 
  className, 
  size = 32 
}) => {
  return (
    <div className={cn("relative", className)}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        className="text-primary"
      >
        {/* Outer ripple */}
        <circle 
          cx="16" 
          cy="16" 
          r="14" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.3"
          className="animate-pulse"
        />
        {/* Middle ripple */}
        <circle 
          cx="16" 
          cy="16" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.6"
          className="animate-pulse" 
          style={{ animationDelay: '0.5s' }}
        />
        {/* Inner ripple */}
        <circle 
          cx="16" 
          cy="16" 
          r="6" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.9"
          className="animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        {/* Center dot */}
        <circle 
          cx="16" 
          cy="16" 
          r="2" 
          fill="currentColor"
          className="animate-glow-pulse"
        />
      </svg>
    </div>
  );
};