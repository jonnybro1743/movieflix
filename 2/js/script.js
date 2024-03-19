var isPopupOpen = false;
var currentContentId = null;
var storedMovieId;

function openPopup(contentId) {
  let movieData = getMovieData(contentId);
  currentContentId = contentId;
  updatePopupContent(movieData);
  document.getElementById('popup').style.display = 'block';
  isPopupOpen = true;

  var movieId = movieData.id;
  console.log(movieId);

  let videoElements = document.querySelectorAll('.watch');
  videoElements.forEach(function (videoElement) {
    videoElement.addEventListener('click', function () {
      window.location.replace("video.html?movieId=" + movieId);

    });
  });
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  isPopupOpen = false;
  currentContentId = null;
}

// Rest of your code...

function getMovieData(contentId) {
  let prefix = contentId.substring(0, 1);
  let index = parseInt(contentId.substring(1));

  switch (prefix) {
    case 'A':
      return data2.results[index];
    case 'B':
      return data3.results[index];
    case 'G':
      console.log(recommendationsData);
      return recommendationsData.results[index];
      case 'S':
        console.log(searchdata);
        return searchdata.results[index];
    default:
      return null;
  }
}

function updatePopupContent(movieData) {
  let imageContainer = document.getElementById('imageContainer');
  let popupParagraph = document.getElementById('popup-paragraph');
  let popupDetails = document.getElementById('popup-details');

  const baseImageUrl = 'https://image.tmdb.org/t/p/';
  const imageSize = 'original';
  const fullImageUrl = `${baseImageUrl}${imageSize}/${movieData.backdrop_path}`;

  imageContainer.style.background = `url(${fullImageUrl})`;
  imageContainer.style.backgroundSize = 'cover';
  imageContainer.style.backgroundRepeat = 'no-repeat';

  imageContainer.style.width = '855px';
  imageContainer.style.height = '400px';

  popupParagraph.innerHTML = `<h2>${movieData.title}</h2>`;
  popupDetails.innerHTML = `
  
    <p>Overview:
     ${movieData.overview}</p>
     <br><p>Rating: ${movieData.vote_average}</p>
    
  `;
}

function separateNumbers(inputString) {
  let matches = inputString.match(/\d+/g);

  if (matches) {
    matches.forEach(function (number) {
      console.log("Number:", number);
    });
  } else {
    console.log("No numbers found in the string.");
  }
}
