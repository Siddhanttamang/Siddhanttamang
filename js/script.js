const scrollUpBtn = document.querySelector(".scroll-up-btn");
window.onscroll = function () {
  if (window.scrollY > 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
};

// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Section Animation on Scroll
const sections = document.querySelectorAll(".section");
const options = {
  threshold: 0.3,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});