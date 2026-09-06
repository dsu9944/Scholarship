import type { WrittenStimulus } from './types';

export const writtenStimulus: WrittenStimulus = {
  id: 'we-01',
  type: 'persuasive',
  title: 'Should homework be optional on weekends?',
  stimulus: `Some students say weekends should be completely free for family, sport and rest. Others say a little homework helps them remember what they learned and prepares them for secondary school.

Write a persuasive piece for your school newsletter.

In your writing you should:
• clearly state your opinion
• give at least two strong reasons with examples
• consider one opposing view and respond to it
• end with a clear concluding statement

Aim for about 150–250 words. You have 25 minutes. Planning time counts in the 25 minutes.`,
  timeMinutes: 25,
  rubric: [
    {
      name: 'Ideas & persuasion',
      levels: [
        { score: 5, description: 'Clear position; well-chosen reasons and examples; addresses counter-argument thoughtfully.' },
        { score: 4, description: 'Clear position with solid reasons; some attempt at counter-argument.' },
        { score: 3, description: 'Position stated; reasons present but general or uneven.' },
        { score: 2, description: 'Opinion vague; limited reasons or mostly listing.' },
        { score: 1, description: 'Little persuasive intent or off-topic.' },
      ],
    },
    {
      name: 'Organisation',
      levels: [
        { score: 5, description: 'Logical flow: opening, body paragraphs, conclusion; smooth links.' },
        { score: 4, description: 'Clear structure with mostly ordered paragraphs.' },
        { score: 3, description: 'Basic beginning–middle–end; some jumps.' },
        { score: 2, description: 'Loose structure; hard to follow in places.' },
        { score: 1, description: 'Disorganised or incomplete.' },
      ],
    },
    {
      name: 'Vocabulary & sentence craft',
      levels: [
        { score: 5, description: 'Precise word choice; varied sentences; persuasive tone controlled.' },
        { score: 4, description: 'Mostly precise language; some sentence variety.' },
        { score: 3, description: 'Adequate vocabulary; mostly simple sentences.' },
        { score: 2, description: 'Limited vocabulary; repetitive sentences.' },
        { score: 1, description: 'Very limited expression.' },
      ],
    },
    {
      name: 'Spelling, punctuation & grammar',
      levels: [
        { score: 5, description: 'Highly accurate; errors rare and minor.' },
        { score: 4, description: 'Mostly accurate; occasional slips.' },
        { score: 3, description: 'Readable; several errors that do not block meaning.' },
        { score: 2, description: 'Frequent errors; meaning sometimes unclear.' },
        { score: 1, description: 'Errors severely hinder understanding.' },
      ],
    },
  ],
};
