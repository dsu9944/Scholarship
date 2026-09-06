export type SectionId =
  | 'abstract'
  | 'mathematics'
  | 'reading'
  | 'written';

export interface McqQuestion {
  id: string;
  number: number;
  prompt: string;
  /** Optional HTML/SVG for figural items */
  visual?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  skill: string;
  /** For reading: which passage this belongs to */
  passageId?: string;
}

export interface Passage {
  id: string;
  title: string;
  type: 'fiction' | 'non-fiction';
  text: string;
}

export interface WrittenStimulus {
  id: string;
  type: 'persuasive' | 'narrative';
  title: string;
  stimulus: string;
  timeMinutes: number;
  rubric: RubricCriterion[];
}

export interface RubricCriterion {
  name: string;
  levels: { score: number; description: string }[];
}

export interface SectionMeta {
  id: SectionId;
  title: string;
  shortTitle: string;
  description: string;
  timeMinutes: number;
  questionCount: number;
  kind: 'mcq' | 'written';
}

export interface ExamProgress {
  sectionId: SectionId;
  answers: Record<string, number | null>;
  writtenText?: string;
  startedAt: string;
  remainingSeconds: number;
  submitted: boolean;
  results?: SectionResult;
}

export interface SectionResult {
  correct: number;
  total: number;
  percent: number;
  byQuestion: Record<string, boolean>;
  weakSkills: string[];
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'abstract',
    title: 'Abstract Reasoning & Problem Solving',
    shortTitle: 'Abstract Reasoning',
    description:
      'Verbal analogies, number patterns, and figural/spatial puzzles. No prior knowledge needed — think carefully.',
    timeMinutes: 40,
    questionCount: 28,
    kind: 'mcq',
  },
  {
    id: 'mathematics',
    title: 'Mathematics Achievement & Reasoning',
    shortTitle: 'Mathematics',
    description:
      'Year 5 Australian Curriculum maths plus reasoning. No calculator.',
    timeMinutes: 40,
    questionCount: 28,
    kind: 'mcq',
  },
  {
    id: 'reading',
    title: 'Reading Comprehension',
    shortTitle: 'Reading',
    description:
      'Fiction and non-fiction passages with questions on meaning, inference, and vocabulary.',
    timeMinutes: 40,
    questionCount: 22,
    kind: 'mcq',
  },
  {
    id: 'written',
    title: 'Written Expression',
    shortTitle: 'Written Expression',
    description:
      'One writing task from a stimulus. Parent marks with the rubric — not auto-scored.',
    timeMinutes: 25,
    questionCount: 1,
    kind: 'written',
  },
];
