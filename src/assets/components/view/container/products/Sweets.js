import React from 'react';

class Sweets extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<div className="sweets">
				<h1>Sweets</h1>
				{this.props.msg}
			</div>
		)
	}
}

export default Sweets;