import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Setting");
    }

    async getHtml(){
        return `
            <h1>My Setting </h1>
            <ul style="list-style: none; cursor: pointer;">    
                <li> Account</li>
                <li> Name</li>
                <li> Email</li>
                <li> Address</li>
            </ul>

            <p>
                <a href="/posts" data-link="">See Posts</a>
            </p> 
        
        `
    }

}