import { createComponent } from '../../../js_modules/main.js'
import { path } from '../../common/routes.js'

export class Button {

    async fetchHTML(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Nu s-a putut încărca HTML-ul de la: ${url}`);
        }

        const htmlText = await response.text();

        return htmlText;
    }

    async getElement() {
        const html = await this.fetchHTML('/src/uikit/button/button.html');

        const component = createComponent(html)

        const $btn1 = component.querySelector('.v-btn1')
        const $btn2 = component.querySelector('.v-btn2')

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

        $btn2.addEventListener('click', function()  {
                const first = $btn2.querySelector('span');
                first.classList.remove('hidden');

                setTimeout(() => {
                    first.classList.add('hidden');
                }, 2000);
            }
        );

        const $btns = component.querySelectorAll('.btn-split-dropdown')

        for (const $btn of $btns) {
            const $menu = $btn.nextElementSibling;
            $btn.addEventListener('click', 
                (event) => {
                    $menu.classList.toggle('tieredmenu-show')

                    // if we do not use this, the click will be intercepted by document
                    // and the menu will never show up
                    event.stopPropagation()
                }
            );
            document.addEventListener('click', function() {
                $menu.classList.remove('tieredmenu-show')
            })
        }
        
        return component
    }
}