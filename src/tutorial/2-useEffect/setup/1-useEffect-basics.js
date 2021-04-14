import React, { useState, useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0)
	useEffect(() => {
		console.log("call useEffect")
    // we can't call hooks conditionally but we can use conditionals inside a hook
    if(value>=1){
      document.title = `New Title (${value})`
    }
	}, [value]);
	console.log("render component")
	return (
		<>
			<h1>{value}</h1>
			<button
				className='btn'
				onClick={() => setValue(value + 1)}
			>
				Click Me
			</button>
		</>
	)
}

export default UseEffectBasics
