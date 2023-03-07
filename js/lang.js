/* const langSwitchBtn = document.querySelector('#lang-switch');
const messageRu = document.querySelector('.message-ru');
const messageEn = document.querySelector('.message-en');
const LANG_KEY = 'lang';

const savedLang = localStorage.getItem(LANG_KEY);
if (savedLang === 'en') {
  messageRu.classList.add('hidden');
  messageEn.classList.remove('hidden');
} else {
  messageRu.classList.remove('hidden');
  messageEn.classList.add('hidden');
}

langSwitchBtn.addEventListener('click', () => {
  if (messageRu.classList.contains('hidden')) {
    localStorage.setItem(LANG_KEY, 'ru');
    messageRu.classList.remove('hidden');
    messageEn.classList.add('hidden');
  } else {
    localStorage.setItem(LANG_KEY, 'en');
    messageRu.classList.add('hidden');
    messageEn.classList.remove('hidden');
  }
});

// Кнопка поиска
const langSwitch = document.getElementById('lang-switch');
const sicoRu = document.querySelector('.sico[data-lang="ru"]');
const sicoEn = document.querySelector('.sico[data-lang="en"]');

// проверяем наличие сохраненного языка
const lang = localStorage.getItem('lang');
if (lang === 'en') {
sicoRu.classList.add('hidden');
sicoEn.classList.remove('hidden');
} else {
sicoRu.classList.remove('hidden');
sicoEn.classList.add('hidden');
}

langSwitch.addEventListener('click', () => {
sicoRu.classList.toggle('hidden');
sicoEn.classList.toggle('hidden');
if (sicoRu.classList.contains('hidden')) {
langSwitch.title = 'Switch to Russian';
localStorage.setItem('lang', 'en');
} else {
langSwitch.title = 'Switch to English';
localStorage.setItem('lang', 'ru');
}
}); */