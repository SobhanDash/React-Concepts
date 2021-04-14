import React, { useState } from "react"
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("")
	const [isError, setIsError] = useState(false)
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	return (
		<>
			{/* <h1>{firstVal}</h1>
		 	<h1>Value: {secondVal}</h1> */}
      {/* {if(isError){console.log('Error!')}} it'll not work because if statements don't return anything*/}
			<h1>{text || "john doe"}</h1>{" "}
			{/* if the text is false then display right side else show the text */}
			<button className='btn' onClick={() => setIsError(!isError)}>
				Toggle Error
			</button>
			{isError && <h1>Error...</h1>}{" "}
			{/*if text is true then display the right side else show the text */}
			{/* ternary operator */}
			{isError ? (
				<h2>There's an Error</h2>
			) : (
				<div>
					<h2>There is no Error</h2>
				</div>
			)}
		</>
	)
}

export default ShortCircuit
