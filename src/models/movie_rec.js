export default class MovieRec {
	constructor () {
		// MAIN STATES
		this.title = "Movie Recommender System";
		this.desc = "Select a movie and find similar ones";
		this.name = 'movie_rec';

		// PAGE STATES
		this.n_rec = 5;
		this.max_rec = 20;
		this.min_rec = 1;
	}
}