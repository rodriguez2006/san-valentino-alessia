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
    risposta.textContent = "hahahahahah sapevo hai detto si al primo colpoooo ! ❤️";
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
const fotoContainers = document.querySelectorAll('.foto-container');

fotoContainers.forEach((container, index) => {
    container.addEventListener('mouseover', () => {
        const messaggioSegreto = document.createElement('p');
        messaggioSegreto.textContent = `Sei bellissima nella foto ${index + 1} ❤️`;
        messaggioSegreto.style.color = "#e91e63";
        messaggioSegreto.style.position = "absolute";
        messaggioSegreto.style.bottom = "10px";
        messaggioSegreto.style.left = "50%";
        messaggioSegreto.style.transform = "translateX(-50%)";
        container.appendChild(messaggioSegreto);
    });

    container.addEventListener('mouseout', () => {
        const messaggioSegreto = container.querySelector('p');
        if (messaggioSegreto) {
            container.removeChild(messaggioSegreto);
        }
    });
});
