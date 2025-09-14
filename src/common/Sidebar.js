import { createComponent } from "../../js_modules/main.js"
import { router } from "./routes.js"

export class Sidebar {

    getElement() {
        const items = {
            'HOME' : [
                ['/', 'pi-home', 'Dashboard']
            ],
            'UI COMPONENTS': [
                ['/button', 'pi-mobile', 'Button'],
            ],
            'ACTIUNI': [
                ['/users', 'pi-id-card', 'Utilizatori'],
                ['/about', 'pi-id-card', 'About']
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
                    html += /* html */`
                    <li>
                        <a href="${subitem[0]}" class="router-link-active router-link-exact-active v-menu-link">
                            <i class="pi pi-fw ${subitem[1]} layout-menuitem-icon"></i>
                            <span class="layout-menuitem-text">${subitem[2]}</span>
                        </a>
                    </li>`
                }
                html += '</ul></li>'
        }
        html += `
    </ul>
</div>
`
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