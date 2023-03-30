import { LitElement, html, css } from 'lit';

class MySearchBar extends LitElement {
  static properties = {
    topic: { type: String },
  }

  static styles = css`
    :host {
      
    }
    .searchBar {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #c8c8c8;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      padding: 12px 20px 12px 40px;
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