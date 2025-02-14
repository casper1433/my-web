// Select elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMessage = document.getElementById("responseMessage");
const scrollIcon = document.querySelector(".scroll-icon");

yesBtn.addEventListener("click", () => {
  responseMessage.style.display = "block";
  scrollIcon.style.display = "block";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// When "No" is clicked (funny effect)
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});

// Selecting the card stack
const cardStack = document.getElementById("cardStack");

// On click, move the first image to the back of the stack
cardStack.addEventListener("click", () => {
  cardStack.appendChild(cardStack.firstElementChild);
});
const galleryImages = document.querySelectorAll(".gallery-img")
let index = 0;

function changeImage() {
  galleryImages.forEach(img => img.style.opacity = "0.3"); // Fade out all images
  galleryImages[index].style.opacity = "1"; // Highlight one image
  index = (index + 1) % galleryImages.length;
}

setInterval(changeImage, 3000);

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 100; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 2,
    d: Math.random() * 10 + 5
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "pink";

  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  });

  confetti.forEach(c => {
    c.y += c.d / 5;
    if (c.y > canvas.height) c.y = 0;
  });

  requestAnimationFrame(drawConfetti);
}

window.addEventListener("scroll", () => {
  const cardSection = document.querySelector(".card-section");
  if (window.scrollY >= cardSection.offsetTop - window.innerHeight / 2) {
    drawConfetti();
  }
});