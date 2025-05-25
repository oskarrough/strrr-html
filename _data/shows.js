import shows from "./shows-raw.json" with { type: "json" }
import playlists from "./playlists-raw.json" with { type: "json" }
// import videos from "./videos-raw.json" with { type: "json" }

/* Published shows with embedded playlist + videos */
export default shows.data
	.filter((show) => show.is_published)
	.sort((a, b) => a.episode_number - b.episode_number)
	.map((show) => {
		const playlist = playlists.find(list => 
			list.season_number === show.season_number
			&& list.episode_number === show.episode_number)

			if (!playlist) {
				console.warn(`Playlist not found for show ${show.title}`)
			}

		return {
			...show,
			playlist_id: playlist?.playlist_id,
			video_id: playlist?.video_id,
			// playlist,
			// videos: videos.data
			// 	.filter(video => video.show_id === show.id)
			// 	.sort((a, b) => a.order - b.order)
		}
	})
