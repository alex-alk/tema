import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EmailCompose {

    async getElement() {
        const html = await fetchHTML('/src/pages/email/compose/email-compose.html');
        const component = createComponent(html)
        return component
    }
}