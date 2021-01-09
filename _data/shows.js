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
	return realShows
}
