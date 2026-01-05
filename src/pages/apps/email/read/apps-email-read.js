import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEmailRead {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/email/read/apps-email-read.html');
        const component = createComponent(html)

        return component
    }
}