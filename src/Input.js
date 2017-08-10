import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	ingredients: props.items
		// };
		// console.log(this.state);
	}

	onInputChange( ingredient ) {
		// const timestamp = new Date().getUTCMilliseconds();
		// const item = {
		// 	'id': timestamp,
		// 	'name': ingredient
		// };
		// this.addIngredient(item);
	}

	render() {
		return (
			<div>
				<input
					onChange={event => this.props.addIngredient( this, event.target.value ) }
				/>
			</div>
		)
	}
}

export default Input;
