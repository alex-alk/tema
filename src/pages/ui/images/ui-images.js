import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIImages {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/images/ui-images.html');
        const component = createComponent(html)
        return component
    }
}