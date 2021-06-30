
require('colors');

const { 
    inquirerMenu, 
    pausa,
    leerInput 
} = require('./helpers/inquirer');
const { guardarBD, leerDB } = require('./helpers/guardarArchivo');
const Tareas = require('./models/tareas');

const main = async() => {

    let option = '';

    //Instanciamientos
    const tareas = new Tareas();
    const tareasLeerDB = leerDB();

    if( tareasLeerDB ){ // Cargar tareas
        tareas.cargarTareasFromArray( tareasLeerDB );
    }

    do {
        // Imprimir el menú
        option = await inquirerMenu();
        
        switch( option ){

            case '1':
                
                // Recibir Tarea
                const description = await leerInput('Descripción: ');

                //Crear Tarea
                tareas.crearTarea( description );
            break;

            case '2':
                tareas.listadoCompleto();
                //console.log( tareas.listadoArr );
            break;
        }

        guardarBD( tareas.listadoArr );

        await pausa();

    } while( option !== '0' );
}

main();