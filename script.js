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
    risposta.textContent = "Grazie mille! Non vedo l'ora di passare un San Valentino indimenticabile con te! ❤️";
    risposta.style.color = "green";
    noButton.remove();
    siButton.remove();
});

noButton.addEventListener('click', () => {
    risposta.textContent = "Mmmm sei cattivaaaa pk non vuoi?????????? Tiene a otro verdad????!";
    risposta.style.color = "red";
    const currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize + 5}px`;
});

// Effetto neve/cuori cadenti
function creaNeve() {
    const neve = document.createElement('div');
    neve.classList.add('neve');
    neve.style.left = `${Math.random() * 100}vw`;
    neve.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(neve);
    setTimeout(() => neve.remove(), 5000);
}

setInterval(creaNeve, 300);
