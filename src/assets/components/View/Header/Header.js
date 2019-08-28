import React from 'react';
import Navigation from './Navigation'
//import ReactDom from 'react-dom';

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<header className="header">
				<Navigation />
			</header>
		)
	}
}

export default Header;