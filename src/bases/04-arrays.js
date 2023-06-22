
//arrays en js
// const array = new Array (100);
const array = [1,2,3,4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

let array2 = array;
array2.push(5);

let array3 =  [...array,5];

//function == callback
const array4 = array3.map( function(numero) {
       return numero * 2;
}); 
 
console.log ( array );
console.log ( array2 );
console.log ( array3 );
console.log ( array4 );
