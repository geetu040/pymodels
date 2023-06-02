import React from 'react'

export const Brief = ({ model, props }) => {

	return (<>
		<h1 className='font-semibold my-4 text-4xl'>{model.title}</h1>
		<p className='px-6 text-xl my-4'>{model.desc}</p>
	</>)
}
