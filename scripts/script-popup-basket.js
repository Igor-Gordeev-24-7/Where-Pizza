// Создаем переменные

const popupBasket = document.querySelector(".popup-basket");

const closePopupBasketBtn = document.querySelector(".basket__subheading-btn");

const togglePopupBacketBtn = document.querySelector(".header__basket-btn");

function showBasketPopup() {
  // Убирает скрол страницы
  document.body.style.overflow = "hidden";
  //Функция при вызове удаляет указанный класс
  popupBasket.classList.remove("popup-basket--hidden");
}

function hidePopup() {
  // Добавляет скрол страницы
  document.body.style.overflow = "initial";
  //Функция при вызове добавляет указанный класс
  popupBasket.classList.add("popup-basket--hidden");
}

togglePopupBacketBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup();
  });

//При нажатии на closePopupBacketBtn, сробатывает функиця hidePopup (скрывает появившееся окно)

closePopupBasketBtn.addEventListener("click", hidePopup);
