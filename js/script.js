// Dark mode toggle with localStorage memory
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    theme = "dark";
    themeToggle.textContent = "🌙 Dark Mode";
  } else {
    themeToggle.textContent = "🌞 Light Mode";
  }

  localStorage.setItem("theme", theme);
});

// Scroll reveal functionality
const revealElements = document.querySelectorAll("h2, .caption");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-reveal");
    }
  });
}, { threshold: 0.5 });

revealElements.forEach((el) => observer.observe(el));
