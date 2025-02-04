const messaggio = document.getElementById('messaggio');
const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');
const risposta = document.getElementById('risposta');
const audio = document.getElementById('audio');
const photos = document.querySelectorAll('.photo');

let currentPhotoIndex = 0;

// Effetto di scrittura per il messaggio
const testo = "Alessia Gallardo, vuoi essere la mia San Valentino?";
let index = 0;

function scriviMessaggio() {
    if (index < testo.length) {
        messaggio.textContent += testo.charAt(index);
        index++;
        setTimeout(scriviMessaggio, 100);
    }
}

// Cambia foto ogni 3 secondi
function cambiaFoto() {
    photos[currentPhotoIndex].classList.remove('active');
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].classList.add('active');
}

setInterval(cambiaFoto, 3000);

// Gestione dei pulsanti
siButton.addEventListener('click', () => {
    risposta.textContent = "Grazie mille! Non vedo l'ora di passare un San Valentino indimenticabile con te! ❤️";
    risposta.style.color = "green";
    noButton.remove();
    siButton.remove();
    audio.play();
});

noButton.addEventListener('click', () => {
    risposta.textContent = "Oh no... clicca 'Sì'!";
    risposta.style.color = "red";
    const currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize + 5}px`;
});

// Avvia l'effetto di scrittura e la musica
scriviMessaggio();
audio.play();
