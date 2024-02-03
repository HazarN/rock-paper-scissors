"use strict";

const rules       = `<p class="rules">• Rock beats scissor <br>• Paper beats rock<br>• Scissor beats paper</p>`;
const rulesButton = document.getElementById("rulesButton");

rulesButton.addEventListener("click", () => {
    if (document.querySelector(".rules")) {
        document.querySelector(".rules").remove();
        document.querySelector(".menu > button:nth-child(3)").remove();
    }

    const menu = document.querySelector('.menu');

    // Create a new paragraph element for the rules
    const rulesParagraph     = document.createElement('p');
    rulesParagraph.innerHTML = rules;
    rulesParagraph.classList.add('rules');
    menu.appendChild(rulesParagraph);

    // Create the close button
    const closeButton          = document.createElement('button');
    closeButton.style.fontSize = '65%';
    closeButton.innerHTML      = 'Close';
    menu.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        // Remove the rules paragraph and the close button when the close button is clicked
        menu.removeChild(rulesParagraph);
        menu.removeChild(closeButton);
    });
});

const gameButton   = document.getElementById("play");

gameButton.addEventListener("click", () => {
    window.location.href = "play.html";
});