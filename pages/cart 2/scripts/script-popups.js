// Filters
const popupFilters = document.querySelector(".popup-filters");

const closePopupFiltersBtn = document.querySelector(".popup-filters__close");

const togglePopupFiltersBtns = document.querySelectorAll(".foods__header-btn");

// Cart
const popupCart = document.querySelector(".popup-cart");

const closePopupCartBtn = document.querySelector(".popup-cart__btn-close");

const togglePopupCartBtn = document.querySelector(".header__card-btn");

// Убирает скрол страницы
function offScroll() {
  document.body.style.overflow = "hidden";
}

// Добавляет скрол страницы
function onScroll() {
  document.body.style.overflow = "initial";
}

// Показывает popup, и выключает скролл
function showPopup(selector, activeClassName) {
  // Убирает скролл страницы
  offScroll();
  const popup = document.querySelector(selector);
  popup.classList.add(activeClassName);
}

// Уберает popup, и включает скролл
function hidePopup(selector, activeClassName) {
  onScroll();
  const popup = document.querySelector(selector);
  popup.classList.remove(activeClassName);
}

// Делает видимым popup-filters
togglePopupFiltersBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup(".popup-filters", "popup-filters--active");
  });
});

// Делает видимым popup-cart
togglePopupCartBtn.addEventListener("click", () => {
  showPopup(".popup-cart", "popup-cart--active");
});

//При нажатии на closePopupFiltersBtn, сробатывает функиця hidePopup (скрывает появившееся окно)
closePopupFiltersBtn.addEventListener("click", () =>
  hidePopup(".popup-filters", "popup-card-product__active")
);

//При нажатии на closePopupCartBtn, сробатывает функиця hidePopup (скрывает появившееся окно)
closePopupCartBtn.addEventListener("click", () =>
  hidePopup(".popup-cart", "popup-cart--active")
);
