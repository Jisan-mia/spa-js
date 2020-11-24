import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Viewing Post");
    }

    async getHtml(){
        console.log(this.params.id)
        return `
            <h1>My Posts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto, eveniet atque debitis beatae libero el consectetur !</p>
              
        
        `
    }

}