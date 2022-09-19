import ImgClassifier from "./base/img_classifier";

export default class CatAndDog extends ImgClassifier {

	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			"cat_and_dog",
			// title
			"Cat Vs Dog Classifier",
			// description
			"This is a Binary Image Classifier that takes an image as input and tells if its a dog or a cat. Fetch an image and see what our models says about your picture, if it resembles more to a dog or a cat",
		);

		// SETTING PAGE DATA
		this.setPage(
			// n_classes
			2,
			// classes
			['Cat', 'Dog'],
			// model_api
			"https://pymodels-api.herokuapp.com/cat_and_dog",
			// img_size
			[64, 64],
			// img_format
			"jpg",
			// total_imgs
			50,
		)
	}
}