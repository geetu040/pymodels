// BASE
import Base from "../base";

// INPUTS
import ImageInput from "../inputs/image_input";

// OUTPUT
import CategoricalOutput from "../outputs/categorical_output";

export default class CatAndDog extends Base {
	constructor() {
		super();

		this.setBase(
			// name
			"cat_and_dog",
			// title
			"Cat Vs Dog Classifier",
			// model_api
			0,
			// description
			"This is a Binary Image Classifier that takes an image as input and tells if its a dog or a cat. Fetch an image and see what our models says about your picture, if it resembles more to a dog or a cat",
		)

		this.inputs = [
			new ImageInput(
				// img_size
				[64, 64],
				// img_format
				"jpg",
				// total_imgs
				50,
				// model_name
				this.name,
			)
		]

		this.output = new CategoricalOutput(
			// classes
			[['Cat', 'Dog']],
			// model_name
			"cat_and_dog",
		)

	}
	predict (data, callback) {
		super.predict(data[0], callback);
	}
}