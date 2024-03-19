
const  accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWI1ZDQ4ZmYzMjM5M2VmMjAyZTYyNTFlYzM5ZDhkYiIsInN1YiI6IjY1YjRjMThhMTI0MjVjMDE0NzQ4MDk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrBR_TjWDi6PW_08tp8d3bn9gEUdhP1Ly1xEaz5kRJY';

const endpoint2 = 'https://api.themoviedb.org/3/movie/popular';
const endpoint3 = 'https://api.themoviedb.org/3/movie/top_rated';
var data1;
var data2;
var data3;
var i;
var page = 1;
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
};



fetch(endpoint2, options)
  .then(res => res.json())
  .then(data => {
    data2 = data;
    for (i = 0; i <= 13; i++) {
      readData(i);
    }i++
  readDataA14(i);
  })
  .catch(err => {
    console.error('Error fetching data from endpoint2:', err);
  });

fetch(endpoint3, options)
  .then(res => res.json())
  .then(data => {
    data3 = data;
    for (i = 0; i <= 13; i++) {
      readData_data3(i);
    }
  })
  .catch(err => {
    console.error('Error fetching data from endpoint3:', err);
  });


async function readDataA14(i){
  let name = data2.results[i].title;
  let rating = data2.results[i].vote_average;
  let overview = data2.results[i].overview;
  
  //let backdrop_Path=data2.results[i].backdrop_Path;
  let backdropPath=data2.results[i].backdrop_Path;
  let id=data2.results[i].id; 
  let display=document.querySelector(".display");
 // let aa14=document.getElementById("A14");

    
        
    
  let contentElement = document.createElement('div');
  contentElement.innerHTML = `<h2>${name}</h2><p>${rating}</p>
  ${overview}`;
display.appendChild(contentElement);
}
async function readData(i) {
  try {
    if (data2 && data2.results && data2.results.length >= 0) {
      let name = data2.results[i].title;
      let rating = data2.results[i].vote_average;
      let overview = data2.results[i].overview;
      let posterPath = data2.results[i].poster_path;
      let backdrop_Path=data2.results[i].backdrop_Path;
      let id=data2.results[i].id;
      console.log(data2);
      let imageContainer = document.getElementById("A" + i);
      const baseImageUrl = 'https://image.tmdb.org/t/p/';
      const imageSize = 'original';
      const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;
     
        
      imageContainer.style.background = `url(${fullImageUrl})`;
      imageContainer.style.backgroundSize = 'cover';
      imageContainer.style.backgroundRepeat = 'no-repeat';
      imageContainer.style.width = '190px';
      imageContainer.style.height = '245px';
rating=rating.toFixed(1);
      let contentElement = document.createElement('div');
      contentElement.innerHTML = `<p>${rating}</p>`;
      imageContainer.appendChild(contentElement);
    }
  } catch (error) {
    console.error('Error in readData:', error);
  }
}
async function readData_data3(i) {
  try {
    if (data3 && data3.results && data3.results.length > 0) {
      let name = data3.results[i].title;
      let id=data3.results[i].id;
      let rating = data3.results[i].vote_average;
      let overview = data3.results[i].overview;
      let posterPath = data3.results[i].poster_path;
      let imageContainerB = document.getElementById("B" + i);

      if (imageContainerB) {
        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const imageSize = 'original';
        const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;
        
        imageContainerB.style.background = `url(${fullImageUrl})`;
        imageContainerB.style.backgroundSize = 'cover';
        imageContainerB.style.backgroundRepeat = 'no-repeat';
        imageContainerB.style.width = '190px';
        imageContainerB.style.height = '245px';
rating=rating.toFixed(1);
        let contentElementB = document.createElement('div');
        contentElementB.innerHTML = `<p>${rating}</p>`;
        imageContainerB.appendChild(contentElementB);
      } else {
        console.error('Image container B not found for index:', i);
      }
    }
  } catch (error) {
    console.error('Error in readData_data3:', error);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  //fetchMovies();
});


/*
var searchData;
var videosData;let query1 = document.getElementById('searchInput');

query1.addEventListener("input", function () {
    let query = query1.value;
    console.log("Input Value: " + query);

    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${accessToken}&query=${query}`;

    fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            searchData = data;
            console.log(searchData);
            if (data.results && data.results.length > 0) {
                // Call moviestoshow function with the filtered movies
                moviestoshow(data.results);
            } else {
                console.error('No results or empty array in data:', data);
            }
        })
        .catch(err => {
            console.error('Error fetching data from search endpoint:', err);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have a function named 'fetchmovies' defined
    fetchmovies();
});

function moviestoshow(movies) {
    const MoviesGrid = document.getElementById('results');

    MoviesGrid.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.release_date}</p>
        `;

        MoviesGrid.appendChild(movieCard);
    });
}
*/