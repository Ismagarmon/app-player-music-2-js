/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit'

export class HomeView extends LitElement {

  
  static properties = {
    rout: { type: String },
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
    isOpened: { type: Boolean }, // Esto es para el menú en responsive
    isLogged: { type: Boolean },
    srcImg: { type: String }
  }

  constructor() {
    
    super()
    if(localStorage.getItem('zone') == null) {
      localStorage.setItem('zone', 'home')
    }
    this.rout = localStorage.getItem('zone')

    if (document.body.clientWidth >= this.Sizes.Desktop) {
      this.isDesktop = true
      this.isIpad = false
      this.isPhone = false
    } else if (document.body.clientWidth >= this.Sizes.Ipad) {
      this.isDesktop = false
      this.isIpad = true
      this.isPhone = false
    } else {
      this.isDesktop = false
      this.isIpad = false
      this.isPhone = true
    }
    this.isOpened = false
    window.addEventListener('resize', () => this.getsizes())
    
    
  }

  getsizes() {
    if (document.body.clientWidth >= this.Sizes.Desktop) {
      this.isDesktop = true
      this.isIpad = false
      this.isPhone = false
    } else if (document.body.clientWidth >= this.Sizes.Ipad) {
      this.isDesktop = false
      this.isIpad = true
      this.isPhone = false
    } else {
      this.isDesktop = false
      this.isIpad = false
      this.isPhone = true
    }
  }

  Sizes = {
    Desktop: 844,
    Ipad: 430
  }

  changerout(rute) {
    localStorage.setItem('zone', rute)
    
    if (this.isOpened) {
      this.isOpened = false
    }

    
  }

  static styles = css`
    .nav-c {
      background-color: var(--secondary);
    }

    .flex {
      display: flex;
    }

    .flex-at {
      align-items: center;
    }

    .flex-jc {
      justify-content: space-around;
    }

    .flex-jcsb {
      justify-content: space-between;
    }

    .flex-jccc {
      justify-content: center;
    }

    .g {
      gap: 13rem;
    }

    .gap-l {
      gap: 15px;
    }

    img#appicon {
      width: 100px;
      height: 100px;
      display: block;
    }

    .m-w {
      min-width: 13rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      padding: 0px;
      margin: 0px;
    }

    nav {
      background-color: var(--background);
      width: 100%;
      height: 8.438rem;
    }

    main {
      height: calc(100vh - 7rem - 0.2rem - 8.438rem);
      width: 100%;
      background-color: var(--secondary);
    }

    /* Extra large devices (large laptops and desktops, 844px and up) */
    @media only screen and (min-width: 844px) {
      .a-c {
        color: var(--background);
      }

      body {
        background-color: var(--background);
      }

      a {
        color: var(--secondary);
        text-decoration: none;
        font-family: var(--font);
        cursor: pointer;
      }

      a#home,
      a#about,
      p,
      a#signin,
      a#signup {
        font-size: var(--heading2);
      }

      a#signin,
      a#signup {
        padding: 0.3rem 2.5rem;
        color: var(--background);
      }

      .prueba {
        font-size: var(--heading2);
        min-width: 9rem;
        font-weight: 1000;
        color: var(--background);
      }

      .ob {
        color: var(--on_background);
      }

      .fw {
        font-weight: 650;
      }

      .ctn1 {
        width: 14rem;
      }

      .ctn3 {
        width: 22rem;
        height: 5rem;
      }

      .btn {
        width: 10rem;
        height: 2.2rem;
        border: 2px var(--primary) solid;
        background-color: var(--primary_variant);
        border-radius: 25rem;
      }

      .spacer {
        height: 0.2rem;
        width: 100%;
        background-color: var(--on_background);
      }

      p {
        font-weight: 900;
      }
    }

    @media only screen and (min-width: 430px) and (max-width: 842px) {
      a {
        color: var(--secondary);
        text-decoration: none;
        cursor: pointer;
      }

      a#home,
      a#about,
      p,
      a#signin,
      a#signup {
        font-size: var(--navigation2);
      }

      a#signin,
      a#signup {
        padding: 0.3rem 2rem;
        color: var(--background);
      }

      .btn {
        width: 10rem;
        height: 2.2rem;
        border: 2px var(--secondary) solid;
        background-color: var(--primary_variant);
        border-radius: 25rem;
      }

      .responsive {
        position: absolute;
        width: 20rem;
        height: 100vh;
        background-color: var(--primary);
        left: 0;
        transition: all 0.4s;
      }

      .c-responsive {
        position: absolute;
        width: 20rem;
        height: 100vh;
        background-color: var(--primary);
        left: -20rem;
        transition: all 0.4s;
      }

      .hamb {
        width: 2.5rem;
        height: 1.6rem;
        cursor: pointer;
        transition: all 0.4s;
        z-index: 100;
      }

      .sec {
        width: 100%;
        height: 0.2rem;
        background-color: black;
        transition: all 0.4s;
      }

      .c-sec {
        margin-bottom: 0.5rem;
      }

      .rotate {
        transform: rotate(45deg) translate(5px, 5px);
        margin-bottom: 0rem;
      }

      .rotate-inverse {
        transform: rotate(-45deg) translate(4px, -5px);
      }

      .none {
        opacity: 0;
      }

      .b-w {
        background-color: var(--background);
      }

      ul {
        list-style: none;
        margin-top: 6rem;
      }

      li {
        color: var(--background);
        margin-bottom: 1rem;
        font-family: var(--font);
        cursor: pointer;
      }

      li > p {
        font-size: var(--navigation1);
      }

      .spacer {
        height: 0.2rem;
        width: 100%;
        background-color: var(--on_background);
      }
    }

    @media only screen and (max-width: 428px) {
      a {
        color: var(--secondary);
        text-decoration: none;
        cursor: pointer;
      }

      a#home,
      a#about,
      p,
      a#signin,
      a#signup {
        font-size: var(--navigation2);
      }

      a#signin,
      a#signup {
        padding: 0.3rem 2rem;
        color: var(--background);
      }

      .btn {
        width: 10rem;
        height: 2.2rem;
        border: 2px var(--secondary) solid;
        background-color: var(--primary_variant);
        border-radius: 25rem;
      }

      .responsive {
        position: absolute;
        width: 20rem;
        height: 100vh;
        background-color: var(--primary);
        left: 0;
        transition: all 0.4s;
      }

      .c-responsive {
        position: absolute;
        width: 20rem;
        height: 100vh;
        background-color: var(--primary);
        left: -20rem;
        transition: all 0.4s;
      }

      .hamb {
        width: 2.5rem;
        height: 1.6rem;
        cursor: pointer;
        transition: all 0.4s;
        z-index: 100;
      }

      .sec {
        width: 100%;
        height: 0.2rem;
        background-color: black;
        transition: all 0.4s;
      }

      .c-sec {
        margin-bottom: 0.5rem;
      }

      .rotate {
        transform: rotate(45deg) translate(5px, 5px);
        margin-bottom: 0rem;
      }

      .rotate-inverse {
        transform: rotate(-45deg) translate(4px, -5px);
      }

      .none {
        opacity: 0;
      }

      .b-w {
        background-color: var(--background);
      }

      ul {
        list-style: none;
        margin-top: 6rem;
      }

      li {
        color: var(--background);
        margin-bottom: 1rem;
        font-family: var(--font);
        cursor: pointer;
      }

      li > p {
        font-size: var(--navigation1);
      }

      .spacer {
        height: 0.2rem;
        width: 100%;
        background-color: var(--on_background);
      }
    }
  `;

