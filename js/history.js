// получаем сохраненную историю поиска из localStorage
const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// функция для добавления поискового запроса в историю
function addToSearchHistory(searchText, searchEngine) {
  const searchDate = new Date().toLocaleString();
  searchHistory.unshift({ searchText, searchEngine, searchDate });
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

// функция для отображения истории поиска на странице
function showSearchHistory() {
  const searchHistoryContainer = document.getElementById('searchHistoryContainer');
  if (searchHistory.length > 0) {
    let searchHistoryHtml = '';
    for (let i = 0; i < searchHistory.length; i++) {
      searchHistoryHtml += `
        <div class="search-history-item">
          <div class="search-history-item__date">${searchHistory[i].searchDate}</div>
          <div class="search-history-item__query">${searchHistory[i].searchText}</div>
          <div class="search-history-item__engine">${searchHistory[i].searchEngine}</div>
        </div>
      `;
    }
    searchHistoryContainer.innerHTML = searchHistoryHtml;
  } else {
    searchHistoryContainer.innerHTML = '<div class="search-history-empty">No search history available</div>';
  }
}

// добавляем обработчик события на отправку запроса
searchForm.addEventListener('submit', function(event) {
  const searchText = searchInput.value;
  if (searchText.trim() !== '') {
    const searchUrl = currentSearchEngine === 'google' ? `https://www.google.com/search?q=${searchText}` : `https://www.bing.com/search?q=${searchText}`;
    window.open(searchUrl, '_blank');
    addToSearchHistory(searchText, currentSearchEngine);
  }
});

// отображаем историю поиска на странице истории
showSearchHistory();
