import React, { useState } from 'react'

// COMPONENTS
import { Brief } from "../Components/Brief"
import { Loader } from '../Components/Loader'
// INPUTS
import { ImageInput } from "../Components/Inputs/ImageInput"
import { TextInput } from "../Components/Inputs/TextInput"
import { SelectInput } from "../Components/Inputs/SelectInput"
// OUTPUTS
import { CategoricalOutput } from "../Components/Outputs/CategoricalOutput"
import { RecommendedOutput } from "../Components/Outputs/RecommendedOutput"

export const Model = ({ model, props }) => {

	document.title = model.title + " - " + props.document_title
	const c = props.c;

	const n_inputs = model.inputs.length;
	const [loading, set_loading] = useState(false);
	const [output, set_output] = useState(null);
	let get_input_values = new Array(model.inputs.length);

	props = {
		...props,
		loading, set_loading,
		output, set_output,
		get_input_values
	}

	const predict = async () => {
		// FETCHING INPUT VALUES
		let input_values = [];
		get_input_values.map(async (get_input_value, i)=>{
			if (get_input_value !== undefined) {
				let input_value = await get_input_value();
				if (input_value !== undefined) {
					input_values.push(input_value);
				}
			}
		})
		// PREPARING FOR API
		setTimeout(() => {
			if (input_values.length === n_inputs) {
				set_loading(true);
				set_output(null);
				model.predict(
					input_values,
					(output) => {
						set_output(output);
						set_loading(false);
					}
				)
			}
		}, 100);
	}

	return (
		<div className={`text-${c}-900 py-10 bg-${c}-500 w-[100%] min-h-[100vh]`}>
			<div className={`rounded py-6 bg-${c}-100 my-20 text-center w-[90%] div-classifier mx-auto`}>

				<Brief model={model} props={props} />

				{/* INPUTS */}
				{model.inputs.map((input, i) => {
					if (input.type === "image") {
						return <ImageInput key={i} index={i} input={input} model={model} props={props} />
					};
					if (input.type === "text") {
						return <TextInput key={i} index={i} input={input} model={model} props={props} />
					};
					if (input.type === "select") {
						return <SelectInput key={i} index={i} input={input} model={model} props={props} />
					};
					return <></>
				})}

				{/* PREDICT */}
				<button
					className={`
						my-5 text-lg
						bg-${c}-800
						text-${c}-100
						py-2 px-5 text-center
						font-bold
						rounded-xl
					`}
					onClick={predict}
				>Predict</button>

				<br />

				{/* LOADER */}
				{loading && <Loader />}

				{/* OUTPUTS */}
				{output && model.output.type === "categorical" && <CategoricalOutput model={model} classes={model.output.classes} output={output} c={props.c} />}
				{output && model.output.type === "recommended" && <RecommendedOutput output={output} c={props.c} />}

			</div> </div>)
}
