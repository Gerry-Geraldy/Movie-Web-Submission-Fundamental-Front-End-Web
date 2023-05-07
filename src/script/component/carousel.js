class CarouselBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `

        <style>
        /* Style Bootstrap yang ingin digunakan */
        @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
        </style>

        <div id="carouselExampleFade" class="carousel slide carousel-fade mb-2">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
            `;
  }
}

customElements.define("carousel-bar", CarouselBar);
