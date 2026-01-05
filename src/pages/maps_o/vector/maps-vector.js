import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MapsVector {

    async getElement() {
        const html = await fetchHTML('/src/pages/maps/vector/maps-vector.html');
        const component = createComponent(html)
        return component
    }
}