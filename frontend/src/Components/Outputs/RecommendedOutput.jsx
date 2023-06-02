import React from 'react'

export const RecommendedOutput = ({ output, c }) => {
	return (
		<div className={`
				w-[95%] mx-auto
				bg-${c}-200 rounded-xl
				text-${c}-900
				border border-${c}-900
				text-center
				my-10 py-16 px-10
				flex flex-col justify-center items-center space-y-5
			`}>

			<div className={` bg-${c}-300 px-10 py-3 my-3 rounded space-y-3`}>
				<h1 className='text-2xl'>
					Recommendations for:<br></br><b>{output[0].title}</b>
				</h1>
				{output[0].img &&
					<img className='mx-auto' src={output[0].img} alt="" />
				}
				{output[0].info &&
					<div>{Object.keys(output[0].info).map((key, i) => {
						return (
							<div key={i}>
								<b>{key}:</b> {output[0].info[key]}
							</div>
						)
					})}</div>
				}
			</div>

			<div className='w-[100%] py-5 text-center'>
				{output.slice(1).map((o, i) => {
					return (
						<div className={`
								border-t-[1px] border-${c}-900
								flex justify-evenly items-center py-10
								flex-col
								sm:flex-row
							`} key={i}>

							{o.img &&
								<img className='w-[50%] my-3 sm:w-[20%]' src={o.img} alt="not found" />
							}

							<div className="space-y-4 sm:w-[70%]">

								<div className='space-y-2'>
									<div className='font-semibold text-2xl'> {o.title} </div>

									{o.info && <>
										{Object.keys(o.info).map((key, j) => {
											return (
												<div className='' key={j}>
													<b>{key}:</b> {o.info[key]}
												</div>
											)
										})}
									</>}
									<div className='text-lg'>[ Similarity Score: <b>{o.score}%</b> ]</div></div>
								<div className={`bg-${c}-100 flex rounded-sm px-[1px] py-[1px] items-center w-[90%] mx-auto space-x-2 border border-${c}-900`}>
									<div
										className={`h-[20px] rounded-sm bg-${c}-600`}
										style={{ width: `${o.score}%` }}
									></div>
								</div>

							</div>

						</div>


					)
				})}
			</div>

		</div>
	)
}
