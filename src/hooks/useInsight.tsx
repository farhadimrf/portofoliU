import React, { createContext, useContext, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INSIGHT_PRINCIPLES } from '../data/portfolioData';
import type { InsightPrinciple } from '../types';

gsap.registerPlugin(ScrollTrigger);

export interface InsightToast {
  id: number;
  axiomNumber: number;
  title: string;
  quote: string;
}

interface InsightContextType {
  insightCount: number;
  maxInsight: number;
  principles: InsightPrinciple[];
  unlockInsight: (id: number) => void;
  incrementInsight: (amount?: number) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  activeToast: InsightToast | null;
  dismissToast: () => void;
}

const InsightContext = createContext<InsightContextType | undefined>(undefined);

export const InsightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [insightCount, setInsightCount] = useState<number>(1);
  const [principles, setPrinciples] = useState<InsightPrinciple[]>(INSIGHT_PRINCIPLES);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeToast, setActiveToast] = useState<InsightToast | null>(null);

  const maxInsight = 5;

  const showToast = (axiom: InsightPrinciple) => {
    setActiveToast({
      id: Date.now(),
      axiomNumber: axiom.id,
      title: axiom.title,
      quote: axiom.quote,
    });
  };

  const dismissToast = () => {
    setActiveToast(null);
  };

  const unlockInsight = (id: number) => {
    setPrinciples((prev) =>
      prev.map((p) => (p.id === id ? { ...p, unlocked: true } : p))
    );
    setInsightCount((prev) => Math.max(prev, id));
    const targetAxiom = INSIGHT_PRINCIPLES.find((p) => p.id === id);
    if (targetAxiom) {
      showToast(targetAxiom);
    }
  };

  const incrementInsight = (amount: number = 1) => {
    setInsightCount((prev) => Math.min(maxInsight, prev + amount));
  };

  // Connect ScrollTrigger milestones to automatically unlock Insight
  useEffect(() => {
    const milestones = [
      { sectionId: 'old-systems', axiomId: 1 },
      { sectionId: 'great-hunt', axiomId: 2 },
      { sectionId: 'boss-fights', axiomId: 3 },
      { sectionId: 'workshop', axiomId: 4 },
      { sectionId: 'insight', axiomId: 5 },
    ];

    const triggers: ScrollTrigger[] = [];

    milestones.forEach(({ sectionId, axiomId }) => {
      const el = document.getElementById(sectionId);
      if (el) {
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: 'top 70%',
          once: true,
          onEnter: () => {
            unlockInsight(axiomId);
          },
        });
        triggers.push(trigger);
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Auto-dismiss toast after 6 seconds
  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => {
        setActiveToast(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  return (
    <InsightContext.Provider
      value={{
        insightCount,
        maxInsight,
        principles,
        unlockInsight,
        incrementInsight,
        isModalOpen,
        setIsModalOpen,
        activeToast,
        dismissToast,
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
