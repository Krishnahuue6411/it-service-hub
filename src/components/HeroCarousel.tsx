'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { HeroBanner } from '../types';

interface HeroCarouselProps {
  banners: HeroBanner[];
  onCtaClick: (bannerId: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ banners, onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length, isPaused]);

  const currentBanner = banners[currentIndex];

  return (
    <section 
      className="relative bg-slate-950 overflow-hidden text-white border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] bg-gradient-to-r ${currentBanner.bgGradient} transition-colors duration-700 flex items-center`}>
        
        {/* Dynamic Background Image Overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${currentBanner.imageUrl})` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
          
          {/* Left Text Content */}
          <div className="md:col-span-7 space-y-4 text-left animate-in fade-in slide-in-from-left-4 duration-500 key={currentIndex}">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-amber-300" />
              <span>{currentBanner.tag}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
              {currentBanner.title}
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-medium max-w-xl leading-relaxed">
              {currentBanner.subtitle}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 max-w-lg backdrop-blur-sm">
              <div className="text-xs sm:text-sm font-extrabold text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentBanner.highlightText}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onCtaClick(currentBanner.id)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 group"
              >
                <span>{currentBanner.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {currentBanner.ctaSecondaryText && (
                <button
                  onClick={() => onCtaClick(currentBanner.id)}
                  className="bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-700 transition duration-200 hover:border-slate-500"
                >
                  {currentBanner.ctaSecondaryText}
                </button>
              )}
            </div>
          </div>

          {/* Right Product Spotlight Image Visual */}
          <div className="hidden md:block md:col-span-5 relative">
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group">
              <img
                src={currentBanner.imageUrl}
                alt={currentBanner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60 flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Stock Available
                </span>
                <span className="text-emerald-400 font-extrabold">⚡ Delivered Today</span>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-amber-400 text-white hover:text-slate-950 flex items-center justify-center backdrop-blur-md transition-colors shadow-lg z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-amber-400 text-white hover:text-slate-950 flex items-center justify-center backdrop-blur-md transition-colors shadow-lg z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
