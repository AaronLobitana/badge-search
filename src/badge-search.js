import { LitElement, html, css } from 'lit';
import "./search-bar";
import "./badge-list";
import { MyBadgeList } from './badge-list';


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

    .badgeList{
      width: 80%;
      background-color: white;
      font-size: 20px;
      margin: auto;
      padding: 10px;
    }

    .allButton{
      padding: 12px;
      font-size: 16px;
      color: rgb(0,132,255);
      background-color: white;
      border: 2px solid lightgray;
    }
    .missionsButton{
      padding: 12px;
      font-size: 16px;
      color: rgb(0,132,255);
      background-color: white;
      border: 2px solid lightgray;
    }
    .groupsButton{
      padding: 12px;
      font-size: 16px;
      color: rgb(0,132,255);
      background-color: white;
      border: 2px solid lightgray;
    }
    .badgesButton{
      padding: 12px;
      font-size: 16px;
      color: rgb(0,132,255);
      background-color: white;
      border: 2px solid lightgray;
    }
    .peopleButton{
      padding: 12px;
      font-size: 16px;
      color: rgb(0,132,255);
      background-color: white;
      border: 2px solid lightgray;
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

  searchThis(items, searchForThis){
      return items.filter((thing) => 
      {
        for (var item in thing)
        {
          if (thing[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
          {
            return true;
          }
        }
        return false;
      });
  }
  wordChanged(e) {
    this.searchForThis = e.detail.value;
  }
  render() {
    return html`

      <div class="exploreBox">
        Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.

        <div class="searchBar">
          <search-bar @word-changed="${this.wordChanged}"></search-bar>

        </div>

        <div class="navigation">
          <button class="allButton">All</button>
          <button class="missionsButton">Missions</button>
          <button class="groupsButton">Groups</button>
          <button class="badgesButton">Badges</button>
          <button class="peopleButton">People</button>

        </div>
      </div>

      <div class="badgeList">
        <div class="listHeading">
          Looking for something brand spankin' new? Here are the most recently added badges!
        </div>

        <mybadge-list></mybadge-list>
        
        
      </div>

      
      <div class="blah">
                
        <h2>You are seaching for: ${this.searchForThis}</h2>
        ${this.searchThis(this.data,this.searchForThis).map((item) => html`
          <div>
            <h2>${item.name}</h2>
            <h2>${item.age}</h2>
            <h2>${item.job}</h2>
          </div>
        `)}
        <h2>${this.header}</h2>
      </div>

      
    `;
  }

  
}



customElements.define('badge-search', BadgeSearch);