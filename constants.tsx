
import React from 'react';

export const COLORS = {
  light: {
    bg: '#FFFFFF',
    text: '#0F172A',
    secondary: '#475569',
    accent: '#1D4ED8',
    success: '#10B981',
    card: '#F8FAFC',
    border: '#E2E8F0',
  },
  dark: {
    bg: '#020617',
    text: '#F8FAFC',
    secondary: '#94A3B8',
    accent: '#3B82F6', 
    success: '#34D399',
    card: '#0F172A',
    border: '#1E293B',
  }
};

export const Logo = ({ className = "w-7 h-7 md:w-9 md:h-9", dark = false }: { className?: string, dark?: boolean }) => (
  <div className="flex items-center gap-2 md:gap-3 group cursor-pointer select-none">
    <div className={`relative ${className} flex-shrink-0 flex items-center justify-center transition-all duration-300`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        <path d="M20 2L35 9V22C35 31 28 37 20 39C12 37 5 31 5 22V9L20 2Z" fill={dark ? "#3B82F6" : "#1D4ED8"} />
        <path d="M11 24H29M26 18H19L16 23H13L11 26H29V24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="27" r="1.8" fill="white" />
        <circle cx="24" cy="27" r="1.8" fill="white" />
      </svg>
    </div>
    <div className="flex flex-col min-w-0">
      <span className={`font-poppins font-extrabold text-sm md:text-lg leading-none tracking-tight truncate ${dark ? 'text-white' : 'text-[#0F172A]'}`}>
        auto-osiguranje<span className={dark ? 'text-blue-400' : 'text-blue-700'}>.hr</span>
      </span>
      <span className={`text-[8px] md:text-[9px] font-bold tracking-[0.1em] uppercase opacity-70 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        Ugovori Online
      </span>
    </div>
  </div>
);

export const PARTNERS = [
  { name: 'Triglav', color: '#E30613', letter: 'T', shape: 'rounded-full' },
  { name: 'Euroherc', color: '#004A99', letter: 'E', shape: 'rounded-none' },
  { name: 'Groupama', color: '#008542', letter: 'G', shape: 'rounded-2xl' },
  { name: 'Generali', color: '#D21118', letter: 'G', shape: 'rounded-sm' },
  { name: 'Uniqa', color: '#0055A4', letter: 'U', shape: 'rounded-lg' },
  { name: 'Sava', color: '#00965E', letter: 'S', shape: 'rounded-full' },
  { name: 'Wiener', color: '#C8102E', letter: 'W', shape: 'rounded-md' },
  { name: 'Adriatic', color: '#003366', letter: 'A', shape: 'rounded-3xl' },
];
