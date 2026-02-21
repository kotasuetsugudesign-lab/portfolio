// =====================================
// DOM Ready
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // Header 背景変化
  // ================================

  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    });
  }


  // ================================
  // Fade In Animation
  // ================================

  const targets = document.querySelectorAll(".section, .hero-inner, .footer");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  targets.forEach(target => {
    target.classList.add("fade-up");
    observer.observe(target);
  });


  // ================================
  // Hamburger Menu
  // ================================

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header-nav");
  const navLinks = document.querySelectorAll(".header-list a");

  if (hamburger && nav) {

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // リンククリックで閉じる
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });

    // Escキーで閉じる
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  }


  // ================================
  // Scroll Spy（現在地ハイライト）
  // ================================

  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      const navLink = document.querySelector(
        '.header-list a[href="#' + sectionId + '"]'
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add("active");
      } else {
        navLink?.classList.remove("active");
      }
    });
  });


  // ================================
  // Hero Parallax（PCのみ）
  // ================================

  const hero = document.querySelector(".hero");

  if (hero && window.innerWidth > 768) {
    window.addEventListener("scroll", () => {
      hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
    });
  }

});