//Desesturacion de arreglos

const personajes = ['goku', 'vegeta', 'trunks'];

console.log( personajes[0] );


//impresion simple
// fn + F2 cambiar todas la asignaciones de una constante
const [ p1 ] = personajes;
console.log( p1 );

//impresion del 2º poscicion
const [ , p2 ]  = personajes;
console.log( p2 );