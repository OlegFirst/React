import React from 'react';
import LoginForm from '../../extentions/LoginForm';

class HeaderElements extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoginFormActive: false
		};
		
		this.showForm = this.showForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
	}
	
	showForm() {
		this.setState({isLoginFormActive: true});
	}
	
	hideForm() {
		this.setState({isLoginFormActive: false});
	}
	
	render() {
		return (
			<>
			<div className="header__elements">
				<button type="button" onClick={this.showForm}>Sign in</button>
				<button type="button">Search</button>
			</div>
			<div className="header__outer">
				<LoginForm
					isActive={this.state.isLoginFormActive}
					hideForm={this.hideForm}
				/>
			</div>
			</>
		)
	}
}

export default HeaderElements;