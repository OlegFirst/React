import React from 'react';

class HeaderElements extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<div className="header__elements">
				Sign in	Search
			</div>
		)
	}
}

export default HeaderElements;