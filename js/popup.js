const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Проверяем, был ли элемент уже скрыт
const isPopupShown = localStorage.getItem('isPopupShown');
if (!isPopupShown) {
  popup.style.display = 'block';
}

// Обработчик клика на кнопку закрытия
closeBtn.addEventListener('click', () => {
  // Скрываем элемент
  popup.style.display = 'none';
  // Записываем в локальное хранилище, что элемент был скрыт
  localStorage.setItem('isPopupShown', true);
});