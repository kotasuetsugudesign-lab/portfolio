// =====================
// Header Scroll Effect (Optimized with requestAnimationFrame)
// =====================

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector(".header");

      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
      }

      ticking = false;
    });

    ticking = true;
  }
});


// =====================
// Scroll Animation (IntersectionObserver)
// =====================

const animatedElements = document.querySelectorAll(
  ".look-full, .look-grid, .look-end, .philosophy"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => observer.observe(el));
}


// =====================
// Hamburger Menu (Accessible Version)
// =====================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");

    hamburger.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    // Accessibility attributes
    hamburger.setAttribute("aria-expanded", isOpen);
    nav.setAttribute("aria-hidden", !isOpen);
  });

  // Close Menu When Link Clicked
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.classList.remove("menu-open");

      hamburger.setAttribute("aria-expanded", false);
      nav.setAttribute("aria-hidden", true);
    });
  });
}


// =====================
// ESC Key to Close Menu (Pro Level UX Improvement)
// =====================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");

    hamburger.setAttribute("aria-expanded", false);
    nav.setAttribute("aria-hidden", true);
  }
});