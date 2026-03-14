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

const slider = document.getElementById("themeSlider");

const savedTheme = localStorage.getItem("themeSliderValue");
if (savedTheme) {
  slider.value = savedTheme;
  applyTheme(savedTheme);
}

slider.addEventListener("input", () => {
  const value = slider.value;
  localStorage.setItem("themeSliderValue", value); // save current value
  applyTheme(value);
});

function applyTheme(value) {
  const ratio = value / 100;

  const bg = Math.floor(22 + ratio * (255 - 22));
  document.documentElement.style.setProperty("--bg", `rgb(${bg}, ${bg}, ${bg})`);

  const text = Math.floor(235 - ratio * 235);
  document.documentElement.style.setProperty("--text", `rgb(${text}, ${text}, ${text})`);

  const red = Math.floor(179 + ratio * (255 - 179));
  const green = 0;
  const blue = 0;
  document.documentElement.style.setProperty("--nav", `rgb(${red}, ${green}, ${blue})`);
}
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("open");
});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});

window.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  }
});
const homeLightbox = document.getElementById("lightbox");
const homeLightboxImg = document.getElementById("lightbox-img");

if (homeLightbox && homeLightboxImg) {

  document.querySelectorAll(".item img").forEach(img => {
    img.onclick = () => {
      homeLightbox.style.display = "flex";
      homeLightboxImg.src = img.src;
    };
  });

  homeLightbox.onclick = () => {
    homeLightbox.style.display = "none";
  };

}

const expandBtns = document.querySelectorAll(".expand-btn");

const projectLightbox = document.getElementById("projects-lightbox");
const projectImg = document.getElementById("projects-lightbox-img");
const projectTitle = document.getElementById("lightbox-title");
const projectMeta = document.getElementById("lightbox-meta");
const projectDesc = document.getElementById("lightbox-desc");

const closeBtn = document.querySelector(".close-lightbox");

if (expandBtns.length > 0 && projectLightbox) {

  expandBtns.forEach(btn => {

    btn.addEventListener("click", e => {

      const card = e.target.closest(".card");

      const img = card.querySelector("img").src;
      const title = card.querySelector("h3").textContent;
      const meta = card.querySelector(".meta").textContent;
      const desc = card.querySelector("p").textContent;

      projectImg.src = img;
      projectTitle.textContent = title;
      projectMeta.textContent = meta;
      projectDesc.textContent = desc;

      projectLightbox.classList.add("active");

    });

  });

}

if (closeBtn) {
  closeBtn.onclick = () => {
    projectLightbox.classList.remove("active");
  };
}

if (projectLightbox) {
  projectLightbox.onclick = (e) => {
    if (e.target === projectLightbox) {
      projectLightbox.classList.remove("active");
    }
  };
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section").forEach((sec, i) => {
    setTimeout(() => sec.classList.add("visible"), i * 150); // stagger sections
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".item, .card").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 100);
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => loader.remove(), 500);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".item, .card, .section").forEach(el => observer.observe(el));

const projects = [{
    src: 'img/1.jpg'
  },
  {
    src: 'img/22.jpg'
  },
  {
    src: 'img/18.jpg'
  },
  {
    src: 'img/15.jpg'
  },
  {
    src: 'img/16.jpg'
  },
  {
    src: 'img/14.jpg'
  }
];

function getRandomProjects(arr, n) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const previewContainer = document.querySelector('.preview-thumbs');
const randomProjects = getRandomProjects(projects, 3);

randomProjects.forEach(project => {
  const thumbLink = document.createElement('a');
  thumbLink.href = 'projects.html';
  thumbLink.className = 'thumb-link';
  thumbLink.innerHTML = `<img src="${project.src}" alt="Project Thumbnail">`;
  previewContainer.appendChild(thumbLink);
});