const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchImg = document.getElementById('search-img');
const searchBtn = document.getElementById('search-btn');

let currentSearchEngine = localStorage.getItem('currentSearchEngine') || 'google'; // по умолчанию используется поиск Google
searchImg.src = currentSearchEngine === 'google' ? 'https://zinteg.github.io/files/img/google.svg' : currentSearchEngine === 'yandex' ? 'https://zinteg.github.io/files/img/yandex.svg' : 'https://zinteg.github.io/files/img/bing.svg';

// функция для смены поисковой системы
function changeSearchEngine() {
  currentSearchEngine = currentSearchEngine === 'google' ? 'yandex' : currentSearchEngine === 'yandex' ? 'bing' : 'google';
  localStorage.setItem('currentSearchEngine', currentSearchEngine);
  searchImg.src = currentSearchEngine === 'google' ? 'https://zinteg.github.io/files/img/google.svg' : currentSearchEngine === 'yandex' ? 'https://zinteg.github.io/files/img/yandex.svg' : 'https://zinteg.github.io/files/img/bing.svg';
}

// функция для отправки запроса
function submitSearch() {
  const searchText = searchInput.value;
  if (searchText.trim() !== '') {
    let searchUrl = '';
    if (currentSearchEngine === 'google') {
      searchUrl = `https://www.google.com/search?q=${searchText}`;
    } else if (currentSearchEngine === 'yandex') {
      searchUrl = `https://yandex.ru/search/?text=${searchText}`;
    } else {
      searchUrl = `https://www.bing.com/search?q=${searchText}`;
    }
    window.open(searchUrl, 'mySearchTab');
  }
}

// обработчик события на нажатие клавиши Enter в поле ввода текста
searchInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitSearch();
  }
});

// обработчик события на клик по кнопке поиска
searchBtn.addEventListener('click', submitSearch);

// обработчик события на клик по иконке смены поисковой системы
searchImg.addEventListener('click', function(event) {
  event.preventDefault();
  changeSearchEngine();
});
