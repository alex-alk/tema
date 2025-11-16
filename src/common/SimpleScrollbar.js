export class SimpleScrollbar {
  constructor(container) {
    this.container = typeof container === "string"
      ? document.querySelector(container)
      : container;

    if (!this.container) throw new Error("Container not found");

    // 1️⃣ Creăm wrapperul în jurul lui menu-inner
    this.wrapper = document.createElement("div");
    this.wrapper.className = "ss-content";
    Object.assign(this.wrapper.style, {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    });

    const parent = this.container.parentNode;
    parent.insertBefore(this.wrapper, this.container);
    this.wrapper.appendChild(this.container);

    // 2️⃣ Creare track
    this.track = document.createElement("div");
    this.track.className = "ss-track";
    Object.assign(this.track.style, {
      position: "absolute",
      top: "0",
      right: "2px",
      width: "3px",
      bottom: "0",
      background: "transparent",
      borderRadius: "4px",
      opacity: "1",
      transition: "background-color 0.3s, width 0.3s",
    });
    this.wrapper.appendChild(this.track);

    // 3️⃣ Creare thumb
    this.thumb = document.createElement("div");
    this.thumb.className = "ss-thumb";
    Object.assign(this.thumb.style, {
      position: "absolute",
      left: "0",
      width: "100%",
      background: "rgba(0,0,0,0.35)",
      borderRadius: "4px",
      cursor: "pointer",
      opacity: "0",
    });
    this.track.appendChild(this.thumb);

    // Variabile scroll
    this.scrollTop = 0;
    this.maxScroll = 0;
    this.thumbHeight = 0;
    this.dragging = false;
    this.dragStartY = 0;
    this.dragStartScroll = 0;

    // 4️⃣ Evenimente
    this._bindEvents();

    // 5️⃣ Inițializare
    this.update();
  }

  _bindEvents() {
    // Wheel scroll
    this.wrapper.addEventListener("wheel", e => {
      e.preventDefault();
      this.scrollTo(this.scrollTop + e.deltaY);
    });

    // Drag start
    this.thumb.addEventListener("mousedown", e => {
      this.dragging = true;
      this.dragStartY = e.clientY;
      this.dragStartScroll = this.scrollTop;
      document.body.style.userSelect = "none";

      this.track.style.width = "6px";
      this.thumb.style.background = "var(--bs-gray-700)";
    });

    // Drag move
    document.addEventListener("mousemove", e => {
      if (!this.dragging) return;
      const delta = e.clientY - this.dragStartY;
      const ratio = this.maxScroll / (this.track.clientHeight - this.thumbHeight);
      this.scrollTo(this.dragStartScroll + delta * ratio);
    });

    // Drag end
    document.addEventListener("mouseup", () => {
      if (this.dragging) {
        this.dragging = false;
        document.body.style.userSelect = "";
      }
      if (!this.track.matches(":hover")) {
        this.track.style.width = "3px";
        this.thumb.style.background = "var(--bs-gray-400)";
      }
    });

    // Hover container
    this.wrapper.addEventListener("mouseenter", () => {
      this.thumb.style.background = "var(--bs-gray-400)";
      this.thumb.style.opacity = "0.75";
      this.track.style.background = "transparent";
    });
    this.wrapper.addEventListener("mouseleave", () => {
      if (!this.dragging) {
        this.thumb.style.opacity = "0";
        this.track.style.background = "transparent";
      }
    });

    // Hover track
    this.track.addEventListener("mouseenter", () => {
      this.track.style.background = "rgba(0,0,0,0.05)";
      this.thumb.style.opacity = "0.9";
      this.thumb.style.background = "var(--bs-gray-700)";
      this.track.style.width = "6px";
    });
    this.track.addEventListener("mouseleave", () => {
      if (!this.dragging) {
        this.track.style.width = "3px";
        this.track.style.background = "transparent";
        this.thumb.style.background = "var(--bs-gray-400)";
        this.thumb.style.opacity = "0.75";
      }
    });

    // Resize observer
    new ResizeObserver(() => this.update()).observe(this.wrapper);
    new ResizeObserver(() => this.update()).observe(this.container);
  }

  update() {
    const wrapperHeight = this.wrapper.clientHeight;
    const contentHeight = this.container.scrollHeight;

    this.maxScroll = Math.max(0, contentHeight - wrapperHeight);

    this.thumbHeight = Math.max(
      20,
      (wrapperHeight / contentHeight) * this.track.clientHeight
    );

    this.thumb.style.height = this.thumbHeight + "px";
    this.scrollTo(this.scrollTop);
  }

  scrollTo(y) {
    this.scrollTop = Math.min(Math.max(0, y), this.maxScroll);
    this.container.style.transform = `translateY(${-this.scrollTop}px)`;

    const trackHeight = this.track.clientHeight - this.thumbHeight;
    const thumbOffset = (this.scrollTop / this.maxScroll) * trackHeight;
    this.thumb.style.top = `${thumbOffset}px`;
  }

  destroy() {
    // Scoate wrapper și track
    this.track.remove();
    this.wrapper.replaceWith(this.container);
    this.container.style.transform = "";
  }
}
