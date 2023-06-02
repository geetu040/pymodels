export default class ImageInput {
	constructor (
		img_size,
		img_format,
		total_imgs,
		model_name,
	) {
		this.img_size = img_size;
		this.img_format = img_format;
		this.total_imgs = total_imgs;
		this.model_name = model_name;

		this.type = "image";
		this.img_path = `/data/inputs/image_input/${model_name}/`

		this.load_imgs();
	}
	load_imgs () {
		let random_imgs_url = []
		for (let i=1; i<=this.total_imgs; i++) {
			random_imgs_url.push(
				this.img_path + i + "." + this.img_format
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