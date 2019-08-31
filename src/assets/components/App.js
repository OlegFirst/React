import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderElements from './view/header/HeaderElements';
import Home from './view/container/Home';
import Sweets from './view/container/products/Sweets';
import Footer from './view/Footer';

// TO DO
// Search

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		
		this.itemActivated = this.itemActivated.bind(this);
	}

	itemActivated(e) {
		document.querySelectorAll('.nav__item').forEach((item) => {
			item.classList.remove('one');
		});
		e.target.parentNode.classList.add('one');
	}
	
	componentDidMount() {}
	
	render() {
		return (
			<Router>
				<header className="header">
					<nav className="header__inner">
						<ul className="header__nav nav">
							<li id="item1" className="nav__item nav__item_active" onClick={this.itemActivated}>
								<Link className="nav__internet-shop" to="/">InternetShop</Link>
							</li>
							<li id="item2" className="nav__item products" onClick={this.itemActivated}>
								<Link to="/products">Products</Link>
							</li>
						</ul>					
					</nav>
					<HeaderElements />
				</header>
				<section className="container">
					<Route exact path="/" component={Home} />
					<Route path="/products" component={Products} />
						{/* <Route path={`${match.path}/:topicId`} component={ProductList} />
					<Route exact path={match.path}
						render = {() => 
							<h3 className="header__select-topic">Select a topic</h3>
						}
						/> */}
				</section>
				<Footer />
			</Router>
		);
	}
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
				
			{/* <Route path={`${match.path}/:topicId`} component={ProductList} />
			<Route exact path={match.path}
				render = {() => 
					<h3 className="header__select-topic">Select a topic</h3>
				}
			/> */}
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

export default App;