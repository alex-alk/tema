import { createComponent, fetchHTML } from "../../../js_modules/main.js"

export class Footer {

    async getElement() {
        
        const html = await fetchHTML('/src/common/footer/footer.html')
        const component = createComponent(html)
        return component
    }
    
}