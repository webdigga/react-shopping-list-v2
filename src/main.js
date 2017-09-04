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
			ingredients: []
		};

		this.deleteIngredient = this.deleteIngredient.bind( this );
	}

	getAllIngredients() {
		db.getData( '/ingredients' ).then(function( data ) {
			this.setState({
				ingredients: data.Items
			});
		}
		.bind( this ))
		.catch(function( err ) {
			console.log( err );
		});
	}

	addIngredient( Item ) {
		db.postData( '/ingredients', Item ).then(function() {
			this.setState({ 
				ingredients: this.state.ingredients.concat( [Item] )
			});
		}
		.bind( this ))
		.catch(function( err ) {
			console.log( err );
		});
	}

	deleteIngredient( Item ) {
		db.deleteData( '/ingredients', Item ).then(function() {
			this.setState({
				ingredients: this.state.ingredients.filter(function( ingredient ) { 
					return ingredient !== Item;
				})
			});
		}
		.bind( this ))
		.catch(function( err ) {
			console.log( err );
		});
	}

	render() {
		const addIngredient = ( Item ) => {
			this.addIngredient( Item );
		};
		const deleteIngredient = this.deleteIngredient;

		return(
			<div>
				<div>
					<Input addIngredient={addIngredient} />
				</div>
				<div>
					<List items={this.state.ingredients} deleteIngredient={deleteIngredient} />
				</div>
			</div>
		)
	}
}

ReactDOM.render( <App />, document.querySelector( '.container' ) );
