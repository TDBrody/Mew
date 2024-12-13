
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
};
const alertAudio = document.getElementById('alertAudio');

// Function to detect when dev tools are open
function isDevToolsOpen() {
  // Check if the console window size is different from the viewport size
  return window.outerHeight - window.innerHeight > 100;
}

// Play the audio alert

let curseInterval; // Variable to hold the curse interval


document.querySelectorAll(".MeowMeow").forEach(photo => { 
  photo.addEventListener("click", event => {
    const rect = photo.getBoundingClientRect();
    const x = event.clientX - rect.left; // X-coordinate relative to the image
    const y = event.clientY - rect.top;  // Y-coordinate relative to the image

    // Create a canvas for pixel data detection
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = photo.width;
    canvas.height = photo.height;

    // Draw the image on the canvas
    ctx.drawImage(photo, 0, 0, photo.width, photo.height);

    // Get pixel data
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    // Check alpha value (index 3 is the alpha channel)
    if (pixel[3] > 0) {
      // Non-transparent part clicked
      const xCenter = rect.left + rect.width / 2; // Center X
      const yCenter = rect.top + rect.height / 2; // Center Y
      createExplosion(xCenter, yCenter);
    } else {
      // Transparent part clicked
      console.log('Transparent area clicked, activating curse.');
      activateCurse();
    }
  });
});

// Function to activate the curse
function activateCurse() {
  const curseMessage = document.createElement('div');
  curseMessage.textContent = "You were cursed by a chunky cat!";
  curseMessage.style.position = "fixed";
  curseMessage.style.top = "10px";
  curseMessage.style.right = "10px";
  curseMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  curseMessage.style.color = "white";
  curseMessage.style.padding = "10px 20px";
  curseMessage.style.borderRadius = "5px";
  curseMessage.style.fontSize = "16px";
  curseMessage.style.opacity = "0";
  curseMessage.style.transition = "opacity 0.5s ease";
  document.body.appendChild(curseMessage);

  // Fade in the message
  setTimeout(() => curseMessage.style.opacity = "1", 10);

  // Fade out the message after 3 seconds
  setTimeout(() => curseMessage.style.opacity = "0", 3000);

  // Remove the message after it fades out
  setTimeout(() => curseMessage.remove(), 3500);

  // Start decrementing the score
  if (!curseInterval) {
    curseInterval = setInterval(() => {
      score -= 50000; // Decrease score
      const scoreElement = document.getElementById('score'); // Update score display
      if (scoreElement) {
        scoreElement.textContent = "Score: " + score;
      }
    }, 10); // Every 10 milliseconds
  }

  // Stop the curse after 3 seconds
  setTimeout(() => {
    clearInterval(curseInterval);
    curseInterval = null; // Reset the curse interval
  }, 3000);
}

//new styff
// Function to generate the additional message based on the current score
function generateAdditionalMessage(score) {

  if (score < 0) {
    return "You are in the negatives lol omg.";
  } else if (score < 1) {
    return "You can do this! I will cheer you on!";
  } else if (score < 10) {
    return "You can't do this! I will not cheer you on!";
  } else if (score < 20) {
    return "Unrelated question, which show is better, outer banks or stranger things. just kidding I don't care about your opinion... ... although stranger things is better only a little in my humble opinoion";
  } else if (score < 100) {
    return "Hurry it up buckaroo before you get into the negitives.";
  } else if (score < 1_000) {
    return "Buddy chum pal friend amigo bud please... PLEASE... PLEEEEAAAASE get better at this game.";
  } else if (score < 20_000) {
    return "Pro tip... click the cat... not that cat though, the other cat.";
  } else if (score < 50_000) {
    return "You'll get there I believe in you... not very much but I do.";
  } else if (score < 80_000) {
    return "You suck at this game! Sorry, I couldn't think of something more creative to say.";
  } else if (score < 100_000) {
    return "This is actually embarrasing, get better right now.";
  } else if (score < 120_000) {
    return "It's futile... NOT EVEN CLOSE! GET BETTER!";
  } else if (score < 150_000) {
    return "Who let you cook. Never cook again.";
  } else if (score < 180_000) {
    return "You suck. Quit the game. Go play something else.";
  } else if (score < 200_000) {
    return "Pick up the pace, jesus christ you are slow, good luck winning at this pace!";
  } else if (score < 300_000) {
    return "You're actually getting a little bit better. By the way, Rowl";
  } else if (score < 400_000) {
    return "Get a life.";
  } else if (score < 450_000) {
    return "Press control shift w to get more points.";
  } else if (score < 500_000) {
    return "Which is better, cats or dogs... ... just kidding I don't care.";
  } else if (score < 600_000) {
    return "You are getting better at... at... at... wait what is the name of this game again?";
  } else if (score < 700_000) {
    return "This is good progress, except not really, because it isn't";
  } else if (score < 800_000) {
    return "Can you try a little bit harder please, you could litteraly train a goldfish to be better at this game than you are. HAHAHAH";
  } else if (score < 900_000) {
    return "It was a slow start, but you're getting there.";
  } else if (score < 1_000_000) {
    return "You got past one million, ";
  } else if (score < 2_000_000) {
    return "Wowza you are awful at this game. Get good, bud.";
  } else if (score < 10_000_000) {
    return "Ok, you're not as bad, but you still suck. Keep it up.";
  } else if (score < 30_000_000) {
    return "This is actually good, not gonna lie. At this rate, you might really win.";
  } else if (score < 32_000_000) {
    return "What's the name of that song that goes... lah lah lah lah LAH LAAAAH LAH LAh!";
  } else if (score < 40_000_000) {
    return "Nice you are almost half way there... what are you doing with your life though";
  } else if (score < 50_000_000) {
    return "Trip on a rock... I mean... nice job.";
  } else if (score < 60_000_000) {
    return "Ok job. That's all you get.";
  } else {
    return "Nice job!";
  }
}

// Function to read out the score
function readScore(score) {
  if ('speechSynthesis' in window) {
    const pointsToWin = 100_000_000 - score;
    let messageText = `You have ${score} points! You are only ${pointsToWin} points away from winning.`;

    // Append the additional message
    messageText += ` ${generateAdditionalMessage(score)}`;

    const message = new SpeechSynthesisUtterance(messageText);
    message.pitch = 1;
    message.rate = 1;
    message.volume = 1;

    window.speechSynthesis.speak(message);
  }
}

// Function to start reading the score every 20 seconds
function startScoreReader(getScoreCallback) {
  if (!('speechSynthesis' in window)) {
    // Exit if speech synthesis is not supported
    return;
  }

  setInterval(() => {
    const currentScore = getScoreCallback(); // Get the current score from the provided callback
    readScore(currentScore);
  }, 20000); // 20,000 ms = 20 seconds
}

// Example usage:

// Replace this with your actual score retrieval logic


// Function to retrieve the current score
const getScore = () => score;

// Simulate score updates for testing (remove in production)


// Start the score reader
startScoreReader(getScore);
let isActive = false;
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
            score += 5000000; // Increment score
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

// Example trigger loop running every second
document.addEventListener('DOMContentLoaded', () => {
    setInterval(attemptTriggerRainbowEvent, 1000); // Check once per second
});

