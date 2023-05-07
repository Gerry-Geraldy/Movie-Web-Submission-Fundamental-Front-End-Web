class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
            </style>
            <div id="search-container "class="search-container d-flex justify-content-center mt-5">
                  <input class="form-control form-control-lg w-50"
                        placeholder="Search here..."
                        id="searchElement"
                        type="search"
                  />
                  <button class="btn btn-outline-danger btn-lg mx-2"
                        id="searchButtonElement"
                        type="submit"
                  >
                        Search
                  </button>
                  </div>
            `;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
