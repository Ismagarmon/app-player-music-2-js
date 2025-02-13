import { LitElement, html, css } from 'lit';

export class FooterView extends LitElement {
  static properties = {
    isDesktop: { type: Boolean },
    isIpad: { type: Boolean },
    isPhone: { type: Boolean },
  };

  constructor() {
    super();
    this.isDesktop = true;
    this.isIpad = false;
    this.isPhone = false;
  }

  static styles = css`
    .flex {
      display: flex;
    }

    .flex-at {
      align-items: center;
    }

    .flex-jc {
      justify-content: space-around;
    }

    span#B,
    span#W {
      font-weight: 650;
    }

    .footer {
      color: var(--background);
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      padding: 0px;
      margin: 0px;
    }

    img#appicon {
      width: 75px;
      height: 75px;
      display: block;
    }

    @media only screen and (min-width: 834px) {
      .footer {
        height: 7rem;
        width: 100%;
        background-color: var(--on_background);
      }

      .name {
        width: 15%;
        height: 3rem;
      }

      .name > p:nth-child(1) {
        margin-bottom: 0.5rem;
      }

      .license {
        width: 15%;
        height: 5rem;
      }

      .license p {
        font-size: var(--navigation2)
      }

      .rrss {
        width: 15%;
        height: 5rem;
      }

      .rrss svg {
        display: block;
        cursor: pointer;
        transition: all 0.5s;
      }

      svg:hover {
        transform: scale(1.05);
      }
    }

    @media only screen and (min-width: 430px) and (max-width: 842px) {
      .footer {
        height: 7rem;
        width: 100%;
        background-color: var(--on_background);
      }

      .name {
        width: 20%;
        height: 3rem;
      }

      .name p {
        font-size: var(--errormessage);
      }

      .name > p:nth-child(1) {
        margin-bottom: 0.5rem;
      }

      .license {
        width: 15%;
        height: 5rem;
      }

      .rrss {
        width: 15%;
        height: 5rem;
      }

      .rrss svg {
        display: block;
        cursor: pointer;
        transition: all 0.5s;
      }

      svg:hover {
        transform: scale(1.05);
      }
    }

    @media only screen and (max-width: 428px) {

      .footer {
        height: 7rem;
        width: 100%;
        background-color: var(--on_background);
      }

      .name {
        width: 20%;
        height: 5.5rem;
      }

      .name p {
        font-size: var(--errormessage);
      }

      .name > p:nth-child(1) {
        margin-bottom: 0.5rem;
      }

      .rrss {
        width: 40%;
        height: 3rem;
      }

      .rrss svg {
        display: block;
        cursor: pointer;
        transition: all 0.5s;
      }

      svg:hover {
        transform: scale(1.05);
      }

    }
  `;

  render() {
    return html`
      <div class="footer flex flex-at flex-jc">
        <div class="name">
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
        </div>
        ${this.isPhone ? html`` : html`
          <div class="license flex flex-at flex-jc">
            Playlist | Favorites | Discover | Rate
          </div>
        `}
        
        <div class="rrss flex flex-at flex-jc">
          <div>
            <a href="https://www.linkedin.com" target="_blank">
              <svg width="32" height="32" viewBox="0 0 20 20">
                <path
                  fill="white"
                  d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com" target="_blank">
              <svg width="32" height="32" viewBox="0 0 20 20">
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://x.com" target="_blank">
              <svg width="32" height="32" viewBox="0 0 50 50">
                <path
                  fill="white"
                  d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-view', FooterView);
