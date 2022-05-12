const fs = require('fs');
const colors = require('colors');



const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try { 

        
        let salida = '';
        let consola = '';

        for (let i = 0; i < hasta; i++) {
            salida += `${colors.blue( base)} ${'x'.green} ${colors.blue(i + 1)}  ${'='.green} ${colors.blue( base* (i + 1))} \n`;
            consola += `${ base} ${'x'} ${(i + 1)}  ${'='} ${ base* (i + 1)} \n`;
        }101010
        if (listar) {
            console.log('===================='.yellow);
            console.log(`   Tabla del `.yellow, colors.blue(base));
            console.log('===================='.yellow);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        return (`tabla creada`);
    } catch (error) {
        throw error;

    }

}

module.exports = {

    crearArchivo
}