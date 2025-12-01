import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class SocialFeed {

    async getElement() {
        const html = await fetchHTML('/src/pages/social-feed/social-feed.html');
        const component = createComponent(html)
        return component
    }
}