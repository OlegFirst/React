import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navigation() {
	return (
		<Router>
			<nav className="header__nav">
				<ul>
					<li>
						<Link to="/">InternetShop</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
				
				<Route exact path="/" component={Home} />
				<Route path="/products" component={Products} />
			</nav>
		</Router>
	)
}

function Home() {
	return (
		<div>
			Home
		</div>
	)
}

function Products({match}) {
	console.log(1, match);
	return (
		<div>
			Products
			<ul>
				<li>
					<Link to={`${match.url}/cars`}>Cars</Link>
				</li>
			</ul>
				
			<Route path={`${match.patch}/:topicId`} component={ProductList} />
			<Route exact path={match.path}
				render = {() => 
					<h3>Select a topic</h3>
				}
			/>
		</div>
	)
}

function ProductList({match}) {
	console.log(match);
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	)
}

export default Navigation;