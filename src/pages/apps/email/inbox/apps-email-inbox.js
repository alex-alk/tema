import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEmailInbox {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/email/inbox/apps-email-inbox.html');
        const component = createComponent(html)

        return component
    }
}