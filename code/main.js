// variable pour sélectionner tous les éléments de bouton
const buttons = document.querySelectorAll('.key');

// Fonction pour  le son
function playSound(event) {
    const key = event.type === 'click' ? event.target : document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);

    sound.currentTime = 0;
    sound.play();

    key.classList.add('playing');
}

// Fonction pour enlever la classe
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

buttons.forEach(button => {
    button.addEventListener('transitionend', removeTransition);
    button.addEventListener('click', playSound);
});