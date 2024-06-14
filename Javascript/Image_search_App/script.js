const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-input");
const imagesContainer = document.querySelector(".images-container");
const loadMoreBtn = document.querySelector(".loadMoreBtn");

const accessKey = "aukp3fflac_aaMomQWundZDD2w1NiamEYhb-3-fMF8I";

//Function to fetch Images using Unsplash API
const fetchImages = async (query, pageNo) => {
  try {


    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      data.results.forEach(photo => {
        //Creating Image Div
        const imageElement = document.createElement('div');
        imageElement.classList.add("imageDiv");
        imageElement.innerHTML = `<img src ="${photo.urls.regular}"/>`;



        const button = document.createElement("button");
        button.textContent = "View ";
        imageElement.appendChild(button);

        // imagesContainer.appendChild(imageElement);

      });


    }
    else {
      imagesContainer.innerHTML = `<h2>No Image Found</h2>`;

    }
  }
  catch (error) {
    imagesContainer.innerHTML = `<h2>Failed to fetch images. Please try later.</h2>`;
  }
}



//Adding Eventlistner to Search Form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();
  if (inputText != "") {
    page = 1;
    fetchImages(inputText, page);
  }
  else {
    imagesContainer.innerHTML = `<h2>Please enter a query to Search</h2>`;

  }
});

//Adding Eventlistner to load more button to load more images
