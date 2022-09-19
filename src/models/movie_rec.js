import Recommender from "./base/recommender";
import data from "./src/data.json"

export default class MovieRec extends Recommender {
	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			'movie_rec',
			// title
			"Movie Recommender System",
			// description
			"The dataset consists of approximately 6000 movies. Similar movies have been clustered on the basis of their genres, theme, description and story line (content-based approach) and on the basis of users' ratings (collaborative-filtering). Enter title of the movie and find movies similar to it, recommended by our Hybrid Recommender System.",
		)

		// SETTING PAGE DATA
		this.setPage(
			// n_rec
			5,
			// max_rec
			20,
			// min_rec
			1,
			// data
			data,
		)
	}
}