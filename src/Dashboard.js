import { createComponent } from '../js_modules/main.js'

export class Dashboard {

    async fetchHTML(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Nu s-a putut încărca HTML-ul de la: ${url}`);
        }

        const htmlText = await response.text();

        return htmlText;
    }

    async getElement() {
        const html = await this.fetchHTML('/src/Dashboard.html');
        const component = createComponent(html)

        const $btn1 = component.querySelector('.v-btn1')
        $btn1.addEventListener('click', function()  {
                const first = $btn1.querySelector('span')
                first.classList = '';
                first.classList.add('pi','pi-spinner', 'icon-spin')

                setTimeout(() => {
                    first.classList = '';
                    first.classList.add('pi','pi-search')
                }, 2000);
            }
        );

        return component
    }
}