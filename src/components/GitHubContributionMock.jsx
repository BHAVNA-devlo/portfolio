import React from 'react';
import { motion } from 'framer-motion';

export function GitHubContributionMock() {
  const rows = 7;
  const cols = 28;
  
  const getIntensity = (r, c) => {
    const val = (r * 7 + c * 3) % 11;
    if (val === 0) return 0;
    if (val < 4) return 1;
    if (val < 8) return 2;
    if (val < 10) return 3;
    return 4;
  };

  const colors = [
    'bg-white/[0.03]', // 0
    'bg-mint/15',     // 1
    'bg-mint/35',     // 2
    'bg-mint/65',     // 3
    'bg-mint'         // 4
  ];

  return (
    <div className="relative overflow-hidden border border-white/5 bg-white/[0.01] p-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div>
          <h4 className="font-display text-base font-light text-fog uppercase tracking-wide">
            GitHub Activity
          </h4>
          <p className="text-[10px] text-steel uppercase tracking-wider mt-0.5">
            Active open source & project commits
          </p>
        </div>
        <div className="text-right">
          <span className="font-display text-base font-light text-mint tracking-wide block">
            642 Commits
          </span>
          <p className="text-[9px] uppercase tracking-wider text-steel">
            Past 6 months
          </p>
        </div>
      </div>

      {/* Grid container with overflow scrolling on mobile */}
      <div className="mt-6 overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex min-w-[340px] flex-col gap-1">
          {Array.from({ length: rows }).map((_, rIndex) => (
            <div key={rIndex} className="flex gap-1">
              {Array.from({ length: cols }).map((_, cIndex) => {
                const intensity = getIntensity(rIndex, cIndex);
                return (
                  <motion.div
                    key={cIndex}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                    className={`h-2.5 w-2.5 rounded-sm transition-all ${colors[intensity]}`}
                    title={`${intensity * 2 + 1} contributions on this day`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-wider text-steel">
        <span>Mon / Wed / Fri Schedule</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="h-2 w-2 rounded-sm bg-white/[0.03]" />
          <span className="h-2 w-2 rounded-sm bg-mint/15" />
          <span className="h-2 w-2 rounded-sm bg-mint/35" />
          <span className="h-2 w-2 rounded-sm bg-mint/65" />
          <span className="h-2 w-2 rounded-sm bg-mint" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