  openmenu() {
    if (this.isOpened) {
      this.isOpened = false;
    } else {
      this.isOpened = true;
    }
  }

  render() {
    return html`
      ${this.isDesktop
        ? html``
        : html` <div class="${this.isOpened ? 'responsive' : 'c-responsive'} ">
            <ul>
              <li
                class="flex flex-at flex-jccc"
              >
                <a href="/pp/home" @click=${() => this.changerout('home')}>Home</a>
              </li>
              <li
                class="flex flex-at flex-jccc"
              >
                <a href="/pp/about" @click=${() => this.changerout('about')}>About Us</a>
              </li>
              <li class="flex flex-at flex-jccc">
                <button class="btn flex flex-at flex-jccc">
                  <a
                    href="/pp/signin"
                    id="signin"
                    >SignIn</a
                  >
                </button>
              </li>
              <li class="flex flex-at flex-jccc">
                <button class="btn flex flex-at flex-jccc">
                  <a
                    href="/pp/signup"
                    id="signup"
                    >SignUp</a
                  >
                </button>
              </li>
            </ul>
          </div>`}

      <nav
        class="flex flex-at flex-jc ${this.isPhone
        ? ''
        : 'g'} ${this.rout.includes('home') ? '' : 'nav-c'}"
      >
        ${this.isDesktop
        ? html`<div class="ctn1 flex flex-jcsb m-w">
              <a
                href="/pp/home"
                id="home"
                @click=${() => this.changerout('home')}
                class="${this.rout.includes('home')
            ? 'fw'
            : ''} ${this.rout.includes('home') ? '' : 'a-c'}" >Home</a
              >

              <a
                href="/pp/about"
                id="about"
                @click=${() => this.changerout('about')}
                class="${this.rout.includes('about')
            ? 'fw'
            : ''} ${this.rout.includes('home') ? '' : 'a-c'}"
                 >About Us</a
              >
            </div>`
        : html`
              <div class="hamb" @click=${() => this.openmenu()}>
                <div
                  class="sec c-sec ${this.isOpened ? 'rotate b-w' : ''} "
                ></div>
                <div class="sec c-sec ${this.isOpened ? 'none' : ''}"></div>
                <div
                  class="sec ${this.isOpened ? 'rotate-inverse b-w' : ''} "
                ></div>
              </div>
            `}

        <div class="ctn2 flex flex-at flex-jc gap-l m-w">
          <img alt="appicon" src="${this.srcImg}" id="appicon" />
          <p class="prueba ${this.rout.includes('home') ? 'ob' : ''}">
            BEAT WAVES
          </p>
        </div>
        ${this.isDesktop
        ? html`<div class="ctn3 flex flex-at flex-jc m-w">
              ${this.rout.includes('home') ||
            this.rout.includes('about') ||
            this.rout.includes('signup')
            ? html`
                    <button class="btn flex flex-at">
                      <a
                        href="/pp/signin"
                        id="signin" @click=${() => this.changerout('signin')}
                        >SignIn</a
                      >
                    </button>
                  `
            : html``}
              ${this.rout.includes('home') ||
            this.rout.includes('about') ||
            this.rout.includes('signin')
            ? html` <button class="btn flex flex-at">
              
                    <a
                      href="/pp/signup"
                      id="signup" @click=${() => this.changerout('signup')}>SignUp</a>
                  </button>`
            : html``}
            </div>`
        : html``}
      </nav>
      <div class="spacer"></div>

    `;
  }
}

customElements.define('home-view', HomeView);
