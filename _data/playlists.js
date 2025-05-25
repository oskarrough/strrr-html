import rawPlaylists from "./playlists-raw.json" with { type: "json" }

/* Published shows with embedded videos */
// export default rawPlaylists
	// .sort((a, b) => a.episode_number - b.episode_number)

export default rawPlaylists

// export default Object.groupBy(rawPlaylists, (playlist) => 
// 	playlist.season_number
// )
