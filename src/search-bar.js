import { LitElement, html, css } from 'lit';

class MySearchBar extends LitElement {
  static properties = {
    topic: { type: String },
  }

  static styles = css`
    :host {
      
    }
    .searchBar {
      width: 500px;
    }
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
  }

  render() {
    return html`
    <div>
      <input type="text" class="searchBar" placeholder="${this.topic}">
    </div>
    `;
  }
}

customElements.define('search-bar', MySearchBar);