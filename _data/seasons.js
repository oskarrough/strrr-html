import shows from "./shows.js";

const showsBySeason = (season) =>
	shows.filter((show) => show.season_number === season);

export default [
	showsBySeason(1),
	showsBySeason(2),
	showsBySeason(3),
	showsBySeason(4),
	showsBySeason(5),
	showsBySeason(6),
];
