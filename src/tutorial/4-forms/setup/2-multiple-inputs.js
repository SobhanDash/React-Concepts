import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {		
	// const [firstName, setFirstName] = useState('');
	// const [email, setEmail] = useState('');
	// const [age, setAge] = useState('');
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" })  // for the input collection
	//for list that will be rendered on screen
	const [people, setPeople] = useState([])

  //takes multiple inputs and handles them
	const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value) 
    //we spread the object so if we are adding name we don't delete email or age from the list.
	// "[name]: value" helps us handle the inputs s.t we don't have to create multiple states for them
    setPerson({ ...person, [name]: value })
  }

	const handleSubmit = (e) => {
		e.preventDefault()
	//if the fields are not empty
    if(person.firstName && person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()}
	  //adds the entry to the list/object to be rendered
      setPeople([...people, newPerson]);
	  //resets for new entry
      setPerson({ firstName:"", email:"", age:"" });
    }
	}

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={person.firstName}
							onChange={handleChange}
						/>
					</div>

					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input
							type='email'
							id='email'
							name='email'
							value={person.email}
							onChange={handleChange}
						/>
					</div>

					<div className='form-control'>
						<label htmlFor='age'>Age : </label>
						<input
							type='text'
							id='age'
							name='age'
							value={person.age}
							onChange={handleChange}
						/>
					</div>

					<button type='submit' onClick={handleSubmit}>
						add person
					</button>
				</form>
				{people.map((person, index) => {
					const { id, firstName, email, age } = person
					return (
						<div className='item' key={id}>
							<h4>{firstName}</h4>
							<h4>{age}</h4>
							<p>{email}</p>
						</div>
					)
				})}
			</article>
		</>
	)
}

export default ControlledInputs
