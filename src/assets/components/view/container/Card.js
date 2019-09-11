import React from 'react';

function Card(props) {
	const card = props.content;
	
	return (		
		<div className="card">
			<div className="card__name">
				<h3>{card.name}</h3>
			</div>
			<div className="card__image row">
				<img src={card.image} alt="image" />
			</div>
			<div className="card__price row">
				Price: ${card.price}
			</div>
			<div className="card__value row">
				Value: {card.value}
			</div>
			<div className="card__date row">
				Date: {card.date}
			</div>
			<div className="card__trade-mark">
				{card.tradeMark}
			</div>
		</div>
	)
}

export default Card;