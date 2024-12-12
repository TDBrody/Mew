
let score = 0;
const scoreElement = document.getElementById('score');

function subtractScore() {
  score -= 100;
  scoreElement.textContent = "Score: " + score;

  // Check win condition
  if (score > 100000000) {
    alert('You Win!');
  }
}

setInterval(subtractScore, 50);

document.addEventListener('DOMContentLoaded', () => {
  const mew = document.getElementById('mew');
  const mewAudio = document.getElementById('MewMewMeeew');
  mew.addEventListener('click', () => {
    addScore(0, 100000);
    mewAudio.play();

    const maxWidth = window.innerWidth - mew.offsetWidth;
    const maxHeight = window.innerHeight - mew.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    mew.style.left = `${randomX}px`;
    mew.style.top = `${randomY}px`;
  });
  const raikou = document.getElementById('raikou');
  const raikouAudio = document.getElementById('marmar');
  raikou.addEventListener('click', () => {
    addScore(-100000, 269000);
    raikouAudio.play();

    const maxWidth = window.innerWidth - mew.offsetWidth;
    const maxHeight = window.innerHeight - mew.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    raikou.style.left = `${randomX}px`;
    raikou.style.top = `${randomY}px`;
  });
  const tigger = document.getElementById('tigger');
  const tiggerAudio = document.getElementById('Mwa');
  tigger.addEventListener('click', () => {
    addScore(-200000, 200000);
    tiggerAudio.play();

    const maxWidth = window.innerWidth - mew.offsetWidth;
    const maxHeight = window.innerHeight - mew.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    tigger.style.left = `${randomX}px`;
    tigger.style.top = `${randomY}px`;
  });
  const gracie = document.getElementById('gracie');
  const gracieAudio = document.getElementById('Barp');
  gracie.addEventListener('click', () => {
    addScore(-30000000, 10000000);
    gracieAudio.play();

    const maxWidth = window.innerWidth - mew.offsetWidth;
    const maxHeight = window.innerHeight - mew.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    gracie.style.left = `${randomX}px`;
    gracie.style.top = `${randomY}px`;
  });
});

function addScore(min, max) {
  // Add a random number between 1 and 100 to the score
  score += Math.floor(Math.random() * (max - min)) + min;
  scoreElement.textContent = "Score: " + score;
}



function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function positionImages() {
  const images = document.querySelectorAll('.MeowMeow');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  images.forEach(image => {
    const imgWidth = image.clientWidth;
    const imgHeight = image.clientHeight;
    const randomX = getRandomPosition(viewportWidth - imgWidth);
    const randomY = getRandomPosition(viewportHeight - imgHeight);

    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;
  });
}


window.onresize = positionImages;
// The Dot object used to scaffold the dots
var Dot = function () {
  this.x = 0;
  this.y = 0;
  this.colorOffset = Math.random() * 360; // Random starting hue
  this.node = (function () {
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

// The Dot.prototype.draw() method sets the position of the object's <div> node
Dot.prototype.draw = function () {
  this.colorOffset += 0.2; // Slower hue transition
  if (this.colorOffset >= 360) this.colorOffset = 0; // Loop hue value

  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  this.node.style.background = `hsl(${this.colorOffset}, 100%, 50%)`; // Vivid rainbow
};

// Create the dots
var dots = [],
  mouse = { x: 0, y: 0 };

// Increase the number of dots for smoother transitions
for (var i = 0; i < 50; i++) { // More dots = smoother trail
  var d = new Dot();
  dots.push(d);
}

// Draw function
function draw() {
  var x = mouse.x,
    y = mouse.y;

  dots.forEach(function (dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.6;
    y += (nextDot.y - dot.y) * 0.6;
  });
}

// Track mouse position
addEventListener("mousemove", function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// Animate function
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// Start the animation
animate();
// Particle Class
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = Math.random() * 2 * Math.PI; // Random direction
    this.speed = Math.random() * 4 + 2; // Random speed
    this.size = Math.random() * 6 + 4; // Random size
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random rainbow color
    this.life = 1; // Life starts at 100%
    this.node = document.createElement("div");
    this.node.className = "particle";
    this.node.style.background = this.color;
    this.node.style.width = `${this.size}px`;
    this.node.style.height = `${this.size}px`;
    document.body.appendChild(this.node);
  }

  update() {
    // Move particle outward
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Fade out particle
    this.life -= 0.02;
    if (this.life <= 0) {
      this.node.remove(); // Remove particle when life ends
      return false;
    }

    // Update position and opacity
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.opacity = this.life;
    return true;
  }
}

// Create Explosion Function
function createExplosion(x, y) {
  const particles = [];
  for (let i = 0; i < 50; i++) { // Number of particles
    const particle = new Particle(x, y);
    particles.push(particle);
  }

  function animate() {
    for (let i = particles.length - 1; i >= 0; i--) {
      if (!particles[i].update()) {
        particles.splice(i, 1); // Remove dead particles
      }
    }
    if (particles.length > 0) {
      requestAnimationFrame(animate); // Continue animation if particles exist
    }
  }

  animate();
}

// Add Click Event Listener to Photos
document.querySelectorAll(".MeowMeow").forEach(photo => {
  photo.addEventListener("click", event => {
    const rect = photo.getBoundingClientRect();
    const x = rect.left + rect.width / 2; // Center of the photo
    const y = rect.top + rect.height / 2;
    createExplosion(x, y);
  });
});




document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('popup1').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }, 60000); // 60000 milliseconds = 1 minute

  setTimeout(function () {
    document.getElementById('popup2').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }, 150000); // 120000 milliseconds = 2 minutes
  setTimeout(function () {
    document.getElementById('popup3').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }, 210000); // 120000 milliseconds = 2 minutes
  setTimeout(function () {
    document.getElementById('popup4').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }, 400000); // 120000 milliseconds = 2 minutes
  setTimeout(function () {
    document.getElementById('popup5').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }, 500000); // 120000 milliseconds = 2 minutes
});


