// import movies from "./movies.js"

class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d3faad141961b5917b8d7aac1f63fc42&page=1&with_watch_monetization_types=flatrate=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

// api password wR5A$xqL+_HDSce

// class DataSource {
//   static searchMovie(keyword) {
//     return new Promise((resolve, reject) => {
//       const filteredMovies = movies.filter(movie =>
//         movie.name.toUpperCase().includes(keyword.toUpperCase()))
//       ;

//       if (filteredMovies.length) {
//         resolve(filteredMovies);
//       } else {
//         reject(`${keyword} is not found`);
//       }
//     });
//   }
// }

export default DataSource;
