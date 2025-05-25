import shows from "./shows-raw.json" with { type: "json" }
import videos from "./videos-raw.json" with { type: "json" }
import playlists from "./playlists-raw.json" with { type: "json" }

// console.log(playlists)

/* Published shows with embedded videos */
export default shows.data
	.filter((show) => show.is_published)
	.sort((a, b) => a.episode_number - b.episode_number)
	.map((show) => {
		const playlist = playlists.find(list => 
			list.season_number === show.season_number
			&& list.episode_number === show.episode_number)
		return {
			...show,
			playlist,
			// playlist_id: playlists[a.season_number].find(episode => episode.episode_number === show.episode_number).playlist_id,
			videos: videos.data
				.filter(video => video.show_id === show.id)
				.sort((a, b) => a.order - b.order)
		}
	})
