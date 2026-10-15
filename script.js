let currentPage = 1;
const totalPages = 5;
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function showPage(number) {
  document.querySelectorAll(".page").forEach((page, index) => {
    page.classList.toggle("active", index === number - 1);
  });

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === number - 1);
  });

  currentPage = number;
}

function nextPage() {
  if (currentPage < totalPages) showPage(currentPage + 1);
}

function restart() {
  showPage(1);
}

function startWebsite() {
  showPage(2);
  music.play().then(() => {
    musicBtn.textContent = "♫";
  }).catch(() => {
    musicBtn.textContent = "♪";
  });
}

function toggleMusic() {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.textContent = "♫";
    }).catch(() => {
      musicBtn.textContent = "♪";
    });
  } else {
    music.pause();
    musicBtn.textContent = "♪";
  }
}

/* Membuat hati putih berjatuhan terus-menerus */
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "falling-heart";
  heart.textContent = Math.random() > .5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 18) + "px";
  heart.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
  heart.style.animationDuration = (5 + Math.random() * 7) + "s";
  document.querySelector(".falling-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 13000);
}

setInterval(createHeart, 320);
for (let i = 0; i < 18; i++) setTimeout(createHeart, i * 120);
