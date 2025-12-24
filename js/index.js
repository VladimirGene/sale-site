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
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector(".header__nav-burger");
  let navBar = document.querySelector(".header__nav");

  menu.onclick = () => {
    menu.classList.toggle("clicked");
    navBar.classList.toggle("show");
  };

  // Закрытие при клике вне меню
  document.addEventListener("click", (e) => {
    // Проверяем, был ли клик вне меню и не по бургеру
    if (!navBar.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("clicked");
      navBar.classList.remove("show");
    }
  });

  // Закрытие при клике на ссылки
  const navLinks = document.querySelectorAll(".header__nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("clicked");
      navBar.classList.remove("show");
    });
  });
});

const popUp = document.querySelector(".popup");
const popUpContent = popUp.querySelector(".popup__content"); // важно - контейнер контента
const popUpCloseBtn = popUp.querySelector(".popup__btn");
const popUpOpenBtns = document.querySelectorAll(".coach-card__button");
const popUpForm = popUp.querySelector("form");
const popUpOpenBtnsLinks = document.querySelectorAll(".programs-card__link");

// Открытие попапа по кнопкам "Записаться"
popUpOpenBtns.forEach((button) => {
  button.addEventListener("click", openPopUp);
});

popUpOpenBtnsLinks.forEach((button) => {
  button.addEventListener("click", openPopUp);
});

// Закрытие по кнопке X
popUpCloseBtn.addEventListener("click", closePopUp);

// Закрытие по клику вне попапа - ТЕПЕРЬ БУДЕТ РАБОТАТЬ
popUp.addEventListener("click", function (e) {
  // Проверяем, что кликнули именно по фону (попапу), а не по контенту
  if (e.target === popUp) {
    closePopUp();
  }
});

// Закрытие по Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && popUp.classList.contains("show")) {
    closePopUp();
  }
});

// Отправка формы
popUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Форма отправлена!");
  closePopUp();
});

function openPopUp() {
  console.log("Открываем попап");
  popUp.classList.add("show");
  // Блокируем прокрутку страницы при открытом попапе
  document.body.style.overflow = "hidden";
}

function closePopUp() {
  console.log("Закрываем попап");
  popUp.classList.remove("show");
  // Восстанавливаем прокрутку
  document.body.style.overflow = "";
}
