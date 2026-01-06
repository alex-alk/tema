import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'
import { SimpleScrollbar } from "../../../common/SimpleScrollbar.js";

export class ExtendedScrollbar {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/scrollbar/extended-scrollbar.html');
        const component = createComponent(html)

        //const sb = new SimpleScrollbar(el);



        const view = component.querySelector('.scroll-area');
        const thumb = component.querySelector('.bar-thumb');

        new SimpleScrollbar(view, thumb);


// let isDragging = false;
// let startY, startScrollTop;

// // --- 1. FUNCTIA DE SINCRONIZARE (Scroll real -> Bara vizuala) ---
// const syncThumb = () => {
//   // Verificăm dacă e nevoie de scroll
//   if (view.scrollHeight <= view.clientHeight) {
//     thumb.style.opacity = "0"; // Ascundem bara dacă nu e conținut destul
//     return;
//   }

//   // Calculăm proporția
//   const scrollRatio = view.scrollTop / (view.scrollHeight - view.clientHeight);
//   const thumbHeight = Math.max((view.clientHeight / view.scrollHeight) * view.clientHeight, 40);
  
//   thumb.style.height = `${thumbHeight}px`;
  
//   // Mutăm bara
//   const moveMax = view.clientHeight - thumbHeight;
//   const translateY = scrollRatio * moveMax;
  
//   thumb.style.transform = `translateY(${translateY}px)`;
//   thumb.style.opacity = isDragging ? "1" : "0.1"; // Menținem opacitatea în funcție de stare
// };

// // --- 2. LOGICA DE DRAG (Mouse pe bara -> Scroll real) ---
// thumb.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   startY = e.pageY;
//   startScrollTop = view.scrollTop;
  
//   // DEZACTIVĂM tranziția de 1s în timpul drag-ului pentru a nu avea lag
//   thumb.style.transition = 'opacity 1s ease, transform 0s'; 
//   document.body.classList.add('is-dragging'); // Opțional: blocăm selecția textului
//   e.preventDefault();
// });

// window.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;
  
//   const deltaY = e.pageY - startY;
//   const thumbHeight = thumb.offsetHeight;
//   const scrollableHeight = view.scrollHeight - view.clientHeight;
//   const trackHeight = view.clientHeight - thumbHeight;

//   // Calculăm noul scroll
//   const scrollMove = (deltaY / trackHeight) * scrollableHeight;
//   view.scrollTop = startScrollTop + scrollMove;
// });

// window.addEventListener('mouseup', () => {
//   if (isDragging) {
//     isDragging = false;
    
//     // 1. Ștergem stilul inline pentru a lăsa CSS-ul să preia controlul
//     thumb.style.opacity = ''; 
    
//     // 2. Reactivăm tranziția de 1s
//     thumb.style.transition = 'opacity 1s ease';
    
//     document.body.classList.remove('is-dragging');
//   }
// });

// // --- 3. ACTIVARE EVENIMENTE ---

// view.addEventListener('scroll', syncThumb);
// window.addEventListener('resize', syncThumb);

// // ACESTA ESTE APELUL CARE O FACE SĂ APARĂ LA ÎNCEPUT:
// syncThumb();

// // Un mic timer pentru a recalcula dacă browserul e lent la randare
// setTimeout(syncThumb, 100);

        return component
    }
}