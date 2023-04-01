import { LitElement, html, css } from 'lit';


export class MyBadgeList extends LitElement{

    static get tag() {
        return 'mybadge-list';
    }

    static get properties() {
        return {
            badges: { type: Array },
        }

    }

    constructor() {
        super();
        this.badges = [];
        this.updateBadges();
        this.searchForThis = 'dev';
        this.searchThis(this.data, this.searchForThis);
    }



    updateBadges() {
        const address = '../api/badgearray';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
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


    static get styles(){
        return css`
        
        :host{
            display: block;
        }
        .box{
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex;
        }


    `;
    }
    

    render() {
        return html`
        <div class="box">

            ${this.badges.map(badge => html`
            <div class="item">
                
            </div>
            `)}

        </div>



        `;
    }
    
}

customElements.define(MyBadgeList.tag, MyBadgeList);