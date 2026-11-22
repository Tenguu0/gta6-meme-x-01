// Entry point for the gta6-meme-x-01 entry.
//
// The entry itself is a post on X, not this program. All this program does is
// hand the post's address to the grader: it reads POST.json out of the bot
// directory and writes an identical copy into the output directory, where the
// gate picks it up. The meme picture and the post text are judged from X
// directly, never from anything written here.
//
// When run outside the grader, the two directories can be pointed at local
// paths, e.g.:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const botDirectory = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

async function handOverPostFile(): Promise<number> {
  const sourceFile = join(botDirectory, "POST.json");
  const targetFile = join(outputDirectory, "POST.json");

  await mkdir(outputDirectory, { recursive: true });
  const contents = await readFile(sourceFile);
  await writeFile(targetFile, contents);

  return contents.length;
}

handOverPostFile()
  .then((bytes) => {
    console.log(
      `POST.json handed over (${bytes} bytes) from ${botDirectory} to ${outputDirectory}.`,
    );
  })
  .catch((failure) => {
    const detail = failure instanceof Error ? failure.message : String(failure);
    console.error(`Could not hand over POST.json from ${botDirectory}: ${detail}`);
    process.exitCode = 1;
  });
