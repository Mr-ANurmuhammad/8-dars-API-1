// Get elements...
let elWrapper = document.querySelector(".univer__wrapper");
let elTemplate = document.querySelector("#univer__row").content;

function renderUniversities(array, wrapper) {
   wrapper.innerHTML = null

   let fragment = document.createDocumentFragment();

   for (const item of array) {
      let newItem = elTemplate.cloneNode(true);
      newItem.querySelector(".univer__name").textContent = item.name;
      newItem.querySelector(".univer__link").textContent = item.web_pages[0];
      newItem.querySelector(".univer__link").href = item.web_pages[0];
      newItem.querySelector(".univer__link").setAttribute("target", "blank");

      console.log(newItem);
      fragment.appendChild(newItem);

   }

   wrapper.appendChild(fragment);

}



// fetch(`http://universities.hipolabs.com/search?country=Uzbekistan`)
//      .then(function (response) {
//       return response.json()
//      })
//      .then(function (data) {
//          console.log(data);
//      })


fetch(`http://universities.hipolabs.com/search?country=Uzbekistan`)
     .then(response =>  response.json())
     .then(data => { data.sort(function (a, b) {
        if (a.name > b.name) {
         return 1
        }else if (a.name < b.name) {
         return -1
        }
        else {
         return 0
        }
      })


      console.log(data)
      renderUniversities(data, elWrapper)

   })


 