const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })

    .option('h', {
        alias: 'hasta',
        type: 'number',
        default:10,
        describe: 'Hasta donde quieres la tabla'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene q ser un numero'
        }
        return true;
    })
    .argv;

    module.exports= argv;