import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends Component {
	constructor( props ) {
		super( props );
	}

	generateUUID() {
		let d = new Date().getTime();
		if( window.performance && typeof window.performance.now === 'function' ){
			d += performance.now();
		}
		const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function( c ) {
			const r = ( d + Math.random()*16 )%16 | 0;
			d = Math.floor( d/16 );
			return ( c =='x' ? r : ( r&0x3|0x8 ) ).toString( 16 );
		});
		return uuid;
	}

	onInputChange( ingredient ) {
		const Item = {
			'id': this.generateUUID(),
			'name': ingredient
		};

		this.setState( {Item} );
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
