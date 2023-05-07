class ClubItem extends HTMLElement {
  constructor(){
      super();
      this.shadowDOM = this.attachShadow({mode:'open'})
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>

    
    .card{
      height:auto;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px; /* Tambahkan nilai border-radius */
      overflow: hidden; /* Tambahkan overflow hidden untuk melengkungkan sudut border */
      
    }
    
    img{
      background-image:cover;
    }
    
    .card-body {
      padding:10px;
    }
    
    .card-body h6{
      margin:0px;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    
    .card-body p {
      font-size: 12px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    </style>
    <div class="card">
    <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="Poster">
        <div class="card-body">
            <h6>${this._movie.original_title}</h6>
            <p>${this._movie.overview}</p>
        </div>
    </div>
   `;
  }
}

customElements.define("movie-item", ClubItem);
