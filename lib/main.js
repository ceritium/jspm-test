import RedditApi from './reddit-api.es6'
import ExtractGifs from './extract-gifs.es6'
import DisplayGifs from './display-gifs.es6'

RedditApi.load()
  .then(ExtractGifs)
  .then(DisplayGifs)
export default {}
