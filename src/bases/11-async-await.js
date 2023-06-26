//async

// const getImagenPromesa =  () => new Promise ( resolve => resolve('https:://sjskjlkje.com') ) 
// getImagenPromesa().then( console.log ); 

const getImagen = async() => {

    try {
        
        const apiKey = '6Qs6dFXbJsut9GY7e39vHkb6I33XNCV1';
    
        // await ejecuta la promesa antes de ejecutar la siguiente linea de código
        const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    
        const { data } = await httpCall.json();
        
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        
        document.body.append( img );
    } catch (error) { 

        console.error(error);

    }
}

getImagen();
