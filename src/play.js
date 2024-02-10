'use strict';

let returnState = false;

const returnE = document.querySelector('.return');
const goBackButton = document.querySelector('.go-back');
const images = document.querySelectorAll('main > *');
const object = {
    rock: 1,
    paper: 2,
    scissors: 3
};

const createImage = (src, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}
const checkWinner = (player, ai) => {
    returnState = true;

    if (player === ai) {
        return ['It\'s a tie!', 0];
    } else if ((player === object.rock && ai === object.scissors) || (player === object.paper && ai === object.rock) || (player === object.scissors && ai === object.paper)) {
        return ['You Won!', 1];
    } else {
        return ['You Lost!', -1];
    }
}

// Game Logic
images.forEach((image) =>{
    image.onclick = () => {
        console.log('clicked');
        // Preventing multiple clicks
        if (image.classList.contains('player-picked')) return;

        // Player
        image.classList.add('player-picked');   
        images.forEach((image) => {
            if (!image.classList.contains('player-picked')) {
                image.classList.add('hidden');
            }
        });
        
        // AI
        const number = Math.floor(Math.random() * 3) + 1;
        let aiPick;
        if (number === object.rock) {
            aiPick = createImage('../assets/r.png', 'rock');
        } else if (number === object.paper) {
            aiPick = createImage('../assets/p.png', 'paper');
        } else {
            aiPick = createImage('../assets/s.png', 'scissors');
        }
        document.querySelector('main').appendChild(aiPick);
        aiPick.classList.add('ai-picked');

        // Winner
        const header = document.querySelector('h1'); let status;
        [header.textContent, status] = checkWinner(object[image.alt], number);

        if (status === 1) {
            document.querySelector('body').classList.add('win-background');
        } else if (status === -1) {
            document.querySelector('body').classList.add('lose-background');
        } else {
            document.querySelector('body').classList.add('draw-background');
        
        }
    }
});

// Go back to the main page
goBackButton.onclick = () => {
    window.location.href = "index.html";
}
window.onload = () => {
    if (performance.navigation.type === 1) {
        const images = document.querySelectorAll('main > *');
        images.forEach((image) => { image.classList.remove('anim-default');});
        window.location.href = "index.html";
    }
}

returnE.onclick = () => {
    if (returnState) {
        const aiPick = document.querySelector('.ai-picked');
        document.querySelector('body').classList.remove('win-background', 'lose-background', 'draw-background');
        document.querySelector('h1').textContent = 'Rock, Paper, Scissors';
        images.forEach((image) => {
            image.classList.remove('player-picked', 'hidden');
            if (aiPick) {
                aiPick.remove();
            }
        });
        returnState = false;
    }
};