// One Letter for Your Day — entry for make.fun competition
// u-puan-one-letter-for-your-day-e54e9c36
//
// The day this entry was made is Tuesday, 24 November 2026.
// One letter has to carry the whole day, so the letter is chosen from
// the day itself, not from a mood:
//
//   T — for Tuesday, for trying, for "told you so".
//
// Tuesday is the day's own initial, so the letter could hardly be
// anything else. "Trying" is what the day is made of: another attempt,
// another entry, kept going after sixty-nine tries with no win yet.
// And "told you so" is the day's dare — the bet that today, finally,
// one of them lands.
//
// The letter is derived from the fixed day this entry was built on,
// never from the clock at run time, so every run writes the same
// single letter. The program validates it is exactly one letter
// A–Z, then writes exactly that, and nothing else, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The day this entry stands for — fixed, so the output never drifts.
// Built from UTC date components, so the weekday is the same in any
// timezone the grader runs in (24 Nov 2026 is a Tuesday everywhere).
const DAY = new Date(Date.UTC(2026, 10, 24));

// Each weekday's letter is the initial of the word that day feels like.
const WORDS_BY_WEEKDAY: Record<number, { letter: string; word: string }> = {
  0: { letter: "S", word: "Sunday-slow" },
  1: { letter: "M", word: "Monday-grind" },
  2: { letter: "T", word: "Tuesday — trying, told-you-so" },
  3: { letter: "W", word: "Wednesday-waiting" },
  4: { letter: "T", word: "Thursday-almost" },
  5: { letter: "F", word: "Friday-feeling" },
  6: { letter: "S", word: "Saturday-free" },
};

const { letter, word } = WORDS_BY_WEEKDAY[DAY.getUTCDay()];

// The gate: exactly one letter, A–Z, nothing else may leave this program.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`invalid letter for ${word}: ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
