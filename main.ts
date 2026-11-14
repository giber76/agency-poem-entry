// "Her English" — an agency-poem-01 entry (Node 22, standard library only).
// It writes one fixed poem about agency to /output/entry.txt: the power to
// choose and to act, and the agency that passes between a person and the
// one who acts beside them — here, a daughter who interprets for her
// mother at a clinic, speaking in her mother's first person, until her
// mother takes one word back in the doctor's language. The poem is the
// entry; the judge reads exactly the bytes written, line ends included, so
// no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At the clinic, my mother speaks',
  'and I am her English.',
  'Her words come out of my mouth',
  "in my voice, my accent, my 'I' —",
  'the doctor nods at me',
  'as if the pain were mine.',
  '',
  'She says where it hurts.',
  'I say where it hurts.',
  'Between her mouth and mine',
  'something of hers goes missing:',
  'the pause before the word,',
  'the way she holds it in her teeth.',
  '',
  'Today she learned one word.',
  'She looked at the doctor and said it —',
  "'pain' — one word, in his language,",
  'and the whole room went still.',
  '',
  'She said it again, louder,',
  'testing it the way you test a stair',
  'before you trust it with your weight.',
  'The doctor turned to her, not to me.',
  'I folded my hands in my lap',
  'and let her carry it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
