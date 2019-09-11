import React from 'react';
import Filter from '../../Filter';
import Card from '../Card';
import { ProductsVegetables } from '../../../extentions/Services';

class Vegetables extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			vegetables: [],
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
		ProductsVegetables
			.then(res => {
				this.setState({
					vegetables: this.state.vegetables.concat(res)
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
					<h1>Vegetables</h1>
					<div className="products__cards">
						{this.state.vegetables.map((item, index) => {
							return <Card content={item} key={index.toString()} />
						})}
						{this.state.vegetables.length === 0 &&
							<div>{this.state.readingStatus.getMessage()}</div>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Vegetables;