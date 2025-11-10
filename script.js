// 🎈 Balloon animation
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = 3 + Math.random() * 2 + "s";

  // Random pastel colors
  const colors = ["#ffb6ff", "#d0aaff", "#cdb4db", "#f3c4fb"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 5000);
}
setInterval(createBalloon, 500);

// 🎵 Auto play music
function playSong() {
  const song = document.getElementById("birthdaySong");
  if (song) {
    song.play().catch(() => {
      console.log("Autoplay blocked. User must click play.");
    });
  }
}

// 🎬 Slideshow with captions
let index = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  index = (index + 1) % slides.length;
}
setInterval(startSlideshow, 4000);

// 🎂 Load wishes
function loadWishes() {
  fetch("fetch_wishes.php")
    .then(response => response.text())
    .then(data => {
      const wishList = document.getElementById("wishListContainer");
      if (wishList) wishList.innerHTML = data;
    });
}

// 🎁 Submit wishes without reload
function setupWishForm() {
  const wishForm = document.getElementById("wishForm");
  if (!wishForm) return;

  wishForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);

    fetch("submit_wish.php", {
      method: "POST",
      body: formData
    })
    .then(() => {
      this.reset();
      const successMsg = document.getElementById("successMsg");
      if (successMsg) {
        successMsg.classList.remove("hidden");
        setTimeout(() => successMsg.classList.add("hidden"), 2000);
      }
      loadWishes();
    });
  });
}

// 🚀 Initialize everything when page loads
window.onload = function () {
  playSong();
  setupWishForm();
  loadWishes();
  startSlideshow();
  setInterval(loadWishes, 5000);
};


function enableSound() {
  const song = document.getElementById("birthdaySong");
  if (song) {
    song.muted = false; // unmute after first click
    song.play().catch(err => console.log("Playback blocked:", err));
  }
}

// First user click/tap will enable sound
document.addEventListener("click", enableSound, { once: true });

// Emoji Picker Toggle
const emojiBtn = document.getElementById("emojiBtn");
const emojiPicker = document.getElementById("emojiPicker");
const messageInput = document.getElementById("messageInput");

emojiBtn.addEventListener("click", () => {
  emojiPicker.classList.toggle("hidden");
});

emojiPicker.addEventListener("click", (e) => {
  if (e.target.textContent) {
    messageInput.value += e.target.textContent;
  }
});

// Reaction Handling
function addReactions(wishDiv) {
  const reactionsDiv = document.createElement("div");
  reactionsDiv.classList.add("reactions");

  const emojis = ["❤️", "😂", "🎂"];
  emojis.forEach((emoji) => {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.dataset.count = 0;

    span.addEventListener("click", () => {
      span.dataset.count++;
      span.textContent = `${emoji} ${span.dataset.count}`;
    });

    reactionsDiv.appendChild(span);
  });

  wishDiv.appendChild(reactionsDiv);
}

// Example: when fetching wishes, attach reactions
function displayWish(name, message) {
  const wishDiv = document.createElement("div");
  wishDiv.classList.add("wish");
  wishDiv.innerHTML = `<p><strong>${name}</strong></p><p>${message}</p>`;
  addReactions(wishDiv);
  document.getElementById("wishList").appendChild(wishDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  const emojiBtn = document.getElementById("emojiBtn");
  const emojiPicker = document.getElementById("emojiPicker");
  const messageInput = document.getElementById("messageInput");

  // Toggle emoji picker
  emojiBtn.addEventListener("click", () => {
    emojiPicker.classList.toggle("hidden");
  });

  // Insert emoji into text
  emojiPicker.addEventListener("click", (e) => {
    if (e.target.textContent.trim() !== "") {
      messageInput.value += e.target.textContent;
      messageInput.focus();
    }
  });

  // Close picker if clicking outside
  document.addEventListener("click", (e) => {
    if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
      emojiPicker.classList.add("hidden");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const emojiBtn = document.getElementById("emojiBtn");
  const emojiPicker = document.getElementById("emojiPicker");
  const messageInput = document.getElementById("messageInput");

  // Toggle emoji picker
  emojiBtn.addEventListener("click", (e) => {
    e.preventDefault();
    emojiPicker.classList.toggle("hidden");
  });

  // Insert emoji into textarea
  emojiPicker.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      messageInput.value += e.target.textContent;
      messageInput.focus();
    }
  });

  // Close if clicked outside
  document.addEventListener("click", (e) => {
    if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
      emojiPicker.classList.add("hidden");
    }
  });
});
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  // Random horizontal position
  balloon.style.left = Math.random() * 100 + "vw";

  // Random animation duration and size
  balloon.style.animationDuration = 3 + Math.random() * 3 + "s";
  const size = 20 + Math.random() * 30; // 20px - 50px
  balloon.style.width = size + "px";
  balloon.style.height = (size * 1.2) + "px";

  // Random pastel colors
  const colors = ["#ffb6ff", "#d0aaff", "#cdb4db", "#f3c4fb"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => balloon.remove(), 6000);
}

// Create balloons continuously
setInterval(createBalloon, 500);

