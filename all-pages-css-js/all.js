document.addEventListener("DOMContentLoaded", async () => {
  window.BASE = window.BASE_PATH || "";

  await loadComponent("header", BASE + "components/header.html");
  await loadComponent("footer", BASE + "components/footer.html");
  const logo = document.getElementById("logo-img");

  if (logo) {
    logo.src = BASE + "images/logo.jpg";
  }

  initNavigation();
  setAvailability(1);
  loadImages();
  initFadeAnimation();
});
window.openMenu = function () {
  document.getElementById("sideMenu")?.classList.add("open");
  document.getElementById("overlay")?.classList.add("show");
};

window.closeMenu = function () {
  document.getElementById("sideMenu")?.classList.remove("open");
  document.getElementById("overlay")?.classList.remove("show");
};
async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error("Failed to load: " + file);
    }

    element.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

function initNavigation() {
  const routes = {
    home: "index.html",
    restaurant: "pages/restaurant/restaurant.html",
    contact: "pages/contact/contact.html",
    products: "pages/products/products.html",
  };

  document.querySelectorAll("[data-page]").forEach((link) => {
    const page = link.dataset.page;

    if (routes[page]) {
      link.href = BASE + routes[page];
    }
  });

  const currentPage = document.body.dataset.page;

  document.querySelectorAll("[data-page]").forEach((link) => {
    link.classList.remove("active");

    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
}

function loadImages() {
  document.querySelectorAll("[data-src]").forEach((img) => {
    img.src = BASE + img.dataset.src;
  });
}
