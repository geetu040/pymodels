import Base from "./base"

export default class Recommender extends Base {
	setPage (n_rec, max_rec, min_rec, data) {
		// total number of recommendations you want
		this.n_rec = n_rec;
		// maximum number of items that can be recommended
		this.max_rec = max_rec;
		// minimum number of items that can be recommended
		this.min_rec = min_rec;
		// list of all the titles
		this.titles = data.titles;
		// 3-D Array
		// y-axis: array for each title 
		// x-axis: recommened item, priority by index, most similar comes on first index
		// z-axis: contains index of item in titles and its similarity score
		this.recs = data.recs;
		// information related to the title, e.g author, publish date
		this.infos = data.infos;
		// image for certain title
		this.imgs = data.imgs;

		this.type = "recommender";

	}
	fetchData (callback) {

		fetch(`/${this.data_folder}/recommender_data/${this.name}/data.json`)
		.then((response) => response.json())
		.then((data) => {
			this.titles = data.titles;
			this.recs = data.recs;
			// set_titles(this.titles)
			callback(data.titles);
		})

	}
	recommend (title) {

		let i = this.titles.indexOf(title)
		let rec = this.recs[i].slice(0, this.n_rec);
		
		let rec_copy = []

		let imgs_copy;
		let infos_copy;
		if (this.imgs) {
			imgs_copy = [];
		} else {
			imgs_copy = null;
		}
		if (this.infos) {
			infos_copy = [];
		} else {
			infos_copy = null;
		}

		for (let i=0; i<this.n_rec; i++) {
			rec_copy.push([...rec[i]])
			if (this.imgs)
				imgs_copy.push(this.imgs[rec[i][0]]);
			if (this.infos)
				infos_copy.push({...this.infos[rec[i][0]]});
		}

		return {
			recs: rec_copy.map((o)=>{
				o[0] = this.titles[o[0]]
				return o;
			}),
			infos: infos_copy,
			imgs: imgs_copy
		}
	}
}