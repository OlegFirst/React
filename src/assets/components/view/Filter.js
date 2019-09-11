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
		const one = 'display: none';
		return (
			<div className="filter">
				<h4>Filter</h4>
				<button onClick={this.okButton} style={{display: 'none'}}>OK</button>
			</div>
		)
	}
}

export default Filter;