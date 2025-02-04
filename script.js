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
    risposta.textContent = "hehehehehheheheheh hai detto siiiiiii yeeeeeeee ❤️";
    risposta.style.color = "green";
    noButton.remove();
    siButton.remove();
});

noButton.addEventListener('click', () => {
    risposta.textContent = "mmmm sei cattivaaaa pk non vuoi?????????? tiene a otro verdad????!";
    risposta.style.color = "red";
    const currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize + 5}px`;
});
