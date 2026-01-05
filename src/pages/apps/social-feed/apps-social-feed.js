import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class AppsSocialFeed {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/social-feed/apps-social-feed.html');
        const component = createComponent(html)

        return component
    }
}