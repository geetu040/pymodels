export default class CategoricalOutput {
	constructor (classes, model_name) {
		this.classes = classes;

		this.type = "categorical";
		this.model_name = model_name;
		this.icon_path = `/data/outputs/categorical_output/${model_name}/`
	}
	getIcon (class_) {
		return this.icon_path + class_ + ".png";
	}
}