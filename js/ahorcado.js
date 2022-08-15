const palabras = [
    'Ahorcado',
    'Alura',
    'Latam',
    'Oracle',
    'JavaScript',
    'Java',
    'HTML',
    'CSS',
];

const vidas = 5;

function inicioJuego(event){
    const cantidad = palabras.length;
    const valorRandom = Math.floor(Math.random()*(palabras.length)); 
    
}

function palabraAleatoria(palabras){
    return palabras[posicionPalabra(palabras)];
}

function obtenerLetra() {
    const letra = document.getElementById("entrada");
    console.log(letra.value);
    console.log(palabraAleatoria(palabras))
    return letra;
}
