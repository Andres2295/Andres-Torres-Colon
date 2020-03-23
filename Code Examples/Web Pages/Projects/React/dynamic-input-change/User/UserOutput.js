import React from 'react';

const userOutput = (props) => {
	const outputStyle = {
		width: '60%',
	    padding: '16px',
	    margin: '16px',
	    border: '2px solid black',
	    backgroundColor: 'blue',
	    textAlign: 'center'
	};

	return(
		<div style={outputStyle}>
			<p>Hello {props.username}!</p>
			<p>Your Username is: {props.username}</p>
		</div>
		)
	
};

export default userOutput;