import React from 'react';
import Filter from '../../Filter';
import Card from '../Card';
import { ProductsSweets } from '../../../extentions/Services';

class Sweets extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			sweets: [],
			readingStatus: {
				message: ['Reading...', 'There are no elements', 'Server error'],
				index: 0,
				getMessage: function() {
					return this.message[this.index];
				}
			}
		};
	}
	
	componentDidMount() {
		this.setState({readingStatus: {...this.state.readingStatus, index: 0}});
		ProductsSweets
			.then(res => {
				this.setState({
					sweets: this.state.sweets.concat(res)
				});
				if (res.length === 0)
					this.setState({readingStatus: {...this.state.readingStatus, index: 1}});
			})
			.catch(() => {
				this.setState({readingStatus: {...this.state.readingStatus, index: 2}});
			});
	}
	
	render() {
		return (			
			<div className="products">
				<Filter filterParameters={this.filterHandler}/>
				<div className="products__content">
					<h1>Sweets</h1>
					<div className="products__cards">
						{this.state.sweets.map((item, index) => {
							return <Card content={item} key={index.toString()} />
						})}
						{this.state.sweets.length === 0 &&
							<div>{this.state.readingStatus.getMessage()}</div>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Sweets;