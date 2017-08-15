// TODO - we need to move the credentials out to separate file!!!!!
// TODO - Add aws-sdk node module to package json
// TODO - generate a unique hash here for the uuid
// TODO - make input field and pass hash + name into DB
// TODO - Set sublime es6 linting

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import db from './db';
import Input from './Input';

class App extends Component {
	constructor( props ) {
		super( props );
		this.getAllIngredients();
		this.state = {
			ingredients: [],
			addIngredient: this.addIngredient
		};
	}

	getAllIngredients() {
		db.getData( '/ingredients' ).then(function( data ) {
			this.setState({
				ingredients: data.Items
			});
		}.bind( this )).catch(function( err ) {
			console.log( err );
		});
	}

	addIngredient( Item ) {
		db.postData( '/ingredients', Item ).then(function() {
			this.setState({ 
				ingredients: this.state.ingredients.concat( [Item.name] )
			});
		}).catch(function( err ) {
			console.log( err );
		});
	}

	render() {
		return(
			<div>
				<div>
					<Input addIngredient={this.state.addIngredient} />
				</div>
				<div>
					<List items={this.state.ingredients} />
				</div>
			</div>
		)
	}
}

ReactDOM.render( <App />, document.querySelector( '.container' ) );
