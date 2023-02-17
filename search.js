button.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});


  window.onload = function() {
      document.getElementById("searchInput").value = "";
    }

  const searchImg = document.getElementById("search-img");
  const searchForm = document.getElementById("search-form");
  let currentSearchEngine = "google";
  
  searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const searchInput = searchForm.querySelector("input");
    const searchTerm = searchInput.value;
    if (currentSearchEngine === "google") {
      window.open(`https://www.google.com/search?q=${searchTerm}`);
    } else if (currentSearchEngine === "yandex") {
      window.open(`https://yandex.ru/search/?text=${searchTerm}`);
    } else if (currentSearchEngine === "yahoo") {
      window.open(`https://search.yahoo.com/search?p=${searchTerm}`);
    } else {
      window.open(`https://www.bing.com/search?q=${searchTerm}`);
    }
  });
  
  searchImg.addEventListener("click", function() {
    if (currentSearchEngine === "google") {
      searchImg.src = "https://zinteg.github.io/files/img/webp/yandex.webp";
      currentSearchEngine = "yandex";
    } else if (currentSearchEngine === "yandex") {
      searchImg.src = "https://zinteg.github.io/files/img/webp/yahoo.webp";
      currentSearchEngine = "yahoo";
    } else if (currentSearchEngine === "yahoo") {
      searchImg.src = "https://zinteg.github.io/files/img/bing.svg";
      currentSearchEngine = "bing";
    } else {
      searchImg.src = "https://zinteg.github.io/files/img/google.svg";
      currentSearchEngine = "google";
    }
    localStorage.setItem("currentSearchEngine", currentSearchEngine);
  });
  
  window.addEventListener("load", function() {
    const savedSearchEngine = localStorage.getItem("currentSearchEngine");
    if (savedSearchEngine) {
      currentSearchEngine = savedSearchEngine;
      if (currentSearchEngine === "google") {
        searchImg.src = "https://zinteg.github.io/files/img/google.svg";
      } else if (currentSearchEngine === "yandex") {
        searchImg.src = "https://zinteg.github.io/files/img/webp/yandex.webp";
      } else if (currentSearchEngine === "yahoo") {
        searchImg.src = "https://zinteg.github.io/files/img/webp/yahoo.webp";
      } else {
        searchImg.src = "https://zinteg.github.io/files/img/bing.svg";
      }
    }
  });     

// Получить элемент поля ввода
const searchInput = document.querySelector('#searchInput');

// Проверить, существует ли сохраненное значение в localStorage
if (localStorage.getItem('searchInputValue')) {
// Если да, установить это значение в поле ввода
searchInput.value = localStorage.getItem('searchInputValue');
}

// Назначить функцию обратного вызова на событие "input" поля ввода
searchInput.addEventListener('input', function() {
// Сохранить значение поля ввода в localStorage
localStorage.setItem('SearchInputValue', searchInput.value);
});
