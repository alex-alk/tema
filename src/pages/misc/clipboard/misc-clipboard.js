import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscClipboard {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/clipboard/misc-clipboard.html');
        const component = createComponent(html)
        return component
    }
}