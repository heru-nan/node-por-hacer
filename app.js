const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("crear");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======¨POR HACER¨======'.yellow);
            console.log(tarea.descripcion.grey);
            console.log('Estado: '.grey + ((tarea.completado) ? 'Completo'.brightGreen : 'incompleto'.brightRed));
            console.log('======================='.yellow);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizacion de tarea'.green);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no reconocido");
}

