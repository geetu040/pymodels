export default class SelectInput {
	constructor(n_rec, max_rec, min_rec, titles) {
		this.n_rec = n_rec;
		this.max_rec = max_rec;
		this.min_rec = min_rec;
		this.titles = titles;

		this.type = "select"
	}
}