const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWI1ZDQ4ZmYzMjM5M2VmMjAyZTYyNTFlYzM5ZDhkYiIsInN1YiI6IjY1YjRjMThhMTI0MjVjMDE0NzQ4MDk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrBR_TjWDi6PW_08tp8d3bn9gEUdhP1Ly1xEaz5kRJY';

//const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTE0ZjgwOWZkOGQ5YjM1NTcxNzlmZTM0NWNhYzdkZiIsInN1YiI6IjY1YjRjMThhMTI0MjVjMDE0NzQ4MDk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fn5Ap24YooEQR6i6ApUx1Pc2a2N8U7nR2Jd2f-LOVa4';
const endpoint4 = 'https://api.themoviedb.org/3/movie/11/recommendations';
const endpoint1 = 'https://api.themoviedb.org/3/genre/movie/list';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
};

var data1;
let recommendationsData;

fetch(endpoint1, options)
  .then(res => res.json())
  .then(data => {
    console.log('Data from endpoint1:', data);
    data1 = data;
    for (let i = 0; i < 21; i++) {
      readDataGenre(i);
    }
    // Process the data as needed
  })
  .catch(err => {
    console.error('Error fetching data from endpoint1:', err);
  });

fetch(endpoint4, options)
  .then(res => res.json())
  .then(data => {
    console.log('Data from endpoint4:', data);
    recommendationsData = data;
    for (let i = 0; i < 20; i++) {
      displayRecommendation(i);
    }
  })
  .catch(err => {
    console.error('Error fetching data from endpoint4:', err);
  });

async function displayRecommendation(i) {
  try {
    if (recommendationsData && recommendationsData.results && recommendationsData.results.length > 0) {
      let name = recommendationsData.results[i].title;
      let rating = recommendationsData.results[i].vote_average;
      let overview = recommendationsData.results[i].overview;
      let posterPath = recommendationsData.results[i].poster_path;
      let id=recommendationsData.results[i].id;
      let imageContainerC = document.getElementById("G" + i);

      if (imageContainerC) {
        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const imageSize = 'w185';
        const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;

        imageContainerC.style.background = `url(${fullImageUrl})`;
        imageContainerC.style.backgroundSize = 'cover';
        imageContainerC.style.backgroundRepeat = 'no-repeat';
        imageContainerC.style.width = '185px';
        imageContainerC.style.height = '240px';

       

        
      } else {
        console.error(`Element with ID "G${i}" not found.`);
      }
    } else if (recommendationsData && !recommendationsData.results) {
      console.error('No results property in recommendationsData:', recommendationsData);
    } else {
      console.error('Invalid recommendationsData structure:', recommendationsData);
    }
  } catch (error) {
    console.error('Error in displayRecommendation:', error);
  }
}
async function readDataGenre(i){
try {
  if (data1 && data1.genres && data1.genres.length >= 0) {
    let name = data1.genres[i].name;
    let generalContainer = document.querySelector('.genre');
    let contentElement = document.createElement('div');
    contentElement.innerHTML = `
      <h2 >${name}</h2>
    `;

    generalContainer.appendChild(contentElement);
  } else if (data1 && !data1.genres) {
    console.error('No genres property in data1:', data1);
  } else {
    console.error('Invalid data1 structure:', data1);
  }
} catch (error) {
  console.error('Error in readDataGenre:', error);
}
}
