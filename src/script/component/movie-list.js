import "./movie-item.js";

class MovieList extends HTMLElement {

  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'})
  }
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .movie-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ubah nilai minmax menjadi 200px */
        grid-gap: 20px;
        margin: 20px;
      }
    </style>
    <div class="movie-container row "></div>`;

    this._movies.forEach((movie) => {
      const movieContainer = this.shadowDOM.querySelector(".movie-container");
      const createMovieList = document.createElement("movie-item");
      movieContainer.appendChild(createMovieList);
      createMovieList.movie = movie;
    });
  }
}

customElements.define("movie-list", MovieList);
