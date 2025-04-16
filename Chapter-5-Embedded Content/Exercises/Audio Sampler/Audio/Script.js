const sounds = [
    'Ah-ha',
    'Back-of-the-net',
    'Bangou-to-forder',
    'Dan',
    'Email-for-the-evening',
    'Hello-Partridge',
    'I-ate-scotch-egg',
    'Im-confused',
]; /*Adds array with all the sound IDs*/

let currentPage = 0;
const buttonsPerPage = 4; /*Shows 4 buttons only*/

function renderButtons() {
    const start = currentPage * buttonsPerPage;
    const end = start + buttonsPerPage;
    const visibleSounds = sounds.slice(start, end); /*gets sounds only for the current page*/

    const container = document.getElementById('Sound-Buttons');
    container.innerHTML = ''; /*clears the old buttons*/

    visibleSounds.forEach((sound) => {
        const btn = document.createElement('button'); /*Make new button*/
        btn.classList.add('btn'); /*gives it styling*/
        btn.innerText = sound; /*Make it say the sound name*/

        btn.addEventListener('click', () => {
            StopSound(); /*Stop other sounds*/
            document.getElementById(sound).play(); /*play clicked one*/
        });

        container.appendChild(btn); /*Add to the page*/
    });
}

document.getElementById('back-button').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderButtons();
    }
}); /*back Arrow button*/

document.getElementById('next-button').addEventListener('click', () => {
    if ((currentPage + 1) * buttonsPerPage < sounds.length) {
        currentPage++;
        renderButtons();
    }
}); /*next Arrow button*/

function StopSound() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause(); /*Stops the sound*/
        song.currentTime = 0;
    });
}

const content = document.getElementById("content"); /*gets Textarea*/
const btnArea = document.getElementById("btnArea"); /*gets speak button*/

btnArea.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(content.value);
    window.speechSynthesis.speak(utterance); /*speak the text*/
});

renderButtons(); /*Show the first set of buttons*/