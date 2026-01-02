"use client";

import React from 'react';
import { Club } from "@/utils/clubData";
import { clubCoordinators } from "@/utils/coordinatorData";
import Image from "next/image";


interface ClubModalProps {
  club: Club | null;
  isOpen: boolean;
  onClose: () => void;
}

const SamuraiSword = () => (
  <div className="absolute top-4 right-4 w-8 h-8 opacity-30">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#8b5a2b]">
      <path d="M2 20l20-18M4 18l16-14M6 16l12-10M8 14l8-6"/>
      <circle cx="20" cy="4" r="2" fill="#500000"/>
      <rect x="18" y="2" width="4" height="1" fill="#8b5a2b"/>
    </svg>
  </div>
);

const JapaneseCastle = () => (
  <div className="absolute bottom-4 left-4 w-12 h-12 opacity-20">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#8b5a2b]">
      <rect x="40" y="60" width="20" height="40"/>
      <rect x="30" y="50" width="40" height="20"/>
      <rect x="20" y="40" width="60" height="20"/>
      <polygon points="20,40 50,20 80,40"/>
      <rect x="45" y="70" width="10" height="15"/>
      <rect x="25" y="45" width="6" height="8"/>
      <rect x="69" y="45" width="6" height="8"/>
    </svg>
  </div>
);

const CherryBlossom = () => (
  <div className="absolute top-1/2 right-8 w-6 h-6 opacity-20 animate-pulse">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-pink-300">
      <path d="M12 2C12 2 8 6 12 10C16 6 12 2 12 2Z"/>
      <path d="M12 22C12 22 8 18 12 14C16 18 12 22 12 22Z"/>
      <path d="M2 12C2 12 6 8 10 12C6 16 2 12 2 12Z"/>
      <path d="M22 12C22 12 18 8 14 12C18 16 22 12 22 12Z"/>
      <circle cx="12" cy="12" r="2" fill="#8b5a2b"/>
    </svg>
  </div>
);

export default function ClubModal({ club, isOpen, onClose }: ClubModalProps) {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !club) return null;

  const coordinators = clubCoordinators[club.id] || [];


  return (
    <>
      {/* Global styles for modal animations */}
      <style jsx global>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in {
          animation: animate-in 0.3s ease-out;
        }
        .fade-in-0 {
          animation: fadeIn 0.3s ease-out;
        }
        .zoom-in-95 {
          animation: zoomIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
      `}</style>
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-[#0f0a0a] border-2 border-[#8b5a2b] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(139,90,43,0.3)] animate-in fade-in-0 zoom-in-95 duration-300">
          
          {/* Japanese decorative elements */}
          <SamuraiSword />
          <JapaneseCastle />
          <CherryBlossom />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-8 h-8 bg-[#500000] text-white rounded-full flex items-center justify-center hover:bg-[#700000] transition-colors z-10"
          >
            ×
          </button>

          {/* Header with club image */}
          <div className="relative h-48 overflow-hidden border-b-4 border-[#8b5a2b]">
            <Image
              src={club.image || "/placeholder-1.png"}
              alt={club.name}
              fill
              className="object-cover brightness-75"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0a] via-transparent to-transparent" />
            
            {/* Japanese character overlay */}
            <div className="absolute bottom-4 right-4 text-6xl font-black text-white/20" style={{ fontFamily: '"Shojumaru", cursive' }}>
              {club.overlayChar}
            </div>
            
            {/* Club name overlay */}
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl text-white font-bold mb-1" style={{ fontFamily: '"Shojumaru", cursive' }}>
                {club.name}
              </h2>
              <p className="text-[#8b5a2b] text-sm">{club.jpName}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            
            {/* About section */}
            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#500000] flex items-center justify-center mr-3" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                  <span className="text-white text-sm font-bold">{club.hanko}</span>
                </div>
                <h3 className="text-xl text-[#8b5a2b] font-bold" style={{ fontFamily: '"Shojumaru", cursive' }}>
                  About {club.name}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed pl-11">
                {club.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>

            {/* Coordinators section */}
            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#500000] flex items-center justify-center mr-3" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                  <span className="text-white text-sm">⚔</span>
                </div>
                <h3 className="text-xl text-[#8b5a2b] font-bold" style={{ fontFamily: '"Shojumaru", cursive' }}>
                  Coordinators
                </h3>
              </div>
              
              <div className="space-y-3 pl-11">
                {coordinators.map((coordinator, index) => (
                  <div key={index} className="bg-[#1a0f0f] border border-[#2e1a1a] p-4 relative">
                    {/* Japanese seal */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-[#500000] rounded-full flex items-center justify-center text-xs text-white">
                      印
                    </div>
                    
                    <div className="pr-8">
                      <h4 className="text-white font-semibold mb-1">{coordinator.name}</h4>
                      <p className="text-[#8b5a2b] text-sm mb-2">{coordinator.role}</p>
                      <a 
                        href={`mailto:${coordinator.contact}`}
                        className="text-[#b30000] hover:text-[#ff4444] text-sm transition-colors inline-flex items-center"
                      >
                        <span className="mr-2">📧</span>
                        {coordinator.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Japanese decorative border */}
            <div className="border-t border-[#8b5a2b] pt-4 text-center relative">
              <div className="absolute left-0 top-4 w-8 h-8 opacity-30">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#8b5a2b]">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="absolute right-0 top-4 w-8 h-8 opacity-30">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#8b5a2b]">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div className="text-[#8b5a2b] text-sm opacity-60" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
                頑張って • がんばって • Ganbatte
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}