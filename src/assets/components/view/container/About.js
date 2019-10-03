import React from 'react';

class About extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isArticleCutted: false
		};
		
		this.buttonMore = React.createRef();
		this.buttonLess = React.createRef();
		this.article = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		// Buttons changing event
		// this.article.current.addEventListener('transitionend', () => {
			// if (this.state.isArticleCutted) {
				// this.buttonMore.current.classList.add('show');
				// this.buttonLess.current.classList.remove('show');
			// } else {
				// this.buttonMore.current.classList.remove('show');
				// this.buttonLess.current.classList.add('show');
			// }
		// }, false);
	}
	
	handleClick(e) {
		if (this.state.isArticleCutted) {
			this.setState({ isArticleCutted: false })
		} else {
			this.setState({ isArticleCutted: true })
		}
	}
	
	render() {
		// console.log(this.state.isArticleCutted);			
		if (this.buttonMore.current !== null) {
			if (this.state.isArticleCutted) {
				// Container
				this.article.current.classList.add('article__container_cutted');
				// Buttons
				this.buttonMore.current.classList.add('show');
				this.buttonLess.current.classList.remove('show');
			} else {
				// Container
				this.article.current.classList.remove('article__container_cutted');
				// Buttons
				this.buttonMore.current.classList.remove('show');
				this.buttonLess.current.classList.add('show');
			}
		}
		return (
			<div className="about">
				<h1>About</h1>
				<article className="about__article article">
					<div className="article__container" ref={this.article}>
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum						
					</div>
					<div className="article__buttons">							
						<button
							id="button-more"
							className="type1 show"
							type="button"
							ref={this.buttonMore}
							onClick={this.handleClick}
						>More...</button>
						<button
							id="button-less"
							className="type1"
							type="button"
							ref={this.buttonLess}
							onClick={this.handleClick}
						>Less...</button>
					</div>
				</article>
			</div>
		);
	}
}

export default About;