const input = document.getElementById('searchInput');
const clear = document.querySelector('.search .clear');

// Сохраняем текст в localStorage при клике на кнопку поиска
document.querySelector('.search .icon').addEventListener('click', function() {
localStorage.setItem('searchText', input.value);
});

// Удаляем текст из localStorage при клике на крестик
clear.addEventListener('click', function() {
input.value = '';
clear.style.display = 'none';
localStorage.removeItem('searchText');
});

// Скрытие крестика
clear.classList.add('hidden');

// Показ крестика после загрузки стилей
clear.addEventListener('load', function() {
clear.classList.remove('hidden');
});

// При загрузке страницы проверяем наличие текста в localStorage и восстанавливаем его
window.addEventListener('load', function() {
const savedText = localStorage.getItem('searchText');
if (savedText) {
input.value = savedText;
clear.style.display = 'flex';
}
});

// Следим за изменениями в поле ввода и показываем/скрываем крестик
input.addEventListener('input', function() {
if (input.value.length > 0) {
clear.style.display = 'flex';
} else {
clear.style.display = 'none';
}
});

// При загрузке страницы проверяем наличие текста в localStorage и восстанавливаем его
window.addEventListener('load', function() {
const savedText = localStorage.getItem('searchText');
if (savedText) {
input.value = savedText;
clear.style.display = 'flex';
} else {
clear.style.display = 'none'; // скрываем крестик, если сохраненного текста нет
}
});