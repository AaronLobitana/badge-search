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
        this.name = 'Aaron Lobitana';
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
        <h2>${this.name}</h2>
        <div class="box">

            ${this.cards.map(card => html`
            <div class="item">
                <mini-resume imageURL="${card.imageURL}" name="${card.name}" extrainfolabel="${card.extrainfolabel}" ?shadow-enable="${card.shadowEnable}" new-color="${card.newColor}" memeTop="${card.memeTop}" memeBottom="${card.memeBottom}" ?opened="${card.opened}"></mini-resume>
            </div>
            `)}

        </div>



        `;
    }
    
}

customElements.define(MyBadgeList.tag, MyBadgeList);