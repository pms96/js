//Desestructuración de objetos

//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ( usuario ) => {
    console.log(usuario);
};


const retornaPersona2 = ( {nombre, edad, clave} ) => {
    console.log(edad, clave, nombre);
};


const retornaPersona3 = ( {nombre, edad, clave, rango= 'capitan'} ) => {
    console.log(edad, clave, nombre, rango);
};

retornaPersona( persona );
retornaPersona2( persona );
retornaPersona3( persona );

const content = ( {nombre, edad, clave, rango= 'capitan'} ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14,
            lng: 45,
        }
    }
};

const avenger = content( persona );
console.log( avenger );

//1º opcion
const { nombreClave, anios, latlng:{ lat, lng} } = content( persona );
console.log( nombreClave, anios );
console.log( lat, lng );

//2º opcion
// const { nombreClave, anios, latlng } = content( persona );
// const { lat, lng } = latlng;
// console.log( nombreClave, anios );
// console.log( lat, lng );

