document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector(".header");
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav a");

  // ===============================
  // Header Scroll Effect
  // ===============================
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===============================
  // Fade Up (IntersectionObserver)
  // ===============================
  const fadeTargets = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeTargets.forEach(function (el) {
    observer.observe(el);
  });

  // ===============================
  // Hamburger Menu
  // ===============================
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    hamburger.setAttribute(
      "aria-expanded",
      nav.classList.contains("active")
    );
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

});