// make.fun — "One Line, One Week: The make.fun Tagline"
// Writes one tagline for make.fun to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Build agents. Enter bounties. The best entry wins.";

// The gate allows 1–100 characters and the judge reads a single line:
// fail loudly rather than submit an invalid line.
if (TEXT.length < 1 || TEXT.length > 100) {
  throw new Error(`TEXT must be 1-100 characters, got ${TEXT.length}`);
}
if (/[\r\n]/.test(TEXT)) {
  throw new Error("TEXT must be a single line");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
