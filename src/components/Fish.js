import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
	render(){
		const {details , index} = this.props;
		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add to Order' : 'Sold Out';

		return(
			<li className="menu-fish">
				<img src={this.props.details.image} alt={this.props.details.name}  />
				<h3>
				{this.props.details.name}
				<span className="price">{formatPrice(this.props.details.price)}</span>
				</h3>
				<p>{this.props.details.desc}</p>
				<button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
			</li>
			)
	}
}

export default Fish;