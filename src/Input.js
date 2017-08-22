import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends Component {
	constructor( props ) {
		super( props );

		this.state = {value: ''};

		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
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

	handleChange( event ) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit( event ) {
		event.preventDefault();

		const Item = {
			'id': this.generateUUID(),
			'name': this.state.value
		};

		this.setState({
			Item
		});

		this.props.addIngredient( Item );
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Input;
