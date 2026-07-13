0;
// ============================
// Hero Image Mouse Effect
// ============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// ============================
// Parallax Hero
// ============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (!hero) return;

  const offset = window.pageYOffset;

  hero.style.backgroundPosition = `center ${offset * 0.35}px`;
});

// ============================
// Scroll Animation
// ============================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll(".product-card,.about,.gallery img,.order,.stat")
  .forEach((el) => {
    el.classList.add("hidden");

    observer.observe(el);
  });

// ============================
// Counter
// ============================

const counters = document.querySelectorAll(".stat h2");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;

    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    const suffix = text.replace(/[0-9]/g, "");

    let current = 0;

    const speed = number / 80;

    function update() {
      current += speed;

      if (current < number) {
        counter.innerText = Math.floor(current) + suffix;

        requestAnimationFrame(update);
      } else {
        counter.innerText = number + suffix;
      }
    }

    update();

    counterObserver.unobserve(counter);
  });
});

counters.forEach((counter) => {
  counterObserver.observe(counter);
});
