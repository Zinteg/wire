document.addEventListener("DOMContentLoaded", function() {
    const imgSrc = localStorage.getItem('searchSystem') || 'https://zinteg.github.io/files/img/google.svg';
    const searchInput = document.getElementById('searchInput');
  
    document.getElementById('search-img').src = imgSrc;
  
    searchInput.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        const searchInputValue = searchInput.value.trim();
        if (searchInputValue) {
          const imgSrc = document.getElementById('search-img').src;
  
          if (imgSrc.endsWith('google.svg')) {
            window.open(`https://www.google.com/search?q=${searchInputValue}`, '_blank');
          } else {
            window.location.href = `https://yandex.ru/search/?text=${searchInputValue}`, '_blank';
          }
        }
      }
    });
  
    document.getElementById('search-img').addEventListener('click', function() {
      const imgSrc = this.src;
      if (imgSrc.endsWith('google.svg')) {
        this.src = 'https://zinteg.github.io/files/img/yandex.svg';
        localStorage.setItem('searchSystem', 'https://zinteg.github.io/files/img/yandex.svg');
      } else {
        this.src = 'https://zinteg.github.io/files/img/google.svg';
        localStorage.setItem('searchSystem', 'https://zinteg.github.io/files/img/google.svg');
      }
  
      searchInput.value = '';
    });
  });

  const searchForm = document.querySelector('#searchForm');
  searchForm.setAttribute('target', '_blank');