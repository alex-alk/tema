import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class AppsChat {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/chat/apps-chat.html');
        const component = createComponent(html)

        return component
    }
}