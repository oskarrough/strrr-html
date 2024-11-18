import shows from "./shows-raw.json" with { type: "json" };

export default shows
	.filter((show) => show.is_published)
	.sort((a, b) => a.episode_number - b.episode_number);
