import React, {useState, useEffect} from 'react'

export const ImageInput = ({ index, input, props }) => {

	const c = props.c;

	const [mode, set_mode] = useState('browse'); //url | browse | random
	const [selected_image, set_selected_image] = useState(null);
	let set_output = props.set_output;

	useEffect(() => {
		set_output(null);
	}, [mode, selected_image, set_output])

	const reduce_img = (full_img_base64) => {
		let w = input.img_size[0]
		let h = input.img_size[1]

		const img = new Image(w, h);
		img.src = full_img_base64;

		var canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d');
		canvas.width = w;
		canvas.height = h;
		ctx.drawImage(img, 0, 0, w, h);
		let base64 = canvas.toDataURL();
		base64 = base64.replace('data:', '').replace(/^.+,/, '')
		return base64

	}

	props.get_input_values[index] = async () => {
		let data_to_send = {
			resized_img_base64: null,
			img_url: null,
		}
		if (selected_image.slice(0, 4) !== "data" && mode === "url")
			data_to_send.img_url = selected_image
		else
			data_to_send.resized_img_base64 = reduce_img(selected_image);

		return data_to_send;
	}


	return (

	<div className=''>

		<div className='space-x-2 mt-10 mx-auto flex w-[85%] justify-between align-center'>
			<button className={`${(mode === "url") ? "" : "opacity-60"} border-${c}-900 border-2 border-b-0 bg-${c}-500 text-${c}-100 font-semibold text-lg basis-1/3 py-2 px-2 border rounded-t-xl`} onClick={() => { set_mode('url'); set_selected_image(null) }}>URL</button>
			<button className={`${(mode === "browse") ? "" : "opacity-60"} border-${c}-900 border-2 border-b-0 bg-${c}-500 text-${c}-100 font-semibold text-lg basis-1/3 py-2 px-2 border rounded-t-xl`} onClick={() => { set_mode('browse'); set_selected_image(null) }}>Upload</button>
			<button className={`${(mode === "random") ? "" : "opacity-60"} border-${c}-900 border-2 border-b-0 bg-${c}-500 text-${c}-100 font-semibold text-lg basis-1/3 py-2 px-2 border rounded-t-xl`} onClick={() => { set_mode('random'); set_selected_image(null) }}>Random</button>
		</div>

		<div className={`rounded-xl flex flex-col py-10 space-y-7 mx-auto bg-${c}-200 border-2 border-${c}-900 w-[95%]`}>
			{mode === 'url' && <>
				<input
					id='gg'
					className={`img-class-menu-btn shadow-${c}-900/50 bg-${c}-100 border-${c}-900 text-${c}-900`} type="text"
					placeholder='Enter the URL'
					onChange={(evt) => {
						set_selected_image(evt.target.value)
					}}
				/>
			</>}
			{mode === 'browse' && <>
				<label
					htmlFor="file-input"
					className={`img-class-menu-btn shadow-${c}-900/50 bg-${c}-100 border-${c}-900 text-${c}-900`}
				>Browse</label>
				<input
					className='hidden'
					id='file-input'
					type="file"
					accept="image/*"
					onChange={event => {
						let file = event.target.files[0];
						let fr = new FileReader()
						fr.readAsDataURL(file);
						fr.onload = () => {
							set_selected_image(fr.result)
						}
					}}
				/>
			</>}
			{mode === 'random' && <>
				<button
					className={`img-class-menu-btn shadow-${c}-900/50 bg-${c}-100 border-${c}-900 text-${c}-900`}
					onClick={() => set_selected_image(input.generate_random_image())}
				> Generate A Random Image </button>
			</>}
			{selected_image && <img className='
					img-class-img
					block
					mx-auto
					rounded-xl
				'src={selected_image} alt="Could Not Find" />}
			{(selected_image === null) && <div className={`
					border border-1 rounded-xl border-dashed
					px-6 py-6 mx-auto
					text-lg
					inline-block
					border-${c}-900
					text-${c}-900
				`}>No Image Selected</div>}
		</div>

	</div>)
}
