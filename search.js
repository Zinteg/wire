const button = document.querySelector('.game-button');
const menu = document.querySelector('.game-menu');

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
      searchImg.src = "https://zinteg.github.io/files/img/webp/google.webp";
      currentSearchEngine = "google";
    }
    localStorage.setItem("currentSearchEngine", currentSearchEngine);
  });
  
  window.addEventListener("load", function() {
    const savedSearchEngine = localStorage.getItem("currentSearchEngine");
    if (savedSearchEngine) {
      currentSearchEngine = savedSearchEngine;
      if (currentSearchEngine === "google") {
        searchImg.src = "https://zinteg.github.io/files/img/webp/google.webp";
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



//Task
var List = $('#tdlApp ul');
var Mask = 'tdl_';
function showTasks() {
var Storage_size = localStorage.length;
if (Storage_size > 0) {
for (var i = 0; i < Storage_size; i++) {
var key = localStorage.key(i);
if (key.indexOf(Mask) == 0) {
  $('<li></li>').addClass('tdItem')
    .attr('data-itemid', key)
    .text(localStorage.getItem(key))
    .appendTo(List);
}
}
}
}
showTasks();
$('#tdlApp input').on('keydown', function (e) {
if (e.keyCode != 13) return;
var str = e.target.value;
e.target.value = "";
if (str.length > 0) {
var number_Id = 0;
List.children().each(function (index, el) {
var element_Id = $(el).attr('data-itemid').slice(4);
if (element_Id > number_Id)
  number_Id = element_Id;
})
number_Id++;
localStorage.setItem(Mask + number_Id, str);
$('<li></li>').addClass('tdItem')
.attr('data-itemid', Mask + number_Id)
.text(str).appendTo(List);
}
});
$(document).on('click', '.tdItem', function (e) {
var jet = $(e.target);
localStorage.removeItem(jet.attr('data-itemid'));
jet.remove();
})


const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');

taskInput.addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
const task = taskInput.value;
if (!task) {
return;
}

const li = document.createElement('li');
li.innerHTML = task;
taskList.appendChild(li);
taskInput.value = '';
}
});

//Крестик//
const input = document.getElementById("searchInput");
const clear = document.querySelector(".clear");

input.addEventListener("input", function () {
  if (this.value.length > 0) {
    clear.style.display = "flex";
  } else {
    clear.style.display = "none";
  }
});

clear.addEventListener("click", function () {
  input.value = "";
  clear.style.display = "none";
});
