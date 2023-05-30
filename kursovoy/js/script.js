// let numberPage = 1;
// let quantityRows = 10;
// async function fetchinFilms() {
//     const response = await fetch(
//         `https://desfarik.github.io/star-wars/api/film/all.json?page=${numberPage}&results=${quantityRows}&seed=abc`
//     );
//     const data = await response.json()
//     console.log(data);
//     return data.meals[0];
// }
// async function renderFilms() {
//     let meal = await fetchinFilms();
//     console.log(meal);
//     // document.body.innerHTML = `
//     //   <img src="${meal.strMealThumb}">
//     //
//     // `
// }
// renderFilms();
async function getFilms() {
    let response = await fetch(`https://desfarik.github.io/star-wars/api/film/all.json`);
    let data = await response.json();
    console.log(data);
    return data;

}

renderFilms();

async function renderFilms() {
    const movies = await getFilms();
    const moviesEl = document.querySelector(".movies");
    movies.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        const imgUrl = filmsInfo.find(film => film.id === movie.id).img;

        movieEl.innerHTML = `<div class="movie-cover-inner">
      <img
        src="${imgUrl}"
        
        onclick=""
        class="movie-cover"/>
      <div class="movie-cover--darkened"></div>
    </div>
    <div class="movie-info">
      <div class="title">
        ${movie.title}
      </div>
      <div class="episode"> <span> Звездные Войны Эпизод: </span>${movie.episode_id
        }
      </div>
      <div class="release-date">${movie.release_date}
     
      </div>
      <div class="movie-average movie-average--green">${movie.episode_id}</div>
    </div>`
        moviesEl.appendChild(movieEl);
    })

}

// function formEvent(event) {
//     event.preventDefault();
// }
// function getPhraseSearch(event) {
//     const target = event.target;
//     phrase = target.value.toLowerCase();
//     renderFilmsWithLang();
// }
//
// async function renderFilmsWithLang() {
//     await renderFilms();
//     changeLang(localeKeys.lang);
// }
// async function renderFilms() {
//     const elementFilms = document.querySelector(".films");
//     let promises = [];
//     const render = getRender(elementFilms);
//     const filmsOnRequest = await fetchFilms();
//     sortFilms(filmsOnRequest).forEach((film) => promises.push(render(film)));
//     const films = await Promise.all(promises);
//     elementFilms.innerHTML = "";
//     films.forEach((film) => (elementFilms.innerHTML += film));
//     buttonFavorites.classList.remove("hide");
//     pouringIconsFavorites(elementFilms);
// }