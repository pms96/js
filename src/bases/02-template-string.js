
const nombre = 'pablo';
const apellido = 'muñoz';

const nombreCompleto = `
${nombre} 
${apellido} 
${1+1} 
`;

console.log(nombreCompleto);

function getSaludo (nombre) {

    return 'Hola ' + nombre

}

console.log(`Este texto: ${getSaludo(nombre)}`); 