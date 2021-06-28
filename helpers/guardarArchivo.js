
const fs = require('fs');
const file = './db/data.json';

const guardarBD = ( data ) => {
    fs.writeFileSync( file, JSON.stringify( data) );
}

const leerDB = () => {
    
    if( !fs.existsSync( file ) ) return null;

    const info = fs.readFileSync( file, { encoding: 'utf-8' } );
    const data = JSON.parse( info );
    
    console.log(data);

    return null;
}

module.exports = {
    guardarBD,
    leerDB
}