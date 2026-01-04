import { Sidebar } from './sidebar/sidebar.js'
import { Footer } from './footer/footer.js'
import { Topbar } from './topbar/topbar.js'

export class AppLayout {

    async getElement() {
        const html =  /*html*/`
<div class="wrapper">
    <top-bar></top-bar>
    <side-bar></side-bar>
    <div class="content-page">
        <div class="content">
            <router-view></router-view>
        </div>
        <admin-footer></admin-footer>
    </div>
    </div>
</div>
`
        const template = document.createElement('template')
        template.innerHTML = html
        const component = template.content

        const $topbar = component.querySelector('top-bar')
        $topbar.replaceWith(await (new Topbar).getElement())

        const $sidebar = component.querySelector('side-bar')
        $sidebar.replaceWith(await (new Sidebar).getElement())

        const $footer = component.querySelector('admin-footer')
        $footer.replaceWith(await (new Footer).getElement())

        return component
    }
    
}