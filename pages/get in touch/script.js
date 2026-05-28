const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  menu.classList.add("open");
  overlay.classList.add("show");
}

function closeMenu() {
  menu.classList.remove("open");
  overlay.classList.remove("show");
}
