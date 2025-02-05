const cartolina = document.getElementById('cartolina');
const copertina = document.getElementById('copertina');
const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');
const risposta = document.getElementById('risposta');
const audio = document.getElementById('audio');

// Apri la cartolina (supporto per dispositivi mobili)
const apriCartolina = () => {
    cartolina.classList.add('aprire');
    audio.play();
};

copertina.addEventListener('click', apriCartolina);
copertina.addEventListener('touchstart', apriCartolina);

// Gestione pulsanti
siButton.addEventListener('click', () => {
    risposta.textContent = "heheheheh sapevo al primo colpo hai detto SIII! ❤️";
    risposta.style.color = "green";
    noButton.remove();
    siButton.remove();
});

noButton.addEventListener('click', () => {
    risposta.textContent = "Mmmm sei cattivaaaa pk non vuoi?????????? Tiene a otro verdad????!";
    risposta.style.color = "red";
    siButton.style.fontSize = `${parseInt(window.getComputedStyle(siButton).fontSize) + 5}px`;
});
