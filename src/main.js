import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './db';
import List from './List';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			items: []
		}

		this.getAllIngredients();
	}

	getAllIngredients() {
		db.getAllPostsPromise.then(function( data ) {
			this.setState({
				items: data.Items
			});
		}.bind( this ));
	}

	render() {
		return(
			<div>
				<List items={this.state.items} />
			</div>
		)
	}
}

ReactDOM.render( <App />, document.querySelector( '.container' ) );