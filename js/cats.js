  // Cats render

  let elCatImage = document.querySelector(".image");
  let elCatBtn = document.querySelector(".btn");

  elCatBtn.addEventListener("click", function (evt) {
     evt.preventDefault();
     
     fetch("https://api.thecatapi.com/v1/images/search")
     .then(response => response.json())
     .then(data => (elCatImage.src = data[0].url))
     
   })
