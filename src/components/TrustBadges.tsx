'use client';

import React from 'react';
import { Truck, ShieldCheck, Headphones, Building2 } from 'lucide-react';
import { TRUST_BADGES } from '../data/mockData';

const ICON_MAP = {
  Truck,
  ShieldCheck,
  Headphones,
  Building2,
};

export const TrustBadges: React.FC = () => {
  return (
    <section id="trust-strip" className="py-8 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_BADGES.map((item) => {
            const IconComponent = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80 hover:border-amber-400/60 hover:bg-slate-800 transition-all duration-300 flex items-start gap-3.5 group"
              >
                <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
