# strrr.tv

~~A tiny prototype~~ now the new (2025) simpler version of the https://strrr.tv we made back in 2014.

You can browse seasons and watch all episodes.

## developing

Currently

- Run `npm install` to install dependencies (once)
- Run `npm start` to develop locally
- Run `npm run build` to compile the site into a regular website 

The `main` branch automatically deploys to https://list.strrr.tv via Cloudflare workers.

## how is the site made?

> We are currently using YouTube playlists directly instead of our old backend so we actually don't really use the videos.

Strrr is made of shows (grouped into seasons) and videos. They are defined in `./types.js`.

Running `make` downloads everything from api.strrr.tv and stores it in `./data/{shows,videos}-raw.json`.

Then, `./data/shows.js` prepares and exports shows, sorted by season and with their videos embedded as well.

Using (eleventy)[https://www.11ty.dev/] we build a static website with the data:

- `./index.html` displays all seasons
- `./show-pages.liquid` is the template for each show. The page is configured to generate an .html file per show. The `permalink` frontmatter is what decides the URLs.

The `<strrr-player`> web component is responsible for playing the videos and prev/next.

## history

Strrr was made in 2014 I believe. We made an Elixir Phoenix API and a ember.js SPA. The API still runs, didn't crash once in 10 years. But unfortunately today the ember app has become too old to upgrade, and does no longer run. This is why this simpler version now exist.

