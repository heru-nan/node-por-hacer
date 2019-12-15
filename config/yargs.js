const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer',
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea',
}

const option_crear = {
    descripcion
}
const option_actualizar = {
    descripcion, completado
}

const option_borrar = {
    descripcion,
}

const argv = require("yargs")
    .command("crear", "crear un elemento para hacer", option_crear)
    .command("actualizar", "actualiza el estado completado de una tarea", option_actualizar)
    .command("borrar", "borra una tarea del listado", option_borrar)
    .help()
    .argv;

module.exports = {
    argv,
}