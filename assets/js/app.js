// Variables
const listaTweets = document.querySelector('#lista-tweets');




// Event Listeners
eventListeners()

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido Cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

// Funciones

// Anadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    
    // Leer el valor del textArea
    const tweet = document.querySelector('#tweet').value;

    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X'

    // Crear elemento y anadir contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    
    // Anade el boton de borrar al tweet
    li.appendChild(botonBorrar);

    // Anade el tweet a la lista
    listaTweets.appendChild(li);

    // Anadir al Local Storage
    agregarTweetLocalStorage(tweet)
}

// Borrar Tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();

        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Mostrar datos del local storage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        // Crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X'

        // Crear elemento y anadir contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;

        // Anade el boton de borrar al tweet
        li.appendChild(botonBorrar);

        // Anade el tweet a la lista
        listaTweets.appendChild(li);
    });
}

// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    
    // Anadir el nuevo Tweet
    tweets.push(tweet);

    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;

    // Revisamos los valores del local storage
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Eliminar tweet del local storage
function borrarTweetLocalStorage(tweet) {
    
    let tweets, tweetBorrar;

    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}