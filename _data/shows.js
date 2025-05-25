import shows from "./shows-raw.json" with { type: "json" }
import videos from "./videos-raw.json" with { type: "json" }

/* Published shows with embedded videos */
export default shows.data
	.filter((show) => show.is_published)
	.sort((a, b) => a.episode_number - b.episode_number)
	.map((show) => {
		return {
			...show,
			videos: videos.data
				.filter(video => video.show_id === show.id)
				.sort((a, b) => a.order - b.order)
		}
	})
