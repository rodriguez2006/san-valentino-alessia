const cartolina = document.getElementById('cartolina');
const copertina = document.getElementById('copertina');
const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');
const risposta = document.getElementById('risposta');
const audio = document.getElementById('audio');

// Apri la cartolina
copertina.addEventListener('click', () => {
    cartolina.classList.add('aprire');
    audio.play(); // Avvia la musica
});

// Gestione dei pulsanti
siButton.addEventListener('click', () => {
    risposta.textContent = "heheheheh sapevo al primo colpo hai detto SIII! ❤️";
    risposta.style.color = "green";
    noButton.remove();
    siButton.remove();
});

noButton.addEventListener('click', () => {
    risposta.textContent = "Mmmm sei cattivaaaa pk non vuoi?????????? Tiene a otro verdad????!";
    risposta.style.color = "red";
    const currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = ${currentSize + 5}px;
});
