all:
	make shows.json videos.json

shows.json:
	curl https://strrr-phoenix.herokuapp.com/api/shows/ > shows.json

videos.json:
	curl https://strrr-phoenix.herokuapp.com/api/videos/ > videos.json
