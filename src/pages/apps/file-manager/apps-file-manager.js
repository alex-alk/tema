import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class AppsFileManager {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/file-manager/apps-file-manager.html');
        const component = createComponent(html)

        return component
    }
}