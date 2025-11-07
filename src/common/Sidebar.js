import { createComponent } from "../../js_modules/main.js"
import { router } from "./routes.js"

export class Sidebar {

    async fetchHTML(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Nu s-a putut încărca HTML-ul de la: ${url}`);
        }

        const htmlText = await response.text();

        return htmlText;
    }

    async getElement() {
        const items = {
            'HOME' : [
                ['/', 'pi-home', 'Dashboard']
            ],
            'UI COMPONENTS': [
                ['/uikit/button', 'pi-mobile', 'Button'],
            ],
            'ACTIUNI': [
                ['/users', 'pi-id-card', 'Utilizatori'],
                ['/about', 'pi-id-card', 'About']
            ],
            'PAGINI': [
                ['#', 'pi-user', 'Auth', 
                    [['/auth/login', 'pi-sign-in', 'Login'],
                    ['/auth/login', 'pi-sign-in', 'Logins']]
                ]
            ]
        }

        let html = /* html */`
<div class="layout-sidebar">
    <ul class=layout-menu>`

        for (const item in items) {
            html += /* html */`
            <li class="layout-root-menuitem">
                <div class="layout-menuitem-root-text">${item}</div>
                <ul class="layout-submenu">`

                for (const subitem of items[item]) {
                    
                    if (3 in subitem) {
                        html += /* html */`
                        <li>
                            <a class="v-menu-link">
                                <i class="pi pi-fw ${subitem[1]} layout-menuitem-icon"></i>
                                <span class="layout-menuitem-text">${subitem[2]}</span>
                            
                            `

                        html += `<i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a>`
                        html += `<ul class="layout-submenu">`
                        for (const subitemsubitem of subitem[3]) {
                            html += /* html */`
                                <li>
                                    <a href="${subitemsubitem[0]}" class="v-menu-link">
                                        <i class="pi pi-fw ${subitemsubitem[1]} layout-menuitem-icon"></i>
                                        <span class="layout-menuitem-text">${subitemsubitem[2]}</span>
                                    </a>
                                </li>
                                `
                            console.log(subitem[3])
                        }
                        html += '</ul>'
                    } else {
                        html += /* html */`
                        <li>
                            <a href="${subitem[0]}" class="v-menu-link">
                                <i class="pi pi-fw ${subitem[1]} layout-menuitem-icon"></i>
                                <span class="layout-menuitem-text">${subitem[2]}</span>
                            
                            `
                        html += '</a>'
                    }

                    html += `</li>`
                }
                html += '</ul></li>'
        }
        html += `
    </ul>
</div>
`
       // const html = await this.fetchHTML('/src/common/Sidebar.html');

        const element = createComponent(html)
        const links = element.querySelectorAll('.v-menu-link')

        router.subscribeToRouteChange((path) => {
            selectMenuItem(path)
        })

        function selectMenuItem(path) {
            for (const link of links) {
                const routeFromLink = link.getAttribute('href')
                if (path === routeFromLink) {
                    link.classList.add('active-route')
                } else {
                    link.classList.remove('active-route')
                }
            }
        }

        selectMenuItem(router.stripBase(window.location.pathname))
        return element
    }
    
}