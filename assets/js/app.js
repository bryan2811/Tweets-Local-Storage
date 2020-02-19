// Variables
const listaTweets = document.querySelector('#lista-tweets');




// Event Listeners
eventListeners()

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
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
}