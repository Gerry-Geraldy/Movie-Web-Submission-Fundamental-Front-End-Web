class FooterList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

      <style>
      @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');

      footer-list{
            padding: 1000px;
            height:1000px;
          }
          
          .footer-links{
            list-style: none;
            justify-content: center;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));    
          }
          
          .links .title {
            color: rgb(220,53,69);
          }
          
          .footer-links ul{
            padding-top: 5px;
          }
          
          .footer-links li {
            list-style: none;
          }
          
          .footer-links li a{
            list-style: none;
          }
          
          .footer-links li a{
            text-decoration: none;
            color: #212121;
            padding: 2px;
            font-size: 15px;
          } 
      </style>
      <section class="footer-links bg-danger-subtle p-5">
        <div class="links">
          <ul>
            <b class="title text-light">Tentang Penulis</b>
            <li>
              <a href="https://web.facebook.com/geraldy.latris/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/geraldylatris/">Instagram</a>
            </li>
            <li><a href="https://twitter.com/geraldylatris">Twitter</a></li>
            <li><a href="https://github.com/Gerry-Geraldy">Github</a></li>
          </ul>
        </div>
        <div class="links">
          <ul class="sub-links">
            <b class="title text-light">Privacy</b>
            <li><a href="#">Knowlegde</a></li>
            <li><a href="#">Service Level Agreement</a></li>
            <li><a href="#">Service Rule</a></li>
            <li><a href="#">Payment Guide</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="links">
          <ul class="sub-links">
            <b class="title text-light">More Movies</b>
            <li><a href="#">Movies International</a></li>
            <li><a href="#">Blog & More Websites</a></li>
            <li><a href="#">Top Movies</a></li>
          </ul>
        </div>
        <div class="links">
          <ul class="sub-links">
            <b class="title text-light">Statistik</b>
            <li><a href="#">Online User: 500</a></li>
            <li><a href="#">Today Visit: 30</a></li>
            <li><a href="#">Total Visitors: 20.000</a></li>
          </ul>
        </div>
      </section>
      `;
  }
}

customElements.define("footer-list", FooterList);
