import { LitElement, html, css } from 'lit';
import "";


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