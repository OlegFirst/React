import React from 'react';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			three: 3
		};
		
		this.okButton = this.okButton.bind(this);
	}
	
	okButton() {
		console.log('3');
		this.props.filterParameters(3);
	}
	
	render() {
		return (
			<div className="filter">
				<h1>Filter</h1>
				<button onClick={this.okButton}>OK</button>
			</div>
		)
	}
}

export default Filter;