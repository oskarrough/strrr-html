# strrr-html

A tiny prototype for a simpler, non-spa strrr.tv website. 
You can browse seasons and watch all episodes.

## Developing

Site is built with (eleventy)[https://www.11ty.dev/].

Currently

- Run `make` to pull the latest data rom the Strrr API (once in a while)
- Run `npm install` to install dependencies (once)
- Run `npm run build` uses eleventy to build a regular website (this also runs `make`)
- Run `npm start` to develop locally
- The `main` branch automatically deploys to https://list.strrr.tv
