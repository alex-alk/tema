import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ExtendedScrollbar {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/scrollbar/extended-scrollbar.html');
        const component = createComponent(html)
        return component
    }
}