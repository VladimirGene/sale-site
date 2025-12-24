document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".accordion-item__header");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const item = this.nextElementSibling;

      const allItems = document.querySelectorAll(".accordion-item__body");
      const allTrigers = document.querySelectorAll(".accordion-item__header");

      allItems.forEach((p) => {
        if (p !== item) {
          p.style.height = "0";
        }
      });

      allTrigers.forEach((t) => {
        if (t !== this) {
          t.classList.remove("active");
        }
      });

      if (item.style.height === "0px" || item.style.height === "") {
        item.style.height = item.scrollHeight + "px";
        this.classList.add("active");
      } else {
        item.style.height = "0";
        this.classList.remove("active");
      }
    });
  });
});

let menu = document.querySelector(".header__nav-burger");
let navBar = document.querySelector(".header__nav");

menu.onclick = () => {
  menu.classList.toggle("clicked");
  navBar.classList.toggle("show");
};

// Закрытие при клике вне меню
document.addEventListener('click', (e) => {
  // Проверяем, был ли клик вне меню и не по бургеру
  if (!navBar.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("clicked");
    navBar.classList.remove("show");
  }
});

// Закрытие при клике на ссылки
const navLinks = document.querySelectorAll('.header__nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove("clicked");
    navBar.classList.remove("show");
  });
});
