import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class Tickets {

    async getElement() {
        const html = await fetchHTML('/src/pages/support-center/tickets/tickets.html');
        const component = createComponent(html)
        return component
    }
}