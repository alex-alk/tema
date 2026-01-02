import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MapsLeaflet {

    async getElement() {
        const html = await fetchHTML('/src/pages/maps/leaflet/maps-leaflet.html');
        const component = createComponent(html)
        return component
    }
}