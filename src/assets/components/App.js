import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderElements from './view/header/HeaderElements';
import Home from './view/container/Home';
import Sweets from './view/container/products/Sweets';
import Vegetables from './view/container/products/Vegetables';
import Fruits from './view/container/products/Fruits';
import Footer from './view/Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		
		this.itemActivated = this.itemActivated.bind(this);
		//this.filterHandler = this.filterHandler.bind(this);
		
		// Create reference for 'LoginForm' - component
		this.myRef = React.createRef();
	}

	itemActivated(e) {
		document.querySelectorAll('.nav__item').forEach((item) => {
			item.classList.remove('nav__item_active');
		});
		e.target.parentNode.classList.add('nav__item_active');
	}
	
	// Handler of the callback from FILTER includes new parameters
	/* filterHandler(res) {
		this.setState({filter: res});
	}*/
	
	render() {
		return (
			<Router>
				<header className="header">
					<nav className="header__inner">
						<ul className="header__nav nav">
							<li className="nav__item" onClick={this.itemActivated}>
								<Link className="nav__internet-shop" to="/">InternetShop</Link>
							</li>
							<li className="nav__item" onClick={this.itemActivated}>
								<span>Products</span>
								<ul className="header__products products">
									<li className="products__item">
										<Link to="/products/sweets">Sweets</Link>
									</li>
									<li className="products__item">
										<Link to="/products/vegetables">Vegetables</Link>
									</li>	 
									<li className="products__item">
										<Link to="/products/fruits">Fruits</Link>
									</li>
								</ul>
							</li>
						</ul>						
					</nav>
					<HeaderElements />
				</header>
				<section className="container">
					<Route exact path="/" component={Home} />
					<Route path="/products/sweets" component={() => <Sweets />} />
					<Route path="/products/vegetables" component={Vegetables} />
					<Route path="/products/fruits" component={() => <Fruits />} />
				</section>
				<Footer />
			</Router>
		);
	}
}

export default App;