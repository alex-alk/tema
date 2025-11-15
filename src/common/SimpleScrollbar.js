/* ------------------------------------------------------
   Simplified Custom Scrollbar
   - readable
   - lightweight
   - no dependencies
   - works like PerfectScrollbar (basic features)
   ------------------------------------------------------ */

export class SimpleScrollbar {
  constructor(container) {
    this.container = typeof container === "string"
      ? document.querySelector(container)
      : container;

    this.container.style.position = "relative";
    this.container.style.overflow = "hidden";

    // Wrap content
    this.content = document.createElement("div");
    this.content.className = "ss-content";
    this.content.style.position = "absolute";
    this.content.style.top = "0";
    this.content.style.left = "0";
    this.content.style.right = "0";

    // Move existing children
    while (this.container.firstChild) {
      this.content.appendChild(this.container.firstChild);
    }
    this.container.appendChild(this.content);

    // Create scrollbar track
    this.track = document.createElement("div");
    this.track.className = "ss-track";
    this.track.style.position = "absolute";
    this.track.style.top = "0";
    this.track.style.right = "2px";
    this.track.style.width = "6px";
    this.track.style.bottom = "0";
    this.track.style.background = "rgba(0,0,0,0.05)";
    this.track.style.borderRadius = "4px";
    this.track.style.opacity = "0";
    this.track.style.transition = "opacity 0.2s";
    this.container.appendChild(this.track);

    // Create thumb
    this.thumb = document.createElement("div");
    this.thumb.className = "ss-thumb";
    this.thumb.style.position = "absolute";
    this.thumb.style.left = "0";
    this.thumb.style.width = "100%";
    this.thumb.style.background = "rgba(0,0,0,0.35)";
    this.thumb.style.borderRadius = "4px";
    this.thumb.style.cursor = "pointer";
    this.track.appendChild(this.thumb);

    this.scrollTop = 0;
    this.maxScroll = 0;
    this.thumbHeight = 0;

    this.dragging = false;
    this.dragStartY = 0;
    this.dragStartScroll = 0;

    this._bindEvents();
    this.update();
  }

  /* ------------------------ EVENT LOGIC ------------------------ */
  _bindEvents() {
    // Mousewheel scroll
    this.container.addEventListener("wheel", e => {
      e.preventDefault();
      this.scrollTo(this.scrollTop + e.deltaY);
    });

    // Thumb drag
    this.thumb.addEventListener("mousedown", e => {
      this.dragging = true;
      this.dragStartY = e.clientY;
      this.dragStartScroll = this.scrollTop;
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", e => {
      if (!this.dragging) return;
      const delta = e.clientY - this.dragStartY;
      const ratio = this.maxScroll / (this.track.clientHeight - this.thumbHeight);
      this.scrollTo(this.dragStartScroll + delta * ratio);
    });

    document.addEventListener("mouseup", () => {
      this.dragging = false;
      document.body.style.userSelect = "";
    });

    // Show scrollbar on hover
    this.container.addEventListener("mouseenter", () => {
      this.track.style.opacity = "1";
    });

    this.container.addEventListener("mouseleave", () => {
      if (!this.dragging) this.track.style.opacity = "0";
    });

    // Resize observer
    new ResizeObserver(() => this.update()).observe(this.container);
    new ResizeObserver(() => this.update()).observe(this.content);
  }

  /* ------------------------ CORE LOGIC ------------------------ */
  update() {
    const containerHeight = this.container.clientHeight;
    const contentHeight = this.content.scrollHeight;

    this.maxScroll = Math.max(0, contentHeight - containerHeight);

    // Thumb height proportional
    this.thumbHeight = Math.max(
      20,
      (containerHeight / contentHeight) * this.track.clientHeight
    );
    this.thumb.style.height = this.thumbHeight + "px";

    this.scrollTo(this.scrollTop);
  }

  scrollTo(y) {
    this.scrollTop = Math.min(Math.max(0, y), this.maxScroll);
    this.content.style.transform = `translateY(${-this.scrollTop}px)`;

    const trackHeight = this.track.clientHeight - this.thumbHeight;
    const thumbOffset = (this.scrollTop / this.maxScroll) * trackHeight;
    this.thumb.style.top = `${thumbOffset}px`;
  }

  destroy() {
    this.container.innerHTML = "";
    while (this.content.firstChild) {
      this.container.appendChild(this.content.firstChild);
    }
  }
}
