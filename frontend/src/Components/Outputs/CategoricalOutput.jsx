import React, {useState} from 'react'

export const CategoricalOutput = ({ model, classes, output, c }) => {

	const [is_simple, set_is_simple] = useState(true);

	return (<div className='py-10'>

		<label className={`text-${c}-900 text-lg`} htmlFor="option1">
			<input checked={is_simple} onChange={()=>{set_is_simple(!is_simple)}} className='mx-1' type="checkbox" id="option1" name="option" value="option1" />
			Compact
		</label>

		{classes.map((classes_, i_)=>{
			let output_ = output[i_];
			let best_index = output_.indexOf(Math.max(...output_));
			return <div key={i_} className='py-10 '>
				<button className={`
						mx-auto
						text-xl
						border border-1
						px-6 py-2
						flex items-center
						
						font-bold
						rounded-md
						border-${c}-900
					`}>Prediction:
					<span className={`px-2 mx-1 bg-${c}-200 font-bold py-1`}>
						<strong>{classes_[best_index]}</strong>
					</span>
					<img width="35px" src={model.output.getIcon(classes_[best_index])} alt="" />
					</button>
				{/* SIMPLE */}
				{is_simple &&
					<div className='text-lg'>
						<p className='py-2 font'>Confidence in Prediction: <strong>{Math.round(output_[best_index]*100)}%</strong></p>
						{/* BAR */}
						<div className={`bg-${c}-200 border-${c}-900 border p-[0.5px] rounded-full  w-[60%] mx-auto h-4`}>
							<div
								style={{width: `${output_[best_index]*100}%`}}
								className={`bg-${c}-600 rounded-full h-full w[${output_[best_index]*100}%]`}></div>
						</div>
						
					</div>}
				{/* NOT SIMPLE */}
				{!is_simple && 
					<div
						className='pt-10 mt-5 img-class-graph flex justify-center mx-auto'
						style={{
							width: `${25 * 3}%`,
							maxWidth: "100%",
							// minHeight: "390px"
						}}
					>
						{output_.map((o, i) => {
							return (
								<div
									key={i}
									className={`
										w-[100%]
										space-y-5
										flex flex-col items-center justify-end
									`}
								>
									<div
										style={{
											height: `${300 * o}px`,
										}}
										className={`
											w-[70%]
											relative
											bg-${c}-400
											shadow-xl
											shadow-${c}-600/50
											rounded-t-sm
											border
											border-${c}-900
											`}
									>
										<span
											className='font-bold w-[100%] absolute top-[-22px] left-[0px]'
										>
											{Math.round(100 * o)}%
										</span>
									</div>
									<h2 className='text-xl'>{classes_[i]}</h2>
								</div>
							)
						})}
					</div>
				}
			</div>
		})}


	</div>)
}
