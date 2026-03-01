// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// THEME DIMMER (COLOR-BASED)
const slider = document.getElementById("themeSlider");

slider.addEventListener("input", () => {
  const value = slider.value; // 0 → 100
  const ratio = value / 100;

  /* BACKGROUND: dark → white */
  const bg = Math.floor(22 + ratio * (255 - 22));
  document.documentElement.style.setProperty(
    "--bg",
    `rgb(${bg}, ${bg}, ${bg})`
  );

  /* TEXT: white → black */
  const text = Math.floor(235 - ratio * 235);
  document.documentElement.style.setProperty(
    "--text",
    `rgb(${text}, ${text}, ${text})`
  );

  /* NAVBAR RED: deep wine → soft muted red */
  const red = Math.floor(179 + ratio * (255 - 179));
  const green = 0;
  const blue = 0;

  document.documentElement.style.setProperty(
    "--nav",
    `rgb(${red}, ${green}, ${blue})`
  );
});

// STAR TOGGLER
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("open");
});

// CLOSE MENU WHEN LINK CLICKED (MOBILE)
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});

// OPTIONAL: click outside to close menu
window.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  }
});
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".item img").forEach(img => {
  img.onclick = () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };
});

lightbox.onclick = () => {
  lightbox.style.display = "none";
};

// Simple lightbox for project images
const projectsLightbox = document.getElementById("projects-lightbox");
const projectsLightboxImg = document.getElementById("projects-lightbox-img");

if (projectsLightbox && projectsLightboxImg) {
  // Open lightbox on image click
  document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", e => {
      projectsLightbox.style.display = "flex";
      projectsLightboxImg.src = e.target.src;
    });
  });

  // Close lightbox when clicking anywhere
  projectsLightbox.addEventListener("click", () => {
    projectsLightbox.style.display = "none";
    projectsLightboxImg.src = ""; // optional: reset
  });
}