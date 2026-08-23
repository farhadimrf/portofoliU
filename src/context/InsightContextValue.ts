import { createContext } from 'react';
import type { InsightPrinciple } from '../types';

export interface InsightToast {
  id: number;
  axiomNumber: number;
  title: string;
  quote: string;
}

export interface InsightContextType {
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

export const InsightContext = createContext<InsightContextType | undefined>(undefined);
