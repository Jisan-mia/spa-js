import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1> Welcome to the Dashboard </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto, eveniet atque debitis beatae libero el consectetur adipisicing elit. Aliquid architecto, eveniet atque debitis consectetur adipisicing elit. Aliquid architecto, eveniet atque debitis beatae libero el beatae libero el consectetur adipisicing elit. Aliquid architecto, eveniet atque debitis beatae libero el igendi ipsum. Blanditiis, ducimus temporibus!</p>

            <p>
                <a href="/posts" data-link="">View Recent Posts</a>
            </p> 
        
        `
    }

}