
//Funciones

function getSaludo (nombre) {
    return `Hola, ${nombre}`;
}

console.log( getSaludo('pablo'));



//Otro tipo en constante

const saludar = function( nombre ) {
    return `Hola caracola ${nombre}`;
}

console.log( saludar('goku') );


//funcion flecha 1
const saludar2 = ( nombre )  => {
    return `Hola caracola ${nombre}`;
}

console.log( saludar2('vegeta') );



//funcion flecha return rapido
const saludar3 = ( nombre )  => `Hola caracola ${nombre}`;
const saludar4 = ()  => `Hola caracola`;

console.log( saludar3('songo anda') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 877474,
        username: 'patito677',
    }
};

const getUser2 = () => ({
    uid: '877474',
    username: 'patito677',
});

console.log( getUser() );
console.log( getUser2() );


//tarea 
// 1. transformar la función en flecha
// 2. devolver un objeto implicito
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username : nombre,
    }
};

const usuarioActivo = getUsuarioActivo( 'Pablo' );
console.log(usuarioActivo);


const nuevoUsuario = (nombre) => ({
    uid: 'ABC567',
    username : nombre,
});

console.log(nuevoUsuario( 'pablo2' ));