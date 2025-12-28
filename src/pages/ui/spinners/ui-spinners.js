import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UISpinners {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/spinners/ui-spinners.html');
        const component = createComponent(html)
        return component
    }
}