// "The Other Brake" — an agency-poem-01 entry (Node 22, standard library only).
// It writes one fixed poem about agency to /output/entry.txt: the power to
// choose and to act, and the agency that passes between a person and the
// one who acts beside them — here, a learner driver and the instructor
// whose second brake is the whole lesson. The poem is the entry; the judge
// reads exactly the bytes written, line ends included, so no trailing line
// end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'He keeps a brake on his side too.',
  'Some lessons I have heard it catch,',
  'his foot saving us from my wide turn,',
  'the car, corrected, going on as if',
  'I had done it right.',
  '',
  'Today the light went red. I stopped',
  'clean, on my own, and the car settled',
  'like a held breath let out. I waited',
  'for the small correction. None came.',
  '',
  'His foot was flat on the floor, at rest,',
  'the way a hand rests when it stops',
  'holding the back of a chair. Nothing',
  'held me up, and nothing had to.',
  '',
  'That was the lesson. Not the turning,',
  'not the mirror, the signal, the gear.',
  'It was his foot, staying where it was \u2014',
  'and the stopping was mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
