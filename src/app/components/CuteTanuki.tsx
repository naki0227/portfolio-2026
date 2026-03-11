import React from 'react';

export function CuteTanuki({ animal = 'default', className, style }: { animal?: 'default' | 'crab' | 'owl' | 'flamingo', className?: string, style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="100" cy="190" rx="60" ry="10" fill="rgba(0,0,0,0.4)" />

      {/* --- BASE TANUKI (Always visible, behind morphs) --- */}
      <g id="tanuki-base" style={{ transition: 'all 0.3s ease' }}>
        {/* Tail */}
          <path d="M 120 150 Q 190 130 180 175 Q 140 190 120 160" fill="#6B4423" />
          <path d="M 140 148 Q 175 142 170 168" fill="#3D2616" stroke="#3D2616" strokeWidth="6" strokeLinecap="round" />
          <path d="M 155 142 Q 185 145 178 172" fill="#8B5A2B" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
          
        {/* Body */}
        <rect x="50" y="70" width="100" height="110" rx="45" fill="#8B5A2B"/>
          
          {/* Belly */}
          <rect x="65" y="100" width="70" height="70" rx="35" fill="#F5DEB3"/>
          
          {/* Head */}
          <rect x="40" y="30" width="120" height="85" rx="40" fill="#8B5A2B"/>
          
          {/* Ears */}
          <path d="M 50 45 Q 35 5 70 25 Z" fill="#3D2616"/>
          <path d="M 150 45 Q 165 5 130 25 Z" fill="#3D2616"/>
          
          {/* Mask */}
          <path d="M 45 65 C 45 45, 100 45, 100 70 C 100 45, 155 45, 155 65 C 165 90, 115 95, 100 85 C 85 95, 35 90, 45 65 Z" fill="#2D1E12"/>
          
          {/* Eyes */}
          <circle cx="72" cy="68" r="12" fill="white"/>
          <circle cx="128" cy="68" r="12" fill="white"/>
          <circle cx="72" cy="68" r="6" fill="#111"/>
          <circle cx="128" cy="68" r="6" fill="#111"/>
          <circle cx="75" cy="65" r="2" fill="white"/>
          <circle cx="131" cy="65" r="2" fill="white"/>
          
          {/* Snout */}
          <circle cx="100" cy="85" r="16" fill="#F5DEB3"/>
          <circle cx="100" cy="81" r="5" fill="#111"/>
          <path d="M 95 90 Q 100 95 105 90" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          {/* Paws (Arms) */}
          <circle cx="55" cy="115" r="14" fill="#3D2616"/>
          <circle cx="145" cy="115" r="14" fill="#3D2616"/>
          
          {/* Paws (Feet) */}
          <path d="M 60 170 Q 60 185 75 185 Q 90 185 90 170 Z" fill="#3D2616" />
          <path d="M 110 170 Q 110 185 125 185 Q 140 185 140 170 Z" fill="#3D2616" />
        </g>

      {/* --- CRAB MORPH --- */}
      {animal === 'crab' && (
        <g id="morph-crab" className="animate-in fade-in zoom-in duration-500">
          {/* Left Claw */}
          <path d="M 55 115 Q 10 100 20 60" fill="none" stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
          <path d="M 20 60 C 0 40, 30 20, 40 40 C 50 20, 60 40, 20 60" fill="#EF4444" />
          {/* Right Claw */}
          <path d="M 145 115 Q 190 100 180 60" fill="none" stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
          <path d="M 180 60 C 200 40, 170 20, 160 40 C 150 20, 140 40, 180 60" fill="#EF4444" />
          {/* Crab Legs */}
          <path d="M 50 140 Q 20 150 30 180" fill="none" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
          <path d="M 150 140 Q 180 150 170 180" fill="none" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
          {/* Tiny crab hat */}
          <circle cx="100" cy="30" r="12" fill="#EF4444" />
          <circle cx="95" cy="20" r="3" fill="white" /><circle cx="95" cy="20" r="1" fill="black" />
          <circle cx="105" cy="20" r="3" fill="white" /><circle cx="105" cy="20" r="1" fill="black" />
        </g>
      )}

      {/* --- OWL MORPH --- */}
      {animal === 'owl' && (
        <g id="morph-owl" className="animate-in fade-in zoom-in duration-500">
          {/* Big Glowing Glasses */}
          <circle cx="72" cy="68" r="22" fill="none" stroke="#FDE047" strokeWidth="6" />
          <circle cx="128" cy="68" r="22" fill="none" stroke="#FDE047" strokeWidth="6" />
          <path d="M 94 68 L 106 68" stroke="#FDE047" strokeWidth="6" strokeLinecap="round" />
          {/* Owl Beak covering snout */}
          <path d="M 92 78 L 108 78 L 100 95 Z" fill="#F59E0B" />
          {/* Feather tufts */}
          <path d="M 40 35 L 25 15 L 50 25 Z" fill="#8B5A2B" />
          <path d="M 160 35 L 175 15 L 150 25 Z" fill="#8B5A2B" />
          {/* Wings */}
          <path d="M 50 100 C 20 120, 30 160, 60 140 Z" fill="#6B4423" />
          <path d="M 150 100 C 180 120, 170 160, 140 140 Z" fill="#6B4423" />
        </g>
      )}

      {/* --- FLAMINGO MORPH --- */}
      {animal === 'flamingo' && (
        <g id="morph-flamingo" className="animate-in fade-in zoom-in duration-500">
          {/* Flamingo Floatie */}
          <ellipse cx="100" cy="135" rx="65" ry="30" fill="none" stroke="#F472B6" strokeWidth="25" />
          <ellipse cx="100" cy="135" rx="65" ry="30" fill="none" stroke="#FDA4AF" strokeWidth="10" />
          {/* Floatie Head */}
          <path d="M 35 135 Q 10 90 35 70 C 50 50, 20 40, 15 60" fill="none" stroke="#F472B6" strokeWidth="18" strokeLinecap="round" />
          <path d="M 15 60 L 5 70" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round" />
          {/* Pink tint over belly */}
          <rect x="65" y="100" width="70" height="70" rx="35" fill="#F472B6" opacity="0.4"/>
          {/* Standing on one leg (hide one leg) */}
          <rect x="110" y="165" width="30" height="20" fill="#130b19" /> {/* Hacky hide right leg */}
          <path d="M 125 165 L 125 185" stroke="#F472B6" strokeWidth="6" strokeLinecap="round" />
          <path d="M 75 165 L 75 185" stroke="#F472B6" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
