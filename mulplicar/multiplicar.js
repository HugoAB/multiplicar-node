const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('=================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=================='.green);


    for(let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let result = '';

        for (let i = 1; i <= limite; i++) {
            result += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, result, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }            
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
};