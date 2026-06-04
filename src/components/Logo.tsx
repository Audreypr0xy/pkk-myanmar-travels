import React from 'react';
interface LogoProps {
  variant?: 'dark' | 'light';
  showText?: boolean;
}
export function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="PKK Myanmar Travels & Tours"
        className="w-auto object-contain"
        style={{
          height: '52px',
          maxWidth: '220px',
        }}
      />
    </div>
  );
}
