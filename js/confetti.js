// js/confetti.js

let confettiTimeout; // To clear previous confetti if needed

function generateConfetti() {
  // Create a new canvas element for confetti
  const canvas = document.createElement("canvas");
  const mainContent = document.querySelector("main");
  mainContent.appendChild(canvas); // Append the canvas inside the content area
  const ctx = canvas.getContext("2d");

  // Set canvas size to match the full window size (viewport size)
  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  const confetti = [];
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

  function createConfetti() {
    for (let i = 0; i < 300; i++) {
      confetti.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 10 + 2,
        speed: Math.random() * 5 + 1,
        angle: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, W, H); // Clear the canvas before redrawing
    for (let i = 0; i < confetti.length; i++) {
      const c = confetti[i];
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.speed;  // Move confetti down
      c.x += Math.cos(c.angle) * c.speed; // Horizontal movement
      c.rotation += c.speed;  // Rotation
    }
  }

  createConfetti();  // Create confetti particles
  confettiTimeout = setInterval(drawConfetti, 20);  // Start drawing animation
}

// Initially trigger the confetti when the page loads
window.onload = generateConfetti;

// Add functionality to trigger confetti on button click
const confettiButton = document.getElementById("show-confetti-btn");
confettiButton.addEventListener("click", () => {
  clearInterval(confettiTimeout);  // Clear any existing confetti effect
  const canvas = document.getElementById("confetti-canvas");
  if (canvas) {
    canvas.remove();  // Remove the existing confetti canvas from the page
  }
  generateConfetti();  // Generate new confetti
});
