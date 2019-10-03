import React from 'react';

const Notifies = {
	LoginFormError: function LoginFormError(props) {
		function handleClick() {
			props.callback();
		}
		
		if (props.message === null)
			return null;
		
		return (
			<div className="notifies">
				<div className="notifies__box">
					<div className="notifies__message"><h2>{props.message}</h2></div>
					<div className="notifies__buttons">
						<button type="button" className="notifies__button type1" onClick={handleClick}>OK</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Notifies;