import React, {useState, useEffect} from 'react'

export const Recommender = ({ props }) => {
	// MAIN STATES
	const page = window.location.href.split("/").pop()
	const opt = props.options[page];
	const c = props.c;
	const isPortrait = props.isPortrait;
	document.title = props.document_title + " - " + opt.title

	// PAGE STATES
	// const output = useState(null);
	const [output, set_output] = useState([
		["movie_1", 0.89],
		["movie_2", 0.79],
		["movie_3", 0.69],
		["movie_4", 0.5],
		["movie_5", 0.4],
	]);

	const [n_rec, set_n_rec] = useState(opt.n_rec);
	useEffect(() => {
		opt.n_rec = n_rec;
	}, [n_rec])
	

	return (<>
		<div className={`bg-red-100 w-100 min-h-[90vh] flex flex-col items-center`}>
			<div className='text-center max-w-[80vw]'>
				<h1>{opt.title}</h1>
				<p>{opt.desc}</p>
			</div>
			<div>this is div 2</div>
			<div className='flex'>
				<div>Recommend: Find Similar Ones</div>
				<div className='flex'>
					<div className='cursor-pointer' onClick={()=>{if(n_rec>opt.min_rec){set_n_rec(n_rec-1)}}}>-</div>
					<div>{n_rec}</div>
					<div className='cursor-pointer' onClick={()=>{if(n_rec<opt.max_rec){set_n_rec(n_rec+1)}}}>+</div>
				</div>
			</div>
			<div className='w-[90vw] sm:w-[40vw] text-center'>
				{output.map((o)=>{
					return (
					<div key={o[0]} className="w-100">
						<div>{o[0]}</div>
						<div className='flex items-center w-100 space-x-2'>
							<div
							className={`h-[20px] bg-red-600`}
							style={{width: `${100*o[1]}%`}}
							></div>	
							<div>{o[1]*100}%</div>
						</div>	
					</div>)
				})}
			</div>
		</div>
	</>)
}
