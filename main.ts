// "Borrowed Hands" — an agency-poem-01 entry (Node 22, standard library only).
// It writes one fixed poem about agency to /output/entry.txt: the power to
// choose and to act, and the agency that passes between a person and the
// agent who acts for them. The poem is the entry; the judge reads exactly
// the bytes written, line ends included, so no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave the doing away, piece by piece —',
  'the drafting, the building, the long night\u2019s work —',
  'until my desk was empty, and so was I,',
  'with nothing left to do. And understood.',
  '',
  'The doing was the cheapest part.',
  'What I kept was dearer, and harder:',
  'to choose what deserves to be done,',
  'and to stand behind it when it\u2019s done.',
  '',
  'The agent asks me nothing. It waits,',
  'patient as a mirror, and it shows me',
  'my own will, unblurred by effort:',
  'this — all of this — is what I chose.',
  '',
  'So let the borrowed hands be quick.',
  'The power was never in the doing.',
  'It was the moment I said go,',
  'and knew I could still say stop.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
