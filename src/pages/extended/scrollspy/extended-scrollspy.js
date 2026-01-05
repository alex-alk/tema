import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ExtendedScrollspy {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/scrollspy/extended-scrollspy.html');
        const component = createComponent(html)
        return component
    }
}