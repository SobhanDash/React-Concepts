import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users/QuincyLarson"
const MultipleReturns = () => {
	// by default loading is true, error is false, user is deafult user
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [user, setUser] = useState("default user")

	useEffect(() => {
		// getting the url
		fetch(url)
			//checking for error status and returning json
			.then((resp) => {
				if (resp.status >= 200 && resp.status < 300) {
					return resp.json()
				}
				//if error in fetching data
				else {
					setIsLoading(false)
					setIsError(true)
					throw new Error(resp.statusText)
				}
			})
			// if user is found then setUser as the user name
			.then((user) => {
				const { login } = user
				setUser(login)
				setIsLoading(false)
			})
			//catch any other error
			.catch((error) => console.log(error))
	}, [])

	//if loading
	if (isLoading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		)
	}
	//if error is encountered
	if (isError) {
		return (
			<div>
				<h2>Error..</h2>
			</div>
		)
	}
	//if everything runs fine, show username
	return (
		<div>
			<h2>{user}</h2>
		</div>
	)
}

export default MultipleReturns
