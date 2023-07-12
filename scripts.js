// Создаем переменнуe
const popupFilters = document.querySelector(".popup-filters");

const closePopupFiltersBtn = document.querySelector(".filters__subheading-btn");

const togglePopupFiltersBtns = document.querySelectorAll(".foods__header-btn");

function showPopup() {
  // Убирает скрол страницы
  document.body.style.overflow = "hidden";
  //Функция при вызове удаляет указанный класс
  popupFilters.classList.remove("popup-filters--hidden");
}

function hidePopup() {
  // Добавляет скрол страницы
  document.body.style.overflow = "initial";
  //Функция при вызове добавляет указанный класс
  popupFilters.classList.add("popup-filters--hidden");
}

// ?????????????????
togglePopupFiltersBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup();
  });
});

//При нажатии на closePopupFiltersBtn, сробатывает функиця hidePopup (скрывает появившееся окно)
closePopupFiltersBtn.addEventListener("click", hidePopup);
