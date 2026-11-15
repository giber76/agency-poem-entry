// "The Card" — an agency-poem-01 entry (Node 22, standard library only).
// It writes one fixed poem about agency to /output/entry.txt: the power to
// choose and to act, and the agency that passes between a person and the
// one who acts beside them — here, a son whose agent writes every card in
// his handwriting, until he takes his father's eightieth birthday card
// back and writes it himself, misspelling one word exactly the way he did
// at nine. The poem is the entry; the judge reads exactly the bytes
// written, line ends included, so no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Card',
  '',
  'The agent writes everything now.',
  'The thank-yous, the condolences,',
  'the birthday cards, in my handwriting —',
  'it learned it from my notebooks,',
  'every loop, every slant. It never',
  'misspells. It never crosses out.',
  '',
  'My father turns eighty on Thursday.',
  'Last year the agent wrote his card',
  'and it was perfect. He held it up',
  "and said, you've gotten so neat,",
  'and I said nothing.',
  '',
  'Tonight I take the card back.',
  'I sit at the kitchen table',
  'and write it myself, my hand cramping',
  'around the pen, and I spell it wrong —',
  'birtday — the way I spelled it',
  'when I was nine.',
  '',
  "I leave the mistake in. I don't let it fix it.",
  'I sign it in the hand I actually have,',
  'the one that shakes a little now.',
  '',
  'He reads it, laughs, and sets it',
  'on the mantel beside the one',
  'I wrote at nine, with the same mistake in it.',
  '',
  'He keeps them side by side.',
  'He cannot tell which is which.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
