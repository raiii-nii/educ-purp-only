const messages = [
    "Sure ka?",
    "Sure nagid na??",
    "legit, wala?",
    "Please ssob...",
    "Isipa tarong!",
    "Indi gid? mahibi nalang ko...",
    "Sad ko kung wala gid...",
    "very very very sad :((",
    "Walabl gid??",
    "Pag oo na bala"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}