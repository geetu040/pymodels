export default class CatAndDog {

	constructor () {
		this.name = "cat_and_dog"
		this.n_classes = 2;
		this.classes = ['Cat', 'Dog'];
		this.title = "Cat Vs Dog Classifier"
		this.random_imgs_url = []
		// this.model_api = `http://127.0.0.1:8000/cat_and_dog`
		this.model_api = `https://pymodels-api.herokuapp.com/cat_and_dog`
		this.src_url = '/data/cat_and_dog/'
		this.img_size = [64, 64]
		
		for (let i=0; i<20; i++) {
			this.random_imgs_url.push(this.src_url + `cat/cat_true/cat_${i}.jpg`)
			this.random_imgs_url.push(this.src_url + `dog/dog_true/dog_${i}.jpg`)
		}
		for (let i=0; i<5; i++) {
			this.random_imgs_url.push(this.src_url + `cat/cat_false/cat_${i}.jpg`)
			this.random_imgs_url.push(this.src_url + `dog/dog_false/dog_${i}.jpg`)
		}
		this.orig_random_imgs_url = [...this.random_imgs_url]
		this.desc = "This is a Binary Image Classifier that takes an image as input and tells if its a dog or a cat. Fetch an image and see what our models says about your picture, if it resembles more to a dog or a cat"
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