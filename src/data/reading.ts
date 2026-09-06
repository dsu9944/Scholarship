import type { McqQuestion, Passage } from './types';

export const readingPassages: Passage[] = [
  {
    id: 'p1',
    title: 'The Lighthouse Keeper’s Cat',
    type: 'fiction',
    text: `Every evening, as the sun slid behind the cliffs, Mira climbed the narrow spiral stairs of the lighthouse. Her orange cat, Pip, always followed — not because he liked stairs, but because the lantern room smelled faintly of warm oil and fish treats Mira kept in a tin.

One stormy night the wind howled so loudly that the glass panes rattled. Mira trimmed the wick and checked the great lens. Below, waves smashed against the rocks like white fists. Pip pressed against her ankle and mewed.

“I know,” Mira whispered. “It sounds angry. But the light is steady. Ships will see us.”

Near midnight, a small fishing boat’s lantern bobbed wildly in the dark. Mira rang the hand bell on the gallery and waved a spare lamp. The boat turned — slowly, carefully — away from the reef. Pip’s fur was damp with spray, yet he sat like a tiny sentry until dawn.

When the sky finally greyed into morning, Mira scratched Pip’s ears. “Brave work, partner,” she said. The cat blinked, as if to say that bravery was simply staying where you belonged.`,
  },
  {
    id: 'p2',
    title: 'Australia’s Magpies',
    type: 'non-fiction',
    text: `The Australian magpie is one of the country’s best-known birds. With black-and-white plumage and a clear, flute-like song, magpies live in most parts of Australia, from city parks to open farmland.

Magpies are highly intelligent. They can recognise individual human faces and remember which people have been kind — or unkind — to them. In spring, some magpies swoop cyclists and walkers who come too close to a nest. Scientists believe this behaviour protects chicks, not because the birds are simply “mean.”

These birds eat insects, worms and small animals they find by walking across lawns and listening carefully. Their hearing is so sharp they can detect prey under the soil. Magpies also live in family groups. Young birds often stay to help raise the next year’s chicks — a teamwork strategy that improves survival.

If you live near magpies, the safest spring tip is simple: avoid nesting trees where possible, or wear a hat and walk confidently past. Most swooping lasts only a few weeks while eggs and chicks need protection.`,
  },
  {
    id: 'p3',
    title: 'The Seed That Waited',
    type: 'fiction',
    text: `In a cracked pot on a sunny windowsill lived a seed that refused to sprout. The other seeds in the garden beds had raced upward weeks ago, showing off green shoots and tiny leaves. The windowsill seed stayed stubbornly quiet.

“Perhaps it’s broken,” said Leo, peering in.

“Or resting,” said his sister Anika. She watered it gently each morning and told it about the day — school news, the neighbour’s dog, the smell of rain.

One Tuesday, after a week of grey skies, sunlight finally poured through the glass. Anika almost missed it: a pale curl, thin as a thread, had pushed through the soil. Leo cheered so loudly the cat fled the room.

“It was waiting for the right light,” Anika said. She wrote the date on a sticky note and stuck it to the pot. The seed, now a seedling, leaned toward the window as if nodding.`,
  },
];

