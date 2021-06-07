import React, { useEffect, useRef } from "react"

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  //useRef 
  const refContainer = useRef(null)
  const divContainer = useRef(null)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }
  //console.log(refContainer)
  //since useRef does'nt trigger re-renders. useEffect focuses on the input right from the first render
  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<input type='text' ref={refContainer} />
					<button type='submit'>Submit</button>
				</div>
			</form>
      <div ref={divContainer}>Hello World</div>
		</>
	)
}

export default UseRefBasics
