const cartolina = document.getElementById('cartolina');
const copertina = document.getElementById('copertina');
const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');
const risposta = document.getElementById('risposta');

// Apri la cartolina
copertina.addEventListener('click', () => {
    cartolina.classList.add('aprire');
});

// Gestione dei pulsanti
siButton.addEventListener('click', () => {
    risposta.textContent = "Grazie mille! Non vedo l'ora di passare un San Valentino indimenticabile con te! ❤️";
    risposta.style.color = "green";
    noButton.remove();
    siButton.remove();
});

noButton.addEventListener('click', () => {
    risposta.textContent = "Oh no... clicca 'Sì'!";
    risposta.style.color = "red";
    const currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize + 5}px`;
});
