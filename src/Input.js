import React from 'react';
import db from './db';

function addIngredientInput(e) {
	e.preventDefault();
	const input = document.getElementById('ingredient-input');
	const value = input.value;
	console.log(value);

	const Item = {
		'id': 12345678,
		'name': value
	};

	db.addRecord(Item).then(function() {
		console.log('Success');
	}).catch(function(err) {
		console.log(err);
	});
}


const Input = () => {

	return (
		<div>
			<form>
				<input id="ingredient-input" type="text" />
				<input type="submit" onClick={addIngredientInput} />
			</form>
		</div>
	)
};

export default Input;