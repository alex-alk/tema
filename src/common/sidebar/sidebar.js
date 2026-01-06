import { createComponent, fetchHTML } from "../../../js_modules/main.js"
import { router } from "../../routes.js"
 import { SimpleScrollbar } from "../SimpleScrollbar.js";

export class Sidebar {

    async getElement() {

        const html = await fetchHTML('/src/common/sidebar/sidebar.html')

        const component = createComponent(html)

        const $menuLinks = component.querySelectorAll('.side-nav-link')
        
        for (const $menuLink of $menuLinks) {
            $menuLink.addEventListener('click', function(e) {
                const $submenu = this.nextElementSibling;

                // Verificăm dacă elementul următor este într-adevăr un meniu de colaps
                if (!$submenu || !$submenu.classList.contains('collapse')) return;

                e.preventDefault();

                // $submenu.height = 0;
                // $submenu.classList.remove('hidden');
                // $submenu.height = 'auto';

                const isOpening = !$submenu.style.height || $submenu.style.height === '0px';

                if (isOpening) {
                    $submenu.style.height = $submenu.scrollHeight + 'px';
                    this.parentElement.classList.add('menuitem-active');
                } else {
                    $submenu.style.height = '0px';
                    this.parentElement.classList.remove('menuitem-active');
                }

                // --- LOGICA MULTI-LEVEL ---
                // Actualizăm înălțimea tuturor părinților care sunt și ei meniuri collapse
                let $parentCollapse = this.closest('.collapse');
                while ($parentCollapse) {
                    if (isOpening) {
                        // Adunăm înălțimea noului meniu deschis la înălțimea existentă a părintelui
                        $parentCollapse.style.height = ($parentCollapse.scrollHeight + $submenu.scrollHeight) + 'px';
                    } else {
                        // Resetăm părintele la propriul său scrollHeight actualizat
                        $parentCollapse.style.height = ($parentCollapse.scrollHeight - $submenu.scrollHeight) + 'px';
                    }
                    // Urcăm un nivel mai sus în DOM pentru a vedea dacă mai există un alt părinte collapse
                    $parentCollapse = $parentCollapse.parentElement.closest('.collapse');
                }
            });
        }

        const view = component.querySelector('.scroll-area');
        const thumb = component.querySelector('.bar-thumb');

        new SimpleScrollbar(view, thumb);

        //todo: testat cu 2 elemente in meniu
        // $box.addEventListener('mouseenter', function() {
        //     $scrollbar.style.opacity = 0.5    
        // });

        // let posY = 0

        // $box.addEventListener('wheel', (event) =>  {
        //     posY += event.deltaY * speed

        //     Math.min(Math.max(0, y), this.maxScroll);
        //     requestAnimationFrame(() => {
        //         $scrollbar.style.transform = `translate3d(${0}px, ${posY}px, ${0}px)`
        //     })
        // });
        
        
        return component
    }
    
}