module.exports = function( app ) {
	const ingredients = require( './controllers/ingredients' );
	app.get( '/ingredients', ingredients.findAll );
    app.post( '/ingredients', ingredients.add );
    app.delete( '/ingredients', ingredients.delete );
}