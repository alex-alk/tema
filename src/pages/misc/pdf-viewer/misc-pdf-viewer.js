import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscPdfViewer {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/pdf-viewer/misc-pdf-viewer.html');
        const component = createComponent(html)
        return component
    }
}