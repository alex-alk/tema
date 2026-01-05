import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIEmbedVideo {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/embed-video/ui-embed-video.html');
        const component = createComponent(html)
        return component
    }
}