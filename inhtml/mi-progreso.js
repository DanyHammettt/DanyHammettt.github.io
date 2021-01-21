class MiProgeso extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<progress max="100"><Iniciando…</progress>`;
  }
}
customElements.define("mi-progreso", MiProgeso);
