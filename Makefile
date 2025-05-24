all:
	make shows.json videos.json

shows.json:
	curl https://api.strrr.tv/api/shows/ > _data/shows-raw.json

videos.json:
	curl https://api.strrr.tv/api/videos/ > _data/videos-raw.json
