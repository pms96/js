import heroes,{ owner } from '../data/heroes';

// esta forma de importar es por const default [] y su import es sin llaves y ponemos el nombre que queramos
// import heroes from './data/heroes';
// import { heroes } from './data/heroes';


// console.log( heroes );
// console.log( owner );


export const getHeroeById = (id) => {

    // return heroes.find( (heroe) => {
    //     if ( heroe.id === id ) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // });

    //return heroes.find( heroe => heroe.id === id);

    return heroes.find( (heroe) => heroe.id === id);
}

// console.log( getHeroeById(2) );

const getHeroeByOwner = ( owner ) => heroes.find( (heroe) => heroe.owner === owner);

// console.log( getHeroeByOwner( 'DC' ) );

// tarea
// user filter
export const getHeroeFilterOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner);
// console.log( getHeroeFilterOwner( 'DC' ) );


