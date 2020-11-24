import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Post");
    }

    async getHtml(){
        return `
            <h1>My Posts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto, eveniet atque debitis beatae libero el consectetur !</p>

            <p>
                <a href="/posts" data-link="">Read Artcle No-1</a>
            </p> 
            <p>
                <a href="/posts" data-link="">Read Artcle No-2</a>
            </p>
            <p>
                <a href="/posts" data-link="">Read Artcle No-3</a>
            </p>
            <p>
                <a href="/posts" data-link="">Read Artcle No-4</a>
            </p>                 
        
        `
    }

}