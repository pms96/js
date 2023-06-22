const apiKey = '6Qs6dFXbJsut9GY7e39vHkb6I33XNCV1';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCall
    .then( resp => resp.json() )
    .then ( ({ data }) => {
        const { url } = data.images.original

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn);