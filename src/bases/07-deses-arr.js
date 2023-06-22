//Desesturacion de arreglos

const personajes = ['goku', 'vegeta', 'trunks'];

console.log( personajes[0] );


//impresion simple
// fn + F2 cambiar todas la asignaciones de una constante
const [ p1 ] = personajes;
console.log( p1 );

//impresion del 2º poscicion añadimos , y salta la posición
const [ , p2 ]  = personajes;
console.log( p2 );

const returnArray = () =>{return ['ABC', 123]};

const [ letras, numeros ] = returnArray();
console.log( letras, numeros );

//tarea
//1. primer valor del arreglo se llama nombre
//2. setNombre
const tarea = (valor) => { 
    return [ valor, ()=>{ console.log( 'hola mundo' ) } ];
 };

 const arr = tarea( 'goku' );
 console.log(arr);

 //llama a la función de tarea
 arr[1]();

 const [ nombre, setNombre ] = tarea( 'goku' );

 console.log(nombre);
 setNombre();