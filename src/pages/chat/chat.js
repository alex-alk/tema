import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class Chat {

    async getElement() {
        const html = await fetchHTML('/src/pages/chat/chat.html');
        const component = createComponent(html)
        return component
    }
}