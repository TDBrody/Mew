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
    mew.addEventListener('click',() => {
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
     raikou.addEventListener('click',() => {
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
    tigger.addEventListener('click',() => {
        addScore(-200000, 200000);
        raikouAudio.play();
        
       const maxWidth = window.innerWidth - mew.offsetWidth;
       const maxHeight = window.innerHeight - mew.offsetHeight;
       const randomX = Math.floor(Math.random() * maxWidth);
       const randomY = Math.floor(Math.random() * maxHeight);
        tigger.style.left = `${randomX}px`;
        tigger.style.top = `${randomY}px`;
   });
    const gracie = document.getElementById('gracie');
    gracie.addEventListener('click',() => {
        addScore(-30000000, 10000000);
        raikouAudio.play();
        
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

window.onload = positionImages;
window.onresize = positionImages;
// The Dot object used to scaffold the dots
var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.colorOffset = Math.random() * 360; // Random starting hue
    this.node = (function() {
      var n = document.createElement("div");
      n.className = "trail";
      document.body.appendChild(n);
      return n;
    }());
  };
  
  // The Dot.prototype.draw() method sets the position of the object's <div> node
  Dot.prototype.draw = function() {
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
  
    dots.forEach(function(dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.6;
      y += (nextDot.y - dot.y) * 0.6;
    });
  }
  
  // Track mouse position
  addEventListener("mousemove", function(event) {
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
  
  