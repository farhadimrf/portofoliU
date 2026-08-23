import React, { createContext, useContext, useState, useEffect } from 'react';
import { INSIGHT_PRINCIPLES } from '../data/portfolioData';
import type { InsightPrinciple } from '../types';

interface InsightContextType {
  insightCount: number;
  principles: InsightPrinciple[];
  unlockInsight: (id: number) => void;
  incrementInsight: (amount?: number) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const InsightContext = createContext<InsightContextType | undefined>(undefined);

export const InsightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [insightCount, setInsightCount] = useState<number>(0);
  const [principles, setPrinciples] = useState<InsightPrinciple[]>(INSIGHT_PRINCIPLES);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const incrementInsight = (amount: number = 1) => {
    setInsightCount((prev) => Math.min(99, prev + amount));
  };

  const unlockInsight = (id: number) => {
    setPrinciples((prev) =>
      prev.map((p) => (p.id === id ? { ...p, unlocked: true } : p))
    );
    incrementInsight(2);
  };

  // Automatically award initial insight on scroll progression
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 20 && insightCount < 2) setInsightCount(2);
      if (scrollPercent > 50 && insightCount < 5) setInsightCount(5);
      if (scrollPercent > 80 && insightCount < 8) setInsightCount(8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [insightCount]);

  return (
    <InsightContext.Provider
      value={{
        insightCount,
        principles,
        unlockInsight,
        incrementInsight,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </InsightContext.Provider>
  );
};

export const useInsight = () => {
  const context = useContext(InsightContext);
  if (!context) {
    throw new Error('useInsight must be used within an InsightProvider');
  }
  return context;
};
