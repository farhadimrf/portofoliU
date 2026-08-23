import { useContext } from 'react';
import { InsightContext } from '../context/InsightContextValue';

export { InsightProvider } from '../context/InsightContext';
export type { InsightToast, InsightContextType } from '../context/InsightContextValue';

export const useInsight = () => {
  const context = useContext(InsightContext);
  if (!context) {
    throw new Error('useInsight must be used within an InsightProvider');
  }
  return context;
};
