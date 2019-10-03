import React from 'react';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			three: 3,
			list: [
				{title: 'Trade mark',items: ['Sunny products', 'Rainy produtcs']}
			]
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
				<h4 className="filter__title">Filter</h4>
				<ul className="filter__ctegories-wrapper">
					<li className="filter__item">
						<ul>
						<label>
							<input type="checkbox" /> Trade mark							
						</label>
						</ul>
					</li>
					<li className="filter__item">
						<label>
							<input type="checkbox" /> Date							
						</label>
					</li>
					<li className="filter__item">
						<label>
							<input type="checkbox" /> Price							
						</label>
					</li>
				</ul>
				<button onClick={this.okButton} style={{display: 'none'}}>OK</button>
			</div>
		)
	}
}

export default Filter;