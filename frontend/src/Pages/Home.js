import React from 'react'
import { Link } from 'react-router-dom';

export const Home = ({ props }) => {
	const c = props.c;
	const models = Object.values(props.options)

	document.title = `${props.document_title} - Home`

	return (<div className={`
			min-h-[100vh] bg-${c}-100 py-16 w-100 text-center text-${c}-900 space-y-16 pb-[10%]
		`}>
		<div className='space-x-2 flex w-[100%] justify-center items-center'>
			<img className='w-10' src="/favicon.ico" alt='Icon' /> 
			<h1 className='font-semibold text-4xl sm:text-6xl'> {props.document_title}</h1>
		</div>
		
		{models.map((opt, i)=>{
			return (
				<div className={`
					rounded w-[80%]
					bg-${c}-200
					shadow-xl
					shadow-${c}-900/50
					space-y-4
					py-8 px-5
					${(i%2===0)?"ml-[4%]":"ml-[16%]"}
				`} key={opt.title}>
				<h1 className='text-3xl font-semibold'>{opt.title}</h1>
				<p className='text-xl'>{opt.desc}</p>
				<div className='
					flex flex-col sm:flex-row sm:space-y-0 space-y-3
					w-[80%] justify-around items-center mx-auto py-3
				'>
					<button className={`shadow-md shadow-${c}-900/50 text-lg font-semibold px-5 py-1 text-${c}-200 border border-${c}-900 rounded bg-${c}-500`}>
						<Link to={`/${opt.name}`}>Play the Model</Link></button>
					<button className={`shadow-md shadow-${c}-900/50 text-lg font-semibold px-5 py-1 text-${c}-200 border border-${c}-900 rounded bg-${c}-500`}>
						<a href={opt.getCodeLink()} target="notebook">See The Code</a></button>
				</div>
			</div>)
		})}

		{/* FOR TAILWIND CSS */}
		<div hidden className={`
		bg-blue-900 text-blue-900 bg-blue-100 shadow-blue-900 border-blue-900 bg-blue-200 bg-blue-400 shadow-blue-600/50 shadow-blue-900/50 text-blue-200 bg-blue-500 text-blue-100 bg-blue-300 bg-blue-800 font-blue-900 border-blue-100 text-blue-50 border-blue-50 shadow-blue-500 bg-blue-700 bg-blue-600 border-blue-600 hover:bg-blue-500 text-blue- placeholder:text-blue-900 bg-red-900 text-red-900 bg-red-100 shadow-red-900 border-red-900 bg-red-200 bg-red-400 shadow-red-600/50 shadow-red-900/50 text-red-200 bg-red-500 text-red-100 bg-red-300 bg-red-800 font-red-900 border-red-100 text-red-50 border-red-50 shadow-red-500 bg-red-700 bg-red-600 border-red-600 hover:bg-red-500 text-red- placeholder:text-red-900 bg-yellow-900 text-yellow-900 bg-yellow-100 shadow-yellow-900 border-yellow-900 bg-yellow-200 bg-yellow-400 shadow-yellow-600/50 shadow-yellow-900/50 text-yellow-200 bg-yellow-500 text-yellow-100 bg-yellow-300 bg-yellow-800 font-yellow-900 border-yellow-100 text-yellow-50 border-yellow-50 shadow-yellow-500 bg-yellow-700 bg-yellow-600 border-yellow-600 hover:bg-yellow-500 text-yellow- placeholder:text-yellow-900 bg-purple-900 text-purple-900 bg-purple-100 shadow-purple-900 border-purple-900 bg-purple-200 bg-purple-400 shadow-purple-600/50 shadow-purple-900/50 text-purple-200 bg-purple-500 text-purple-100 bg-purple-300 bg-purple-800 font-purple-900 border-purple-100 text-purple-50 border-purple-50 shadow-purple-500 bg-purple-700 bg-purple-600 border-purple-600 hover:bg-purple-500 text-purple- placeholder:text-purple-900 bg-green-900 text-green-900 bg-green-100 shadow-green-900 border-green-900 bg-green-200 bg-green-400 shadow-green-600/50 shadow-green-900/50 text-green-200 bg-green-500 text-green-100 bg-green-300 bg-green-800 font-green-900 border-green-100 text-green-50 border-green-50 shadow-green-500 bg-green-700 bg-green-600 border-green-600 hover:bg-green-500 text-green- placeholder:text-green-900 bg-slate-900 text-slate-900 bg-slate-100 shadow-slate-900 border-slate-900 bg-slate-200 bg-slate-400 shadow-slate-600/50 shadow-slate-900/50 text-slate-200 bg-slate-500 text-slate-100 bg-slate-300 bg-slate-800 font-slate-900 border-slate-100 text-slate-50 border-slate-50 shadow-slate-500 bg-slate-700 bg-slate-600 border-slate-600 hover:bg-slate-500 text-slate- placeholder:text-slate-900 bg-teal-900 text-teal-900 bg-teal-100 shadow-teal-900 border-teal-900 bg-teal-200 bg-teal-400 shadow-teal-600/50 shadow-teal-900/50 text-teal-200 bg-teal-500 text-teal-100 bg-teal-300 bg-teal-800 font-teal-900 border-teal-100 text-teal-50 border-teal-50 shadow-teal-500 bg-teal-700 bg-teal-600 border-teal-600 hover:bg-teal-500 text-teal- placeholder:text-teal-900 bg-lime-900 text-lime-900 bg-lime-100 shadow-lime-900 border-lime-900 bg-lime-200 bg-lime-400 shadow-lime-600/50 shadow-lime-900/50 text-lime-200 bg-lime-500 text-lime-100 bg-lime-300 bg-lime-800 font-lime-900 border-lime-100 text-lime-50 border-lime-50 shadow-lime-500 bg-lime-700 bg-lime-600 border-lime-600 hover:bg-lime-500 text-lime- placeholder:text-lime-900
		`}></div>

	</div>)
}
