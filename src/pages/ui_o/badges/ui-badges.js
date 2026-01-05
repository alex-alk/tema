import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIBadges {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/badges/ui-badges.html');
        const component = createComponent(html)
        return component
    }
}