import React from 'react'

// class Preview (props) => {

// }

export default (props) => {
	const post = props

	return(
		<div>
	        <h3> {post.title} </h3>
	        <p>{post.text}</p>
		</div>
	)		
}