class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2021 Daniel Franco Tinajero.`;
    }
}
customElements.define("mi-footer", MiFooter);
