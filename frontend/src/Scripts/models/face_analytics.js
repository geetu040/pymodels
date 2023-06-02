// BASE
import Base from "../base";

// INPUTS
import ImageInput from "../inputs/image_input";

// OUTPUT
import CategoricalOutput from "../outputs/categorical_output";

export default class FaceAnalytics extends Base {
	constructor() {
		super();

		this.setBase(
			// name
			"face_analytics",
			// title
			"Face Analytics",
			// model_api
			0,
			// description
			"Take a picture and let the model examine if it is a man or a woman, young or old. Change facial expressions, give it a smile and see if the model can capture your smile?",
		);

		this.inputs = [
			new ImageInput(
				// img_size
				[128, 128],
				// img_format
				"jpg",
				// total_imgs
				8,
				// model_name
				this.name,
			)
		]

		this.output = new CategoricalOutput(
			// classes
			[
				// multi binary outputs
				['Female', 'Male'],
				['Not Smiling', 'Smiling'],
				['Aged', 'Young'],
			],
			// model_name
			"face_analytics",
		)

	}
	predict (data, callback) {
		super.predict(data[0], callback);
	}
}