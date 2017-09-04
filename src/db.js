// Promises for API calls
function getData( url ) {
	'use strict';
	const xhr = new XMLHttpRequest();
	return new Promise(( resolve, reject ) => {
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 ) {
				if ( xhr.status === 200 ) {
					resolve( JSON.parse( xhr.responseText ) );
				} else {
					reject( xhr.responseText );
				}
			}
		};
		xhr.open( 'GET', url );
		xhr.send();
	});
}

function postData( url, Item ) {
	'use strict';
	const xhr = new XMLHttpRequest();
	return new Promise(( resolve, reject ) => {
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 ) {
				if ( xhr.status === 200 ) {
					resolve( JSON.parse( xhr.responseText ) );
				} else {
					reject( xhr.responseText );
				}
			}
		};
		xhr.open( 'POST', url, true );
		xhr.setRequestHeader( 'Content-Type', 'application/json; charset=UTF-8' );
		xhr.send( JSON.stringify( Item ) );
	});
}

function deleteData( url, Item ) {
	'use strict';
	const xhr = new XMLHttpRequest();
	return new Promise(( resolve, reject ) => {
		xhr.onreadystatechange = function () {
			if ( xhr.readyState === 4 ) {
				if ( xhr.status === 200 ) {
					resolve( JSON.parse( xhr.responseText ) );
				} else {
					reject( xhr.responseText );
				}
			}
		};
		xhr.open( 'DELETE', url, true );
		xhr.setRequestHeader( 'Content-Type', 'application/json; charset=UTF-8' );
		xhr.send( JSON.stringify( Item ) );
	});
}

module.exports = {
	getData: getData,
	postData: postData,
	deleteData: deleteData
}
