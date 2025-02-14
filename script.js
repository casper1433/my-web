const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMessage = document.getElementById("responseMessage");
const scrollIcon = document.querySelector(".scroll-icon");

// When "Yes" is clicked
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