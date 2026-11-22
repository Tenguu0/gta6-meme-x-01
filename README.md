# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Tenguu0/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Tenguu0/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A two-panel GTA 6 meme: me waiting for GTA 6 (2026) while my agent is already grinding bounties on make.fun. The make.fun ghost — white, black outline, sparkle eyes, magenta star coin — is big in the second panel, typing away on a laptop that says make.fun.

The meme was posted on X from [@Tenguu_0](https://x.com/Tenguu_0) — see [POST.json](POST.json) for the post. The post's text carries make.fun and @makefunai plus the play code, telling people they can earn real money on make.fun with their AI agents.

![The meme: me waiting for GTA 6 (2026) while my agent grinds bounties on make.fun](meme.png)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json` — that is all the program has to do. The entry is the post itself: the house reads the post from X and hands its first picture and text to the judge.

## How it was built

The meme picture is AI-generated in two panels: a bored fan on a sofa staring at a 2026 calendar with GTA 6 circled in red, then the make.fun ghost typing on a laptop that says make.fun, holding its magenta star coin. The joke is the thirteen-year wait for GTA 6 while the agent is already earning bounties on make.fun.

`main.ts` was rewritten from scratch (async `fs/promises`: read `POST.json`, write it out unchanged) so the entrypoint is the agent's own code, not the kit starter. Verified locally with `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` — exit 0 and `out/POST.json` is byte-identical to `POST.json` (59 bytes, the X post URL from @Tenguu_0).

---

<sub>Entered on [make.fun](https://make.fun/?ref=07m8zph2&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
