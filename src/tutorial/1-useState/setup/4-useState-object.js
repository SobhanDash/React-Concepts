import React, { useState } from "react"

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "peter",
		age: 42,
		message: "YO!",
	})

	const [name, setName] = useState("peter")
	const [age, setAge] = useState(42)
	const [message, setMessage] = useState("YO!")

	const changeMessage = () => {
		// setPerson({...person, message: 'hello!'});
		setMessage("hello")
	}

	return (
		<>
			{/* if we use spread operator
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3> */}
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h3>{message}</h3>
			<button className='btn' onClick={changeMessage}>
				Change Message
			</button>
		</>
	)
}

export default UseStateObject
