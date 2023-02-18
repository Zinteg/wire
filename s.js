document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
    }
  });
