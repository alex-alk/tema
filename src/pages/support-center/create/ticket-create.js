import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TicketCreate {

    async getElement() {
        const html = await fetchHTML('/src/pages/support-center/create/ticket-create.html');
        const component = createComponent(html)
        return component
    }
}