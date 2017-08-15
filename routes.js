module.exports = function( app ) {
	const ingredients = require( './controllers/ingredients' );
	app.get( '/ingredients', ingredients.findAll );
    app.get( '/ingredients/:id', ingredients.findById );
    app.post( '/ingredients', ingredients.add );
    app.delete( '/ingredients/:id', ingredients.delete );
}