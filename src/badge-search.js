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

    .exploreBox{
      width: 80%;
      background-color: white;
      font-size: 24px;
      margin: auto;
      padding: 10px;
    }

    .searchBar{
      width: 80%;
      margin: left;
      padding: 12px;
    }

    .allButton{
      font-size: 18px;
      color: blue;
      background-color: white;
      border: 2px solid gray;
      border-bottom: 2px solid white;
      padding: 10px;
    
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

      <div class="exploreBox">
        Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.

        <div class="searchBar">
          <search-bar></search-bar>
        </div>

        <div class="navigation">
          <button class="allButton">All</button>
          <button class="missionsButton">Missions</button>
          <button class="groupsButton">Groups</button>
          <button class="badgesButton">Badges</button>
          <button class="peopleButton">People</button>

        </div>
      </div>

      <div class="wrapper">

        

        

        
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