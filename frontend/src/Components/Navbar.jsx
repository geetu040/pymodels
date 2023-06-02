import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ({ props }) => {
	const c = props.c;
	const page = window.location.href.split("/").pop()
	const opt = props.options[page];

	return (<>
		<nav className={`
			bg-${c}-900
			text-${c}-900
			flex justify-between items-center
			flex-col sm:flex-row
			py-1
		`}>
			{(page !== "") && 
			<button className={`
				bg-${c}-100
				mx-7 my-5 py-2 px-3 sm:my-3
				rounded-md
				font-semibold
				text-lg
				shadow-xl
				shadow-${c}-900
			` }><Link to="/">Home</Link> </button>
			}
			<div className='mx-auto my-3 py-2 flex justify-center items-center space-x-1'>
				{props.theme_colors.map((color)=>{
					return (
					<button key={color} className={`
						bg-${color}-400
						w-6 h-6
						rounded-xl
					`} onClick={()=>{props.set_c(color)}} ></button>)
				})}
			</div>
			{(page !== "") &&
			<button className={`
				bg-${c}-100
				mx-7 my-5 py-2 px-3 sm:my-3
				rounded-md
				font-semibold
				text-lg
				shadow-xl
				shadow-${c}-900
			`}><a href={opt.getCodeLink()} target="blank">Check Notebook</a></button>
			}
		</nav>





	</>)
}
