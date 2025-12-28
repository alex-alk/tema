import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIVideos {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/videos/ui-videos.html');
        const component = createComponent(html)
        return component
    }
}