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

		this.state = {
			ingredients: []
		};

		//this.getAllIngredients();
		//this.addIngredient = this.addIngredient.bind(this);
	}

	getAllIngredients() {
		db.getAllRecords.then(function( data ) {
			this.setState({
				ingredients: data.Items
			});
		}.bind( this )).catch(function(err) {
			console.log(err);
		});
	}

	addIngredient(ingredient) {
		const timestamp = new Date().getUTCMilliseconds();

		const item = {
			'id': timestamp,
			'name': ingredient
		};
		
		db.addRecord(item).then(function() {
			this.setState({ 
				ingredients: this.state.ingredients.concat([item.ingredient])
			});
		}).catch(function(err) {
			console.log(err);
		});
	}

	render() {
		return(
			<div>
				<div>
					<Input />
				</div>
				<div>
					<List items={this.state.ingredients} />
				</div>
			</div>
		)
	}
}

ReactDOM.render( <App />, document.querySelector( '.list__container' ) );
