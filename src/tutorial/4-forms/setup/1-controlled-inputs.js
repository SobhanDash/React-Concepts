import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	//useStates
	const [firstName, setFirstName] = useState("")
	const [email, setEmail] = useState("")
	const [people, setPeople] = useState([])
	//click handler
	const handleSubmit = (e) => {
		e.preventDefault()
		//if values are not empty
		if (firstName && email) {
			// console.log("submit the form")
			const person = { id: new Date().getTime().toString(), firstName, email }
			//add new item to the list
			setPeople((people) => {
				return [...people, person]
			})
			//clear the itemsfor new items
			setFirstName("")
			setEmail("")
		} else {
			console.log("empty values")
		}
	}
	return (
		<React.Fragment>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name: </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email: </label>
						<input
							type='text'
							id='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
				
				{/* display on the screen */}
				{people.map((person) => {
					const { id, firstName, email } = person
					return (
						<div className='item' key={id}>
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					)
				})}
			</article>
		</React.Fragment>
	)
}

export default ControlledInputs
