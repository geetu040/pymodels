import Base from "./base"

export default class ImgClassifier extends Base {
	setPage (n_classes, classes, model_api, img_size, img_format, total_imgs) {

		this.n_classes = n_classes;
		this.classes = classes;
		this.model_api = model_api;
		this.img_size = img_size;
		this.img_format = img_format;
		this.total_imgs = total_imgs;

		this.type = "img_classifier";

		this.load_imgs();
	}
	load_imgs () {
		let random_imgs_url = []
		for (let i=1; i<=this.total_imgs; i++) {
			random_imgs_url.push(
				// /data/img_classifier_imgs/cat_and_dog/1.jpg
				"/" + this.data_folder + "/" +
				'img_classifier_imgs/' + this.name + "/" +
				i + "." +
				this.img_format
			)
		}
		this.random_imgs_url = random_imgs_url;
		this.orig_random_imgs_url = [...this.random_imgs_url]
	}
	generate_random_image() {
		let i = Math.floor(Math.random()*this.random_imgs_url.length)
		let url = this.random_imgs_url[i]
		
		this.random_imgs_url = this.random_imgs_url
		.slice(0, i)
		.concat(this.random_imgs_url.slice(i+1))

		if (this.random_imgs_url.length === 0) {
			this.random_imgs_url = [...this.orig_random_imgs_url]
		}
		return url;
	}
}