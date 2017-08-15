import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			ingredients: props.items,
			addIngredient: props.addIngredient
		};	
	}

	onInputChange( ingredient ) {
		const timestamp = new Date().getUTCMilliseconds();
		const Item = {
			'id': timestamp,
			'name': ingredient
		};
		this.props.addIngredient( Item );
	}

	render() {
		return (
			<div>
				<input
					onChange={
						event => {
							this.onInputChange( event.target.value );
						}
					}
				/>
			</div>
		)
	}
}

export default Input;
