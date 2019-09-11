import React from 'react';
import Filter from '../../Filter';
import Card from '../Card';
import { ProductsFruits } from '../../../extentions/Services';

class Fruits extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			fruits: [],
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
		ProductsFruits
			.then(res => {
				this.setState({
					fruits: this.state.fruits.concat(res)
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
					<h1>Fruits</h1>
					<div className="products__cards">
						{this.state.fruits.map((item, index) => {
							return <Card content={item} key={index.toString()} />
						})}
						{this.state.fruits.length === 0 &&
							<div>{this.state.readingStatus.getMessage()}</div>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Fruits;