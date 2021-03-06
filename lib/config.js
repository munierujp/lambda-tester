'use strict';

const fs = require( 'fs' )

const { isObject } = require( './utils' );

let config;

try {

    let contents = fs.readFileSync( '.lambda-tester.json', { encoding: 'utf8' } );

    config = JSON.parse( contents );

    if( !isObject( config ) ) {

        throw new Error( 'not an object' );
    }

    config.loaded = true;
}
catch( err ) {

    config = {

        loaded: false
    }
}

module.exports = Object.freeze( config );
