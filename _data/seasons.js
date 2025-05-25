import shows from "./shows.js";

const showsBySeason = (season) =>
	shows.filter((show) => show.season_number === season);

export default [
	showsBySeason(6),
	showsBySeason(5),
	showsBySeason(4),
	showsBySeason(3),
	showsBySeason(2),
	showsBySeason(1),
];
