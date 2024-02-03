'use strict';

const goBackButton = document.querySelector('.go-back');

goBackButton.onclick = () => {
    window.location.href = "index.html";
}

window.onload = () => {
    if (performance.navigation.type === 1) {
        window.location.href = "index.html";
    }
}