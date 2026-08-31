'use client';

import React from 'react';
import { 
  Camera, 
  HardDrive, 
  Cpu, 
  Keyboard, 
  Wifi, 
  Receipt, 
  Printer, 
  Zap, 
  LucideIcon 
} from 'lucide-react';
import { QuickCategory } from '../types';

const ICON_MAP: Record<string, LucideIcon> = {
  Camera,
  HardDrive,
  Cpu,
  Keyboard,
  Wifi,
  Receipt,
  Printer,
  Zap,
};

interface QuickCategoryGridProps {
  categories: QuickCategory[];
  onSelectCategory: (categoryName: string) => void;
}

export const QuickCategoryGrid: React.FC<QuickCategoryGridProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>⚡ Instant Hardware Categories</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Blinkit 2-Hour Stock
            </span>
          </h3>
          <p className="text-xs text-slate-500 font-medium">Tap category to filter inventory immediately</p>
        </div>
      </div>

      {/* Grid of rounded Blinkit-style icon tiles */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
        {categories.map((cat) => {
          const IconComponent = ICON_MAP[cat.iconName] || HardDrive;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group flex flex-col items-center p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 active:scale-95 text-center relative"
            >
              {cat.tag && (
                <span className="absolute -top-2 bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase shadow-sm tracking-wide">
                  {cat.tag}
                </span>
              )}

              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${cat.bgGradient} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm border`}>
                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
              </div>

              <span className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-1 leading-snug">
                {cat.name}
              </span>
              
              <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                {cat.itemCount}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
