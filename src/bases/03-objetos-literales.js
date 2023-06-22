
const persona =  {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        zip: 12322,
        lat: 15.3,
        lng: 33.445,
    }
};

// console.table( {persona} );
// console.log( {persona} );
console.log( persona );

//asignación de referencia
const persona2 = persona;
persona2.nombre =  'Peter';

console.log( persona2 );

//clonación del objeto
const persona3 = { ...persona };
persona3.nombre = 'Peter';


console.log( persona );
console.log( persona2 );
console.log( persona3 );
