import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListItem extends Component {
	constructor( props ) {
		super( props );

		this.handleClick = this.handleClick.bind( this );
	}

	handleClick() {
		
		// We need to pass the id here to the delete endpoint
		this.props.deleteIngredient( this.props.item );
	}

	render() {
		return (
			<li key={this.props.item.id}>
				{this.props.item.name} - <a href="#" onClick={this.handleClick}>delete</a>
			</li>
		)
	}
}

export default ListItem;