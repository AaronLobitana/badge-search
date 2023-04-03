import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import { SimpleIcon } from '@lrnwebcomponents/simple-icon/simple-icon.js';

class BadgeTemplate extends LitElement {
  static properties = {
    creatorName: {type: String},
    courseName: {type: String},
    courseCategory: {type: String},
    courseIcon: {type: String},
    courseColor: {type: String}
  }

  static styles = css`
    .wrapper {
      background-color: green;
      width: 420px;
      height: 250px;
      border: 3px solid black;
      border-radius: 10px;
      margin: 10px;
    }
    .frame {
      width: 400px;
      height: 250px;
      background-color: #d3d3d3;
      border-radius: 10px;
      border: 1px solid black;
      box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);    
      margin-left: 20px;
      border-left: 2px solid black;
      border-right: 2px solid black;
    }
    .categoryLabel {
      border-bottom: 3.5px solid black;
      width: 400px;
      height: 15px;
    }
    .categoryLabel h4 {
      margin-left: 5px;
      text-align: left;
      line-height: 15px;
    }
    .courseTitle {
      max-width: 250px;
      max-height: 230px;
      padding-top: 32px;
      font-size: 250%;
      word-wrap: break-word;
    }
    .courseTitle h3 {
      margin-top: 0px;
    }
    .course-icon {
      float: right;
      padding-right: 30px;
      padding-top: 30px;
    }
    .creator-title {
      display: flex;
      font-size: 120%;
      vertical-align: bottom;
    }
    .creator-title span {
      align-self: flex-end;
      vertical-align: bottom;
    } 
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.creatorName = 'Prof. BTO Pro';
    this.courseName =  'IST 256';
    this.courseCategory = 'Information Sciences and Technology';
    this.courseIcon = 'extension';
    this.courseColor = 'Red'; 
  }

  render() {

return html`
<simple-iconset-demo></simple-iconset-demo>
  <div class="wrapper">
    <div class="frame">
      <div class="categoryLabel">
        <h4>${this.courseCategory}</h4>
      <div>
      <simple-icon class="course-icon" accent-color="green" icon=${this.courseIcon} style="--simple-icon-width:100px;--simple-icon-height:100px;">
</simple-icon>
      <div class="courseTitle">
        <h4>${this.courseName}</h4>
      </div>
      <div class="creator-title">
        <span>Creator: ${this.creatorName}</span>
      </div>
    </div>
  </div>
     `;
  }
}

customElements.define('badge-template', BadgeTemplate);