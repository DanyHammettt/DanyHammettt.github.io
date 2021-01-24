class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li><a href="index.html">Mi Perfil</a></li>
      </ul>`;
    this.ul = this.querySelector("ul");
  }
  /**
   * @param {Set<string>} privilegios
   */
  protege(privilegios) {
    let html = "";
    if (privilegios.has("Pasatiempos")) {
      html += /* html */ `<li><a href="almacenes.html">Almacen</a></li>`;
    }
    if (privilegios.has("Usuarios")) {
      html += /* html */ `<li><a href="usuarios.html">Usuarios</a></li>`;
    }
    this.ul.innerHTML += html;
  }
}
customElements.define("mi-nav", MiNav);