window.onload = positionImages;
window.onresize = positionImages;

// Close the first popup and overlay when the close button is clicked
document.getElementById('popup1-close').onclick = function () {
  document.getElementById('popup1').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
};

// Close the second popup and overlay when the close button is clicked
document.getElementById('popup2-close').onclick = function () {
  document.getElementById('popup2').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
};
document.getElementById('popup3-close').onclick = function () {
  document.getElementById('popup3').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
};
document.getElementById('popup4-close').onclick = function () {
  document.getElementById('popup4').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
};
document.getElementById('popup5-close').onclick = function () {
  document.getElementById('popup5').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}; let isActive = false;
let cooldown = false;

// Function to create particles
function createRainbowSpeedLine() {
  const particle = document.createElement('div');
  particle.classList.add('speed-particle');

  // Randomize position within the rectangle
  const rect = document.getElementById('rainbow-rectangle').getBoundingClientRect();
  const x = Math.random() * rect.width;
  const y = Math.random() * rect.height;

  particle.style.left = `${rect.left + x}px`;
  particle.style.top = `${rect.top + y}px`;
  document.body.appendChild(particle);

  // Remove the particle after animation ends
  particle.addEventListener('animationend', () => particle.remove());
}

// Main function to handle the event
function triggerRainbowEvent() {
  if (isActive || cooldown) return; // Prevent duplicate triggers

  const rainbowRectangle = document.getElementById('rainbow-rectangle');
  const donutImage = document.getElementById('donut-image');

  // Activate the event
  isActive = true;
  cooldown = true;

  // Show rectangle with animation
  rainbowRectangle.style.display = 'block';
  rainbowRectangle.style.animation = 'growRectangle 1s ease-out forwards, rainbowShift 3s linear infinite';

  // Start particle animation
  const particleInterval = setInterval(createRainbowSpeedLine, 100);

  // Show the donut after 1 second
  setTimeout(() => {
    donutImage.style.display = 'block';
    donutImage.style.animation = 'donutAppear 1s ease-out forwards';

    // After 1 second, hide the donut and start clean-up
    setTimeout(() => {
      score += 500000; // Increment score
      console.log(`Score: ${score}`);

      // Hide the donut
      donutImage.style.animation = 'donutFadeOut 1s ease-out forwards';
      donutImage.addEventListener('animationend', () => {
        donutImage.style.display = 'none';
      });

      // Shrink and hide the rectangle
      rainbowRectangle.style.animation = 'shrinkRectangle 1s ease-in forwards';
      setTimeout(() => {
        rainbowRectangle.style.display = 'none';
        clearInterval(particleInterval); // Stop particles
        isActive = false; // Reset active state

        // Start cooldown timer
        setTimeout(() => {
          cooldown = false;
        }, 10000); // 10-second cooldown
      }, 1000); // Match shrinkRectangle duration
    }, 1000); // Donut visibility duration
  }, 1000); // Delay before donut appears
}

// Probability-based event triggering logic (1/60 chance per second)
function attemptTriggerRainbowEvent() {
  if (Math.random() < 1 / 60) { // 1/60 chance to trigger
    triggerRainbowEvent();
  }
}

const alertAudio = document.getElementById('alertAudio');

// Function to detect if dev tools are open
function isDevToolsOpen() {
  const threshold = 100; // Threshold for the console size (px)

  // Check if the window's inner height is larger than a certain value
  return window.outerHeight - window.innerHeight > threshold;
}

// Function to trigger audio alert
function playAlertAudio() {
  alertAudio.play();
}

// Listen for changes in the window size to detect dev tools opening/closing
let devToolsOpened = false;

window.addEventListener('resize', () => {
  if (isDevToolsOpen() && !devToolsOpened) {
    // If dev tools were not already detected, trigger the alert
    devToolsOpened = true;
    playAlertAudio();
  } else if (!isDevToolsOpen() && devToolsOpened) {
    // If dev tools are closed, reset the flag
    devToolsOpened = false;
  }
});