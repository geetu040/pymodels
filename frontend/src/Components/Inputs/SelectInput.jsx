import React, { useState, useEffect } from 'react'

export const SelectInput = ({ index, input, props }) => {

	const c = props.c;

	const [input_text, set_input_text] = useState("");
	const [selected, set_selected] = useState("")
	const [n_rec, set_n_rec] = useState(input.n_rec);
	const titles = input.titles;
	const set_output = props.set_output;

	useEffect(() => {
		set_selected("");
		set_output(null);
	}, [input_text, set_output])
	useEffect(() => {
		input.n_rec = n_rec;
	}, [n_rec, input])
	useEffect(() => {
		set_output(null);
	}, [selected, set_output])


	props.get_input_values[index] = async () => {
		if (selected !== "") {
			return { title: selected, n: n_rec }
		}
	}


	const filtered_titles = titles.filter((item) => { return item.toLowerCase().includes(input_text) }).slice(0, 100);

	return (<div className='flex flex-col justify-center items-center'>


		{/* INPUT SEARCH BAR */}
		<div className={`border w-[95%] border-${c}-900 flex bg-${c}-300 rounded-lg my-8 py-10 space-y-10 flex-col justify-center items-center`}>
			<input className={`
					text-center text-xl bg-${c}-100 border border-${c}-900 py-2 px-3 w-[90%] rounded-md
					shadow-2xl border-double
					shadow-${c}-900
				`} type="text" value={input_text} placeholder="Search The Title" onChange={t => { set_input_text(t.target.value.toLowerCase()) }} />
			<div hidden={filtered_titles.length === 0} className={`
					text-center max-h-96 overflow-y-scroll w-[70%] space-y-5 bg-${c}-800 rounded-lg
					py-3 shadow-2xl shadow-${c}-900
				`}>
				{filtered_titles.map((item, i) => {
					return (
						<div
							key={i}
							onClick={() => { set_selected(item) }}
							className={`
								w-[80%] mx-auto rounded
								py-1 px-2
								font-${c}-900 border-${c}-100 border
								cursor-pointer
								
								${(item.toLowerCase() === selected.toLowerCase()) ? `
									bg-${c}-800 text-${c}-50
									shadow-xl border-${c}-50 text-lg
									shadow-${c}-500
								`: `bg-${c}-200`}
							`}>
							{(input_text !== "" && item.toLowerCase().includes(input_text.toLowerCase())) ?
								<>
									{item.slice(0, item.toLowerCase().indexOf(input_text.toLowerCase()))}
									<span className='font-bold'>{item.slice(item.toLowerCase().indexOf(input_text.toLowerCase()), item.toLowerCase().indexOf(input_text.toLowerCase()) + input_text.length)}</span>
									{item.slice(item.toLowerCase().indexOf(input_text.toLowerCase()) + input_text.length)}
								</>
								:
								item}
						</div>)
				})}
			</div>
			<div className='text-xl' hidden={filtered_titles.length !== 0}>Title Not Found</div>


		</div>
		{/* input_text BUTTON */}
		<div className={`max-w-[80%] bg-${c}-200 py-5 px-5 flex flex-col justify-center items-center space-y-2`}>
			<div className='space-x-0 flex jusitfy-center items-center'>
				<div className={`
						cursor-pointer
						bg-${c}-400
						border
						font-bold
						border-${c}-900
						rounded-xl
						w-8 text-lg
						text flex justify-center items-center
						text-${c}-900
					`} onClick={() => { if (n_rec > input.min_rec) { set_n_rec(n_rec - 1) } }}>-</div>
				<div className={`
						bg-${c}-900
						rounded-lg font-bold
						w-7 px-5 py-1 text-xl
						text-${c}-200 flex justify-center items-center
					`}>{n_rec}</div>
				<div className={`
						cursor-pointer
						bg-${c}-400
						border
						font-bold
						border-${c}-900
						rounded-xl
						w-8 text-lg
						text flex justify-center items-center
						text-${c}-900
					`} onClick={() => { if (n_rec < input.max_rec) { set_n_rec(n_rec + 1) } }}>+</div>
			</div>

		</div>


	</div>)
}
