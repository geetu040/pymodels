// BASE
import Base from "../base";

// INPUTS
import TextInput from "../inputs/text_input";

// OUTPUT
import CategoricalOutput from "../outputs/categorical_output";

export default class DupQues extends Base {
	constructor() {
		super();

		this.setBase(
			// name
			'dup_ques',
			// title
			"Duplicate Questions",
			// model_api
			0,
			// description
			"Ask two questions, same or different and see if the AI can figure out the duplication or not?",
		);

		this.inputs = [
			new TextInput(
				// samples
				samples,
			),
			new TextInput(
				// samples
				samples,
			)
		]

		this.output = new CategoricalOutput(
			// classes
			[['Not Duplicate', 'Duplicate']],	// binary classifier
			// model_name
			"dup_ques",
		)

	}
	predict (data, callback) {
		data = {
			ques1: data[0].text,
			ques2: data[1].text
		}
		super.predict(data, callback);
	}
}


const samples = [
	"What is the capital of Pakistan?",
	"What is the capital of India?",
	"What is the capital of Bangladesh?",
	"Is Islamabad the capital of India?",
	"Who is the Prime Minister of Pakistan?",
	"Who is the currect Prime Minister of Pakistan?",
	"Who is the Prime Minister of India?",
	"Who was the first Prime Minister of India?",
];