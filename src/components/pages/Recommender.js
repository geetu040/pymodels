import React, {useState, useEffect} from 'react'

export const Recommender = ({ props }) => {
	// MAIN STATES
	const page = window.location.href.split("/").pop()
	const opt = props.options[page];
	const c = props.c;
	// const isPortrait = props.isPortrait;
	document.title = props.document_title + " - " + opt.title

	// PAGE STATES
	const [output, set_output] = useState(null);
	// const [output, set_output] = useState([
	// 	['hello', 90.5],
	// 	['helo', 80.5],
	// 	['hefdsfsllo', 70.5],
	// 	['dhfsdfello', 50.5],
	// 	['bheldfsdlo', 40.25],
	// 	['ahelfsdflo', 33.52],
	// 	['fdsahelsdafsdlo', 12.42],
	// 	['fasdfhelfsdflo', 10.5],
	// ]);
	const [input, set_input] = useState("");
	const [selected, set_selected] = useState("")
	const [n_rec, set_n_rec] = useState(opt.n_rec);
	const titles = opt.titles;
	// const [titles, set_titles] = useState(opt.titles)
	// if (titles.length === 0) {
	// 	opt.fetchData((data)=>{
	// 		set_titles(data);
	// 	});
	// }

	useEffect(()=>{
		set_selected("");
		set_output(null);
	}, [input])
	useEffect(() => {
		opt.n_rec = n_rec;
	}, [n_rec, opt])
	useEffect(() => {
		set_output(null);
	}, [selected])
	

	const filtered_titles = titles.filter((item)=>{return item.toLowerCase().includes(input)})
	
	return (<>
		<div className={`bg-${c}-100 text-${c}-900 py-24 w-100 min-h-[90vh] flex flex-col items-center`}>

			{/* HEADER */}
			<div className={`px-10 py-5 rounded bg-${c}-200 text-center max-w-[80vw] space-y-3`}>
				<h1 className='font-semibold text-4xl'>{opt.title}</h1>
				<p className='px-6 text-xl'>{opt.desc}</p>
			</div>

			{/* INPUT SEARCH BAR */}
			<div className={`border w-[95%] sm:w-[60%] border-${c}-900 flex bg-${c}-300 rounded-lg my-8 py-10 space-y-10 flex-col justify-center items-center`}>
				<input className={`
					text-center text-xl bg-${c}-100 border border-${c}-900 py-2 px-3 w-[90%] rounded-md
					shadow-2xl border-double
					shadow-${c}-900
				`} type="text" value={input} placeholder="Search The Title" onChange={t=>{set_input(t.target.value.toLowerCase())}} />
				<div hidden={filtered_titles.length === 0} className={`
					text-center max-h-96 overflow-y-scroll w-[70%] space-y-5 bg-${c}-800 rounded-lg
					py-3 shadow-2xl shadow-${c}-900
				`}>
					{filtered_titles.map((item, i)=>{
						return (
						<div
							key={i}
							onClick={()=>{set_selected(item)}}
							className={`
								w-[80%] mx-auto rounded
								py-1 px-2
								font-${c}-900 border-${c}-100 border
								cursor-pointer
								
								${(item.toLowerCase() === selected.toLowerCase())?`
									bg-${c}-800 text-${c}-50
									shadow-xl border-${c}-50 text-lg
									shadow-${c}-500
								`:`bg-${c}-200`}
							`}>
							{(input !== "" && item.toLowerCase().includes(input.toLowerCase()))?
							<>
								{item.slice(0, item.toLowerCase().indexOf(input.toLowerCase()))}
								<span className='font-bold'>{item.slice(item.toLowerCase().indexOf(input.toLowerCase()), item.toLowerCase().indexOf(input.toLowerCase())+input.length)}</span>
								{item.slice(item.toLowerCase().indexOf(input.toLowerCase())+input.length)}
							</>
							:
							item}
						</div>)
					})}
				</div>
				<div className='text-xl' hidden={filtered_titles.length !== 0}>Title Not Found</div>


			</div>
			{/* INPUT BUTTON */}
			<div  className={`max-w-[80%] bg-${c}-200 py-5 px-5 flex flex-col justify-center items-center space-y-2`}>
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
					`} onClick={()=>{if(n_rec>opt.min_rec){set_n_rec(n_rec-1)}}}>-</div>
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
					`} onClick={()=>{if(n_rec<opt.max_rec){set_n_rec(n_rec+1)}}}>+</div>
				</div>
				<button disabled={selected===""} className={`
					bg-${c}-700 text-${c}-200
					border border-${c}-900
					px-4 py-2
					text-md text-xl
					font-semibold
					rounded-md
					cursor-pointer
					${(selected==="")?`
						bg-${c}-500
						cursor-not-allowed
					`:""}

				`}
					onClick = {()=>{
						if (selected !== "") {
							let rec = opt.recommend(selected);
							set_output(rec);
						}
					}}
				>Recommend / Find Similar Ones</button>

			</div>

			{/* OUTPUT */}
			{output && 
			<div className={`
				w-[95%] sm:w-[60%]
				bg-${c}-200 rounded-xl
				text-${c}-900
				border border-${c}-900
				text-center
				my-10 py-16 px-10
				flex flex-col justify-center items-center space-y-5
			`}>
				
				<h1 className={`text-2xl bg-${c}-300 px-10 py-3 my-3 rounded`}>Recommendations for:<br></br><b>{selected}</b></h1>
				
				<div className='w-[90vw] sm:w-[40vw] space-y-10 py-5 text-center'>
					{output.map((o, i)=>{
						return (
						<div key={i} className="w-100 space-y-2">
							<div>
								<span className='font-semibold text-2xl'> {o[0]} </span>
								<br />
								<span className='text-lg'>[ Similarity Score: <b>{o[1]}%</b> ]</span></div>
							<div className={`bg-${c}-100 flex rounded-sm px-[1px] py-[1px] items-center w-[90%] mx-auto space-x-2 border border-${c}-900`}>
								<div
								className={`h-[20px] rounded-sm bg-${c}-600`}
								style={{width: `${o[1]}%`}}
								></div>	
							</div>
						</div>)
					})}
				</div>
			</div>}
		</div>
	</>)
}
