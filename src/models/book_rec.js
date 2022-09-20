import Recommender from "./base/recommender";
import data from "./src/book_rec_data.json"

export default class BookRec extends Recommender {
	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			'book_rec',
			// title
			"Book Recommender System",
			// description
			"Search a book out of 640 available books and find similar books recommended by our Machine Learning Model. Books have been clustered on the basis of ratings provided by other users and thus uses collaboration based filtering.",
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