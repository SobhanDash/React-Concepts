import React, { useState } from "react"

const UseStateBasics = () => {
	// console.log(useState('hello'));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler)
	const [text, setText] = useState("hello")
	const clickHandler = () => {
		if (text === "hello") {
			setText("hey")
		} else {
			setText("hello")
		}
	}
	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className='btn' onClick={clickHandler}>
				Click Me!
			</button>
		</React.Fragment>
	)
}

export default UseStateBasics
