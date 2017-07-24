import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './db';
import List from './List';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			items: []
		};

		this.getAllIngredients();
	}

	getAllIngredients() {
		db.getAllRecordsPromise.then(function( data ) {
			this.setState({
				items: data.Items
			});
		}).catch(function(err) {
			console.log(err);
		}.bind( this ));

	}

	addIngredient(id, name) {

		
		const params = db.params;

		params.Item = {
			'id': id,
			'name': name
		};

		db.addRecordPromise.then(function(data) {
			console.log('Success!!!!!');
		}).catch(function(err) {
			console.log(err);
		});
		
	}

	render() {

		


		this.addIngredient(4545, 'Booommmm!!!!');

		return(
			<div>
				<List items={this.state.items} />
			</div>
		)
	}
}

ReactDOM.render( <App />, document.querySelector( '.container' ) );