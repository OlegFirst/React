import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Menu
function Navigation() {
	
	let itemActivated = (e) => {
		console.log(e.target);
	}
	
	componentDidMount() {
		console.log(1);
	}
	
	return (
		<Router>
			<nav className="header__inner">
				<ul className="header__nav nav">
					<li className="nav__item nav__item_active" onClick={(e) => {itemActivated(e)}}>
						<Link className="nav__internet-shop" to="/">InternetShop</Link>
					</li>
					<li className="nav__item products" onClick={(e) => {itemActivated(e)}}>
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
		<div className="content">
			Home
		</div>
	)
}

// PRODUCTS sub menu
function Products({match}) {
	return (
		<>
			<ul className="header__products products">
				<li className="products__item">
					<Link to={`${match.url}/swets`}>Sweets</Link>
				</li>
				<li className="products__item">
					<Link to={`${match.url}/vegetables`}>Vegetables</Link>
				</li>
				<li className="products__item">
					<Link to={`${match.url}/fruits`}>Fruits</Link>
				</li>
			</ul>
				
			<Route path={`${match.path}/:topicId`} component={ProductList} />
			<Route exact path={match.path}
				render = {() => 
					<h3 className="header__select-topic">Select a topic</h3>
				}
			/>
		</>
	)
}

function ProductList({match}) {
	return (
		<div className="content">
			<h3>{match.params.topicId}</h3>
		</div>
	)
}

export default Navigation;