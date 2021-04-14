import React, { useState, useEffect } from "react"

const ShowHide = () => {
	const [show, setShow] = useState(false)
	return (
		<>
			<button className='btn' onClick={() => setShow(!show)}>
				show/hide
			</button>
			{show && <Item />}
		</>
	)
}

const Item = () => {
	const [size, setSize] = useState(window.innerWidth)
	const checkSize = () => {
		setSize(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener("resize", checkSize)
		// cleanup function is very essential here so we don't cluster the eventlistener
		return () => {
			window.removeEventListener("resize", checkSize)
		}
	})
	return (
		<div style={{ marginTop: "2rem" }}>
			<h1>Window</h1>
			<h2>Size: {size} pX </h2>
		</div>
	)
}

export default ShowHide
