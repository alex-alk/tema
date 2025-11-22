import { createComponent } from "../../js_modules/main.js"
import { router } from "../routes.js"

export class Topbar {

    async fetchHTML(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Nu s-a putut încărca HTML-ul de la: ${url}`);
        }

        const htmlText = await response.text();

        return htmlText;
    }

    async getElement() {
        
// `
        const html = await this.fetchHTML('/src/common/topbar.html');
        const component = createComponent(html)


        
        
        return component
    }
    
}