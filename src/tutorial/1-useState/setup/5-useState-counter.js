import React, { useState } from "react"

const UseStateCounter = () => {
	const [value, setValue] = useState(0)
	const reset = () => {
		setValue(0)
	}
	const complexCounter = () => {
		//setTimeout(() => {setValue(value+1)}, 2000)         ---> does not increase the current value but the value 2 seconds ago
		setTimeout(() => {
			setValue((prevState) => {
				return prevState + 1
			})
		}, 2000) // -----> returns the increment of the current value
	}
	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>Simple Counter</h2>
				<h1>{value}</h1>
				<button
					className='btn'
					onClick={() => setValue(value - 1)}
				>
					Decrease
				</button>
				<button className='btn' onClick={reset}>
					Reset
				</button>
				<button
					className='btn'
					onClick={() => setValue(value + 1)}
				>
					Increase
				</button>
				<h2>Complex Counter</h2>
				<h1>{value}</h1>
				<button
					className='btn'
					onClick={complexCounter}
				>
					Delay Increase
				</button>
			</section>
		</>
	)
}

export default UseStateCounter
