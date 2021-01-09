const shows = require('../shows.json')

function flatten(show) {
	const s = Object.assign(show, show.attributes)
	delete s.attributes
	return s
}

function filterBy(list, prop, val) {
	return list.filter(item => {
		return item[prop] === val
	})
}

module.exports = function () {
	const realShows = shows.data
		.map(flatten)
		.filter((show) => show['is-published'])
		.sort((a, b) => a['episode-number'] - b['episode-number'])
	return [
		filterBy(realShows, 'season-number', 1),
		filterBy(realShows, 'season-number', 2),
		filterBy(realShows, 'season-number', 3),
		filterBy(realShows, 'season-number', 4),
		filterBy(realShows, 'season-number', 5),
		filterBy(realShows, 'season-number', 6)
	]
}
