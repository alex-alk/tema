export class SimpleScrollbar {
  constructor(view, thumb) {
    this.view = view;
    this.thumb = thumb;
    this.isDragging = false;
    this.startY = 0;
    this.startScrollTop = 0;

    this.thumb.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.startY = e.pageY;
        this.startScrollTop = this.view.scrollTop;
        
        // DEZACTIVĂM tranziția de 1s în timpul drag-ului pentru a nu avea lag
        this.thumb.style.transition = 'opacity 1s ease, transform 0s'; 
        document.body.classList.add('is-dragging'); // Opțional: blocăm selecția textului
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        
        const deltaY = e.pageY - this.startY;
        const thumbHeight = this.thumb.offsetHeight;
        const scrollableHeight = this.view.scrollHeight - this.view.clientHeight;
        const trackHeight = this.view.clientHeight - thumbHeight;

        // Calculăm noul scroll
        const scrollMove = (deltaY / trackHeight) * scrollableHeight;
        this.view.scrollTop = this.startScrollTop + scrollMove;
    });

    window.addEventListener('mouseup', () => {
        if (this.isDragging) {
           this.isDragging = false;
            
            // 1. Ștergem stilul inline pentru a lăsa CSS-ul să preia controlul
            this.thumb.style.opacity = ''; 
            
            // 2. Reactivăm tranziția de 1s
            this.thumb.style.transition = 'opacity 1s ease';
            
            document.body.classList.remove('is-dragging');
        }
    });

    this.view.addEventListener('scroll', this.syncThumb);
    
    window.addEventListener('resize', this.syncThumb);

    const ro = new ResizeObserver(() => {
        this.syncThumb();
    });
    const sideNav = view.querySelector('.side-nav');
    ro.observe(sideNav);

    // ACESTA ESTE APELUL CARE O FACE SĂ APARĂ LA ÎNCEPUT:
    this.syncThumb();

    setTimeout(this.syncThumb, 100);
  }

  syncThumb = () => {
  // Verificăm dacă e nevoie de scroll
        if (this.view.scrollHeight <= this.view.clientHeight) {
            this.thumb.style.opacity = "0"; // Ascundem bara dacă nu e conținut destul
            return;
        }

        // Calculăm proporția
        const scrollRatio = this.view.scrollTop / (this.view.scrollHeight - this.view.clientHeight);
        const thumbHeight = Math.max((this.view.clientHeight / this.view.scrollHeight) * this.view.clientHeight, 40);
        
        this.thumb.style.height = `${thumbHeight}px`;
        
        // Mutăm bara
        const moveMax = this.view.clientHeight - thumbHeight;
        const translateY = scrollRatio * moveMax;
        
        this.thumb.style.transform = `translateY(${translateY}px)`;
        this.thumb.style.opacity = this.isDragging ? "1" : "0.1"; // Menținem opacitatea în funcție de stare
    };
  
}
