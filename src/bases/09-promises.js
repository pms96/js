import { getHeroeById } from '../bases/08-imp-ext'; 


//Promesas son async

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         // reject( 'no se pudo encontrar el heroe' );
//     },2000)

// });

// //correcta
// promesa.then( (heroe) => {
//     console.log( heroe );
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const heroe = getHeroeById(id);
            if ( heroe ) {
                resolve( heroe );
            }else {
                reject( 'no se pudo encontrar el heroe' );
            }
        },2000)

    });

};

getHeroeByIdAsync(10)
    .then( heroe => console.log( 'Heroe', heroe))
    .catch( err => console.warn( err ))


getHeroeByIdAsync(5)
.then( console.log )
.catch( console.warn )