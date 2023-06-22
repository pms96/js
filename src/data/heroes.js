
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// de esta forma es como por defect pero al const del array no hay que ponerle export
export default heroes;

//exportación por defecto mas exportación extra  
// import heroes, { owner } from './data/heroes';
export const owner = [ 'DC', 'Marvel'];

// varias exportaciones 
// export {
//     heroes as default,
//     owner,
// }