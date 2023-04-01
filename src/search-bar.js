import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class MySearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    word: { type: String }
  }

  static styles = css`
    :host {
      
    }
    #searchBar {
      width: 90%;
      box-sizing: border-box;
      border: 1px solid #c8c8c8;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      padding: 12px 20px 12px 40px;
      position: relative;
    }
    .searchIcon{
      position: left;
    }
    
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.word = "word";
    //this.takeInput();
    
  }


  /**
  takeInput(){
    document.querySelector('#searchBar').addEventListener('input', (e) => {
    const word = e.target.value;
  });
  };
  */


 
  render() {
    return html`
    <div class="myBar">
      <simple-icon class="searchIcon" accent-color="black" icon="search"></simple-icon><input type="text" id="searchBar" placeholder="${this.topic}" />
      
    </div>

    
    `;
  }
}





customElements.define('search-bar', MySearchBar);