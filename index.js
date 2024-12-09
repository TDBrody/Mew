let score = 0;
const scoreElement = document.getElementById('score');

function subtractScore() {
    score -= 300000;
    scoreElement.textContent = "Score: " + score;

    // Check win condition
    if (score > 100000000) {
        alert('You Win!');
    }
}

setInterval(subtractScore, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const mew = document.getElementById('mew');
    const mewAudio = document.getElementById('MewMewMeeew');
    mew.addEventListener('click',() => {
        addScore(0, 100000);
        mewAudio.play();
        mew.style.left = `${randomX}px`;
        mew.style.top = `${randomY}px`;
    });
     const raikou = document.getElementById('raikou');
     const raikouAudio = document.getElementById('marmar');
     mew.addEventListener('click',() => {
         addScore(-1000000, 2690000);
         mewAudio.play();
         mew.style.left = `${randomX}px`;
    -     mew.style.top = `${randomY}px`;
    });
});

function addScore(min, max) {
        // Add a random number between 1 and 100 to the score
        score += Math.floor(Math.random() * (max - min)) + min;
        scoreElement.textContent = "Score: " + score;
        const maxWidth = window.innerWidth - mew.offsetWidth;
        const maxHeight = window.innerHeight - mew.offsetHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
}

var element = new Image;
var devtoolsOpen = false;
element.__defineGetter__("id", function () {
    devtoolsOpen = true; // This only executes when devtools is open.
});
setInterval(function () {
    devtoolsOpen = false;
    console.log(element);
    if (devtoolsOpen) {
        alert("CHEATER");
    }
}, 100);