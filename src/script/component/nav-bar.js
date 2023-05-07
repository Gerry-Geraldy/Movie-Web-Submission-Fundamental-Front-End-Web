class NavBar extends HTMLElement {
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

            <style>
            @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');

            /* *, *::before, *::after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Quicksand', sans-serif;
            
            } 

            .container-custom main {
              width: 90%;
              max-width: 1200px;
            
            }
            
            header {
              z-index: 99;
              display: inline;
              position: relative;
            }

            .bg-dark{
            // background-color: rgb(33,37,41);
            }
            </style>
           <nav id="navbar" class="navbar navbar-expand-lg fixed-top bg-dark">
          <div class="container">
            <a class="navbar-brand text-danger" href="#"
              >Movie<span class="text-light"> Mania</span></a
            >
            <button
              class="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    >About</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    >More</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    >Blog</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
