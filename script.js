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

const galleryImages = document.querySelectorAll(".gallery-img")
let index = 0;

function changeImage() {
  galleryImages.forEach(img => img.style.opacity = "0.3"); // Fade out all images
  galleryImages[index].style.opacity = "1"; // Highlight one image
  index = (index + 1) % galleryImages.length;
}

setInterval(changeImage, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  // Resize canvas to fit screen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Create confetti particles
  const confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2, // Random size
      d: Math.random() * 5 + 0.1, // Speed
      color: `hsl(${Math.random() * 360}, 100%, 70%)` // Random colors
    });
  }

  // Draw confetti particles
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c) => {
      ctx.fillStyle = c.color;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
    });

    confetti.forEach((c) => {
      c.y += c.d / 5; // Falling speed
      if (c.y > canvas.height) c.y = 0; // Reset when out of screen
    });

    requestAnimationFrame(drawConfetti);
  }

  // ✅ Fix: Ensure .card-section exists after the page has loaded
  window.addEventListener("scroll", () => {
    const cardSection = document.querySelector(".card-section");

    if (cardSection) { // ✅ Only run if cardSection exists
      if (window.scrollY >= cardSection.offsetTop - window.innerHeight / 2) {
        drawConfetti(); // Start confetti animation
      }
    } else {
      console.error("⚠️ Error: .card-section not found in the document.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.querySelector(".hearts-container");

  if (!heartsContainer) {
    console.error("⚠️ Error: .hearts-container not found in the document.");
    return; // Stop the script if the container is missing
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 500);
});


document.addEventListener("DOMContentLoaded", function () {
  const cardStack = document.getElementById("cardStack");

  cardStack.addEventListener("click", () => {
    const firstCard = cardStack.firstElementChild;
    firstCard.style.transform = "rotateY(180deg)"; // Flip effect
    setTimeout(() => {
      firstCard.style.transform = "rotateY(0deg)";
      cardStack.appendChild(firstCard); // Move first card to the back
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.querySelector(".gallery-section");

  function showGallery() {
    if (window.scrollY >= gallerySection.offsetTop - window.innerHeight / 2) {
      gallerySection.classList.add("show");
    }
  }

  window.addEventListener("scroll", showGallery);
});

function initMap() {
  // List of special locations
  const places = [
    { name: "First aphay pay ❤️", location: { lat: 16.774494701076662, lng: 96.16280282315765 } }, // Example: NYC
    { name: "First 2 yout htal trip ✈️", location: { lat: 16.863851057060366, lng: 94.38500383380556 } }, // Example: LA
    { name: "The most Happiest times", location: { lat: 13.742336270893615, lng:  100.54696412770949 } } // Example: London
  ];

  // Create the map, centered on the first location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: places[0].location
  });

  // Add markers to the map
  places.forEach(place => {
    new google.maps.Marker({
      position: place.location,
      map: map,
      title: place.name
    });
  });
}
