export interface ExperienceItem {
  id: string;
  region: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  status: 'conquered' | 'current';
  badge?: string;
  subtitle?: string;
}

export interface BossFight {
  id: string;
  bossName: string;
  category: string;
  subtitle: string;
  challenge: string;
  approach: string;
  appliedTech: string[];
  outcome: string;
  metrics?: string;
}

export interface ArsenalItem {
  id: string;
  archetype: string;
  name: string;
  category: 'core' | 'framework' | 'backend' | 'data' | 'tooling';
  masteryDescription: string;
  keyStrengths: string[];
  productionUse: string;
}

export interface InsightPrinciple {
  id: number;
  level: number;
  title: string;
  quote: string;
  elaboration: string;
  unlocked: boolean;
}

export interface WorkshopPractice {
  title: string;
  category: string;
  description: string;
  tools: string[];
  standard: string;
}
