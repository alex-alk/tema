import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIScrollspy {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/scrollspy/ui-scrollspy.html');
        const component = createComponent(html)
        return component
    }
}