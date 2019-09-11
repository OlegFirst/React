import React from 'react';

class LoginForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			userName: null
		}
		
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
		
	handleChange(e) {
		let value = e.target.value;
		console.log(value);
		this.setState({
			userName: value
		});
	}
	
	submit(e) {
		e.preventDefault();
		this.props.hideForm();
	}
	
	render() {
		if (!this.props.isActive)
			return null;
		return (			
			<div className="login">
				<form className="login__form" onSubmit={this.submit}>
					<h3>Sign in</h3>
					<input
						className="login__user-name"
						type="text"
						placeholder="User name"
						maxLength="10"
						onChange={this.handleChange}
					/>
					<input
						className="login__submit"
						type="submit"
						value="OK"
					/>
				</form>
			</div>
		)
	}
}

export default LoginForm;