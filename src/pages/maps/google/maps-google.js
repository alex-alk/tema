import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MapsGoogle {

    async getElement() {
        const html = await fetchHTML('/src/pages/maps/google/maps-google.html');
        const component = createComponent(html)
        return component
    }
}