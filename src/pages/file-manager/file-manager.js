import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class FileManager {

    async getElement() {
        const html = await fetchHTML('/src/pages/file-manager/file-manager.html');
        const component = createComponent(html)

        return component
    }
}