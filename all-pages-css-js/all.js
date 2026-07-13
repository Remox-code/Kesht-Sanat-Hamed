// ===============================
// بارگذاری کامپوننت
// ===============================

async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) throw new Error(`خطا در بارگذاری ${file}`);

    element.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

// ===============================
// اجرای اولیه
// ===============================

document.addEventListener("DOMContentLoaded", async () => {
  const BASE = window.BASE_PATH || "";

  // بارگذاری هدر و فوتر
  await loadComponent("header", BASE + "components/header.html");
  await loadComponent("footer", BASE + "components/footer.html");

  // ===============================
  // منوی همبرگری
  // ===============================

  window.openMenu = function () {
    document.getElementById("sideMenu")?.classList.add("open");
    document.getElementById("overlay")?.classList.add("show");
  };

  window.closeMenu = function () {
    document.getElementById("sideMenu")?.classList.remove("open");
    document.getElementById("overlay")?.classList.remove("show");
  };

  // ===============================
  // مسیر صفحات
  // ===============================

  const routes = {
    home: "index.html",
    products: "pages/products/products.html",
    restaurant: "pages/restaurant/restaurant.html",
    contact: "pages/contact/contact.html",
  };

  // لینک‌ها
  document.querySelectorAll("[data-page]").forEach((link) => {
    const page = link.dataset.page;

    if (routes[page]) {
      link.href = BASE + routes[page];
    }
  });

  // ===============================
  // لینک فعال
  // ===============================

  const currentPage = location.pathname.split("/").pop();

  document.querySelectorAll("[data-page]").forEach((link) => {
    const page = link.dataset.page;

    if (!routes[page]) return;

    const routeFile = routes[page].split("/").pop();

    if (routeFile === currentPage) {
      link.classList.add("active");
    }
  });

  // ===============================
  // لینک‌های اسکرول (در صورت وجود)
  // ===============================

  document.querySelectorAll("[data-scroll]").forEach((link) => {
    link.href = BASE + routes.products + "#" + link.dataset.scroll;
  });
});
