import { LitElement, html, css } from 'lit';
import "./search-bar";


class BadgeSearch extends LitElement {
  static properties = {
    header: { type: String },
    data: { type: Array },
    searchForThis: { type: String }
  }

  static styles = css`

    h2{
      font-size: 20px;
    }

    .blah{
      font-size: 20px;
      color: red;
    }

    .wrapper{
      background-color: white;
    }
    
  `;

  constructor() {
    super();
    this.header = 'Badge Search';
    this.data = 
    [
      {
        "name": "john",
        "age": "20",
        "job": "developer"
      },
      {
        "name": "tim",
        "age": "40",
        "job": "engineer"
      },
      {
        "name": "duncan",
        "age": "20",
        "job": "software developer"
      }
    ];    
    this.searchForThis = 'dev';

    this.searchThis(this.data, this.searchForThis);
  }

  searchThis(Array, searchForThis){
      return Array.filter((thing) => 
      {
        for (var item in thing)
        {
          if (thing[item].toString().toLowerCase().includes(this.searchForThis.toLowerCase()))
          {
            return true;
          }
        }
        return false;
      });
    }

  render() {
    return html`

      
      <div class="wrapper">

        <div class="searchBar">
          <search-bar></search-bar>
        </div>

        
      </div>

      <div class="blah">
        <h2>You are seaching for: ${this.searchForThis}</h2>
        <h2>${this.searchThis(this.data,this.searchForThis)}</h2>
        <h2>${this.header}</h2>
      </div>

      
    `;
  }
}

customElements.define('badge-search', BadgeSearch);