import { html, LitElement } from "lit";


export class SuperButton extends LitElement {

    static properties = {
        nombre: { type: String }
    }
    

    constructor() {
        super()
        this.nombre = 'Somebody'
    }

    render() {
        return html`
            <button @click=${this.pulsar}>
                press me
            </button>
        `;
    }



    pulsar() {

        this.dispatchEvent(

            new CustomEvent(
                'message', { detail: `hello: ${this.nombre}`, bubbles: true, composed: true }
            )
        )

    }

    
}


customElements.define('super-button', SuperButton)