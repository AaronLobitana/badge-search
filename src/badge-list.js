import { LitElement, html, css } from 'lit';
import "./badge-template";


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
        this.searchForThis = 'aaron';
        this.searchThis(this.badges,this.searchForThis);
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
            <div>You are searching for: ${this.searchForThis}</div>
            
            ${this.searchThis(this.badges,this.searchForThis).map(badge => html`
            <div class="item">
                <badge-template creatorName="${badge.creatorName}" courseName="${badge.courseName}" courseCategory="${badge.courseCategory}" courseIcon="${badge.courseIcon}" courseColor="${badge.courseColor}"></badge-template>
            </div>
            `)}

        </div>



        `;
    }
    
}

customElements.define(MyBadgeList.tag, MyBadgeList);