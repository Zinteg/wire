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

function addBookmark() {
  var input = document.getElementById("searchInput").value;
  if (input) {
    var bookmarkItem = document.createElement("div");
    bookmarkItem.className = "bookmark-item";
    bookmarkItem.innerText = input;
    document.querySelector(".bookmark-list").appendChild(bookmarkItem);

    // add click event listener to bookmark item
    bookmarkItem.addEventListener("click", function() {
      this.remove();
    });

    // save bookmarks to localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(input);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function loadBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.forEach(function(bookmark) {
    var bookmarkItem = document.createElement("div");
    bookmarkItem.className = "bookmark-item";
    bookmarkItem.innerText = bookmark;
    document.querySelector(".bookmark-list").appendChild(bookmarkItem);

    // add click event listener to bookmark item
    bookmarkItem.addEventListener("click", function() {
      this.remove();
      // remove bookmark from localStorage
      var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      bookmarks.splice(bookmarks.indexOf(bookmark), 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    });
  });
}

window.addEventListener("load", function() {
  loadBookmarks();
});




// add keydown event listener to bookmark item
bookmarkItem.addEventListener("keydown", function(event) {
if (event.key === " ") {
var bookmarkText = this.innerText;
document.getElementById("searchInput").value = bookmarkText;
event.preventDefault();
}
});