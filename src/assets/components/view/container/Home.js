import React from 'react';
import lifecycle from 'react-pure-lifecycle';

const methods = {
	componentDidMount() {
		setTimeout(() => {
			document.querySelector('.container__message').classList.add('container__message_come-in');
		}, 100);
	}
}

const Home = () => {
	return(	
		<div className="home">
			<h1>Welcome to the internet shop</h1>
			<h3 className="container__message">Would You like to buy something?</h3>
		</div>
	)
}

export default lifecycle(methods)(Home);