export * from './types';
export { abstractQuestions } from './abstractReasoning';
export { mathematicsQuestions } from './mathematics';
export { readingQuestions, readingPassages } from './reading';
export { writtenStimulus } from './writtenExpression';

import { abstractQuestions } from './abstractReasoning';
import { mathematicsQuestions } from './mathematics';
import { readingQuestions } from './reading';
import type { McqQuestion, SectionId } from './types';

export function getMcqQuestions(sectionId: SectionId): McqQuestion[] {
  switch (sectionId) {
    case 'abstract':
      return abstractQuestions;
    case 'mathematics':
      return mathematicsQuestions;
    case 'reading':
      return readingQuestions;
    default:
      return [];
  }
}

export const STORAGE_KEY = 'scholarship-practice-v1';
