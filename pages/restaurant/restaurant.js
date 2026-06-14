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
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const menuImages = document.querySelectorAll(".menu-img");

menuImages.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.stopPropagation();
    modalImage.src = this.src;
    modal.classList.add("show");
  });
});

modal.addEventListener("click", function () {
  modal.classList.remove("show");
  modalImage.src = "";
});
