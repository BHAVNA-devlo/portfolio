import React from 'react';
import { motion } from 'framer-motion';

export function LeetCodeStatsCard() {
  const stats = [
    { label: 'Max Contest Rating', value: '1,650+' },
    { label: 'Total Solved', value: '250+' },
    { label: 'Active Coding Streak', value: '84 Days' },
    { label: 'Badges Earned', value: '3 Active' }
  ];

  return (
    <div className="relative overflow-hidden border border-white/5 bg-white/[0.01] p-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div>
          <h4 className="font-display text-base font-light text-fog uppercase tracking-wide">
            LeetCode Statistics
          </h4>
          <p className="text-[10px] text-steel uppercase tracking-wider mt-0.5">
            Competitive Programming metrics
          </p>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-mint border border-mint/20 px-2.5 py-0.5 font-bold">
          @BHAVNA-devlo
        </span>
      </div>

      {/* Metrics Row */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="border border-white/5 p-3.5 bg-void/35">
            <span className="text-[9px] uppercase tracking-wider text-steel font-bold block mb-1">
              {stat.label}
            </span>
            <p className="font-display text-xl font-light text-fog tracking-wide">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Distribution */}
      <div className="mt-6 border-t border-white/5 pt-4 space-y-3">
        <div className="flex justify-between text-[9px] uppercase tracking-widest text-steel font-bold">
          <span>Difficulty Distribution</span>
          <span className="text-fog">250 / 500 solved</span>
        </div>
        
        {/* Simplified clean progress bar */}
        <div className="flex h-1 gap-1 overflow-hidden bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full bg-mint"
            title="Easy"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '48%' }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="h-full bg-mint/50"
            title="Medium"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '12%' }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="h-full bg-mint/20"
            title="Hard"
          />
        </div>

        <div className="flex justify-between text-[9px] uppercase tracking-wider text-steel">
          <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-mint" /> Easy (100)</span>
          <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-mint/50" /> Med (120)</span>
          <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-mint/20" /> Hard (30)</span>
        </div>
      </div>
    </div>
  );
}
