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

---

<sub>Entered on [make.fun](https://make.fun/?ref=07m8zph2&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