export const readingQuestions: McqQuestion[] = [
  // Passage 1 — fiction (1–8)
  {
    id: 'rc-01',
    number: 1,
    passageId: 'p1',
    prompt: 'Why does Pip follow Mira up the stairs each evening?',
    options: [
      'He enjoys climbing spiral stairs',
      'The lantern room smells of oil and fish treats',
      'He is afraid of the cliffs',
      'Mira carries him',
    ],
    correctIndex: 1,
    explanation: 'The text says Pip follows because the lantern room smelled of warm oil and fish treats.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-02',
    number: 2,
    passageId: 'p1',
    prompt: 'What does the phrase “waves smashed against the rocks like white fists” suggest?',
    options: [
      'The sea was calm and gentle',
      'The waves were powerful and violent',
      'Someone was punching the rocks',
      'The rocks were made of ice',
    ],
    correctIndex: 1,
    explanation: 'The simile compares waves to fists, emphasising force and violence.',
    skill: 'Figurative language',
  },
  {
    id: 'rc-03',
    number: 3,
    passageId: 'p1',
    prompt: 'What did Mira do to help the fishing boat?',
    options: [
      'She swam out to it',
      'She turned off the lighthouse light',
      'She rang a bell and waved a spare lamp',
      'She called the police',
    ],
    correctIndex: 2,
    explanation: 'Mira rang the hand bell and waved a spare lamp so the boat could turn away from the reef.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-04',
    number: 4,
    passageId: 'p1',
    prompt: 'How does Pip behave during the storm?',
    options: [
      'He hides downstairs',
      'He runs away',
      'He sits with Mira like a sentry until dawn',
      'He sleeps through it',
    ],
    correctIndex: 2,
    explanation: 'Pip sat like a tiny sentry until dawn, despite damp fur.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-05',
    number: 5,
    passageId: 'p1',
    prompt: 'What is the most likely reason Mira whispers “It sounds angry”?',
    options: [
      'She is angry at Pip',
      'She is describing how fierce the storm sounds',
      'A ship captain is shouting',
      'The lighthouse motor is broken',
    ],
    correctIndex: 1,
    explanation: 'She is reassuring Pip about the storm’s fierce, “angry” sound.',
    skill: 'Inference',
  },
  {
    id: 'rc-06',
    number: 6,
    passageId: 'p1',
    prompt: 'The word “gallery” in this passage most likely means:',
    options: [
      'An art museum',
      'An outdoor walkway around the lantern room',
      'A gift shop',
      'A type of boat',
    ],
    correctIndex: 1,
    explanation: 'In a lighthouse, the gallery is the balcony/walkway around the light.',
    skill: 'Vocabulary in context',
  },
  {
    id: 'rc-07',
    number: 7,
    passageId: 'p1',
    prompt: 'What theme is suggested by the ending?',
    options: [
      'Cats dislike water',
      'Bravery can mean staying at your post',
      'Storms always destroy boats',
      'Lighthouses are outdated',
    ],
    correctIndex: 1,
    explanation: 'Pip’s “bravery was simply staying where you belonged” points to duty and steadfastness.',
    skill: 'Theme',
  },
  {
    id: 'rc-08',
    number: 8,
    passageId: 'p1',
    prompt: 'Which word best describes Mira?',
    options: ['Careless', 'Responsible', 'Fearful', 'Lazy'],
    correctIndex: 1,
    explanation: 'She carefully tends the light and helps guide the boat — responsible behaviour.',
    skill: 'Character',
  },

  // Passage 2 — non-fiction (9–16)
  {
    id: 'rc-09',
    number: 9,
    passageId: 'p2',
    prompt: 'According to the passage, magpies can:',
    options: [
      'Speak human languages',
      'Recognise individual human faces',
      'Only live in deserts',
      'Migrate to Antarctica each year',
    ],
    correctIndex: 1,
    explanation: 'The text states they can recognise individual human faces.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-10',
    number: 10,
    passageId: 'p2',
    prompt: 'Why do some magpies swoop in spring?',
    options: [
      'They dislike the colour of bikes',
      'To protect chicks near a nest',
      'Because they are always mean',
      'To find warmer weather',
    ],
    correctIndex: 1,
    explanation: 'Scientists believe swooping protects chicks, not mere meanness.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-11',
    number: 11,
    passageId: 'p2',
    prompt: 'How do magpies often find food under the soil?',
    options: [
      'By using a strong sense of smell only',
      'By digging randomly all day',
      'By listening carefully as they walk',
      'By asking other birds',
    ],
    correctIndex: 2,
    explanation: 'They walk across lawns and listen carefully; hearing detects prey under soil.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-12',
    number: 12,
    passageId: 'p2',
    prompt: 'What does the passage say about young magpies?',
    options: [
      'They leave forever as soon as they can fly',
      'They often stay to help raise the next chicks',
      'They never learn to sing',
      'They only eat fruit',
    ],
    correctIndex: 1,
    explanation: 'Young birds often stay to help raise the next year’s chicks.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-13',
    number: 13,
    passageId: 'p2',
    prompt: 'The phrase “flute-like song” suggests the magpie’s call is:',
    options: ['Harsh and grating', 'Silent', 'Clear and musical', 'Identical to a dog bark'],
    correctIndex: 2,
    explanation: 'Flute-like implies a clear, musical quality.',
    skill: 'Vocabulary / imagery',
  },
  {
    id: 'rc-14',
    number: 14,
    passageId: 'p2',
    prompt: 'Which tip does the author give for spring?',
    options: [
      'Feed magpies every day',
      'Avoid nesting trees or wear a hat and walk past confidently',
      'Remove all trees from parks',
      'Stay indoors all spring',
    ],
    correctIndex: 1,
    explanation: 'Avoid nesting trees where possible, or wear a hat and walk confidently past.',
    skill: 'Main idea / detail',
  },
  {
    id: 'rc-15',
    number: 15,
    passageId: 'p2',
    prompt: 'This passage is best described as:',
    options: [
      'A fairy tale',
      'An informative non-fiction article',
      'A poem',
      'A set of instructions only',
    ],
    correctIndex: 1,
    explanation: 'It presents factual information about magpies in an article style.',
    skill: 'Text type',
  },
  {
    id: 'rc-16',
    number: 16,
    passageId: 'p2',
    prompt: 'What can you infer about magpie intelligence?',
    options: [
      'They are less clever than most birds',
      'Memory and social behaviour show high intelligence',
      'They cannot learn from experience',
      'They only survive in cages',
    ],
    correctIndex: 1,
    explanation: 'Face recognition, memory of kind/unkind people, and helping raise chicks support high intelligence.',
    skill: 'Inference',
  },

  // Passage 3 — fiction (17–22)
  {
    id: 'rc-17',
    number: 17,
    passageId: 'p3',
    prompt: 'Where is the stubborn seed planted?',
    options: [
      'In a garden bed outside',
      'In a cracked pot on a sunny windowsill',
      'In the neighbour’s yard',
      'Under a tree',
    ],
    correctIndex: 1,
    explanation: 'The opening places it in a cracked pot on a sunny windowsill.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-18',
    number: 18,
    passageId: 'p3',
    prompt: 'How does Anika treat the seed?',
    options: [
      'She throws it away',
      'She ignores it completely',
      'She waters it and talks to it kindly',
      'She moves it to a dark cupboard',
    ],
    correctIndex: 2,
    explanation: 'She watered it gently and told it about her day.',
    skill: 'Character / detail',
  },
  {
    id: 'rc-19',
    number: 19,
    passageId: 'p3',
    prompt: 'What finally appears after the grey week?',
    options: [
      'A flower in full bloom',
      'A pale curl of a seedling',
      'A second pot',
      'A worm',
    ],
    correctIndex: 1,
    explanation: 'A pale curl, thin as a thread, pushed through the soil.',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-20',
    number: 20,
    passageId: 'p3',
    prompt: 'Anika’s explanation for the delay is that the seed was:',
    options: [
      'Broken beyond repair',
      'Waiting for the right light',
      'Afraid of the cat',
      'Too wet to grow',
    ],
    correctIndex: 1,
    explanation: 'She says, “It was waiting for the right light.”',
    skill: 'Literal comprehension',
  },
  {
    id: 'rc-21',
    number: 21,
    passageId: 'p3',
    prompt: 'Why does Leo cheer?',
    options: [
      'The cat returned',
      'School was cancelled',
      'He sees the seed has sprouted',
      'He finished his homework',
    ],
    correctIndex: 2,
    explanation: 'Leo cheers when he notices the seedling; the cat flees from the noise.',
    skill: 'Cause and effect',
  },
  {
    id: 'rc-22',
    number: 22,
    passageId: 'p3',
    prompt: 'The sticky note on the pot most likely helps Anika:',
    options: [
      'Decorate the room',
      'Remember when the seed sprouted',
      'Scare away the cat',
      'Water less often',
    ],
    correctIndex: 1,
    explanation: 'She wrote the date — a record of when it sprouted.',
    skill: 'Inference',
  },
];
