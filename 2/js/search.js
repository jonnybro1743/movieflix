const accessToken2 = '75b5d48ff32393ef202e6251ec39d8db';
var searchdata;

function fetchMovies(searchTerm = 'popular') {
    const moviesGrid = document.getElementById('MoviesGrid');
    moviesGrid.innerHTML = '<p>Loading movies...</p>';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${accessToken2}&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            searchdata = data;
            if (data.results && data.results.length > 0) {
                moviestoshow(data.results);
            } else {
                moviesGrid.innerHTML = '<p>No movies found!</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            moviesGrid.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
        });
}

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const moviesGrid = document.getElementById('MoviesGrid');

    if (searchInput.trim() !== '') {
        moviesGrid.innerHTML = '<p>Loading movies...</p>';

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${accessToken2}&query=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    moviestoshow(data.results);
                    readDatasearch(i);
                    searchdata=data;
                    console.log(searchdata);
                } else {
                    moviesGrid.innerHTML = '<p>No movies found with the given name!</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                moviesGrid.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
            });

    }
}

if (searchInput != null) {
    function moviestoshow(movies) {
        document.getElementById('results').style.display = 'block';
        const moviesGrid = document.getElementById('MoviesGrid');
        moviesGrid.innerHTML = '';

        movies.forEach((movie, index) => {
            if (index < 5) {
                readDatasearch(index);
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.setAttribute("id", "S" + index);
                movieCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.title}">${movie.title} ${movie.release_date}
                `;

                movieCard.addEventListener("click", function () {
                    console.log(index);
                    openPopup('S' + index);
                });

                moviesGrid.appendChild(movieCard);
            }
        });
    }
}

async function readDatasearch(i) {
    try {
        if (searchdata && searchdata.results && searchdata.results.length >= 0) {
            let name = searchdata.results[i].title;
            let rating = searchdata.results[i].vote_average;
            let overview = searchdata.results[i].overview;
            let posterPath = searchdata.results[i].poster_path;
            let backdropPath = searchdata.results[i].backdrop_path;
            let id = searchdata.results[i].id;
            console.log(name);
           
            let contentElement = document.createElement('div');
            contentElement.innerHTML = `<p>${rating}</p>`;
        }
    } catch (error) {
      console.error('Error in readData:', error);
    }
  }
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#results")) {
        // Click occurred outside the results element
        document.getElementById('results').style.display = 'none';
    }
});


  