(function () {
  "use strict";

  const grid = document.getElementById("project-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxMedia = document.getElementById("lightbox-media");
  const lightboxCaption = document.getElementById("lightbox-caption");

  /* ---------- Build the grid from PROJECTS ---------- */
  function renderGrid() {
    grid.innerHTML = "";

    PROJECTS.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.tags = project.tags.join(" ");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View ${project.title}`);

      const isExternal = project.type === "external";

      card.innerHTML = `
        <div class="card-thumb-wrap">
          <img src="${project.thumb}" alt="${project.title}" loading="lazy">
          <span class="corner corner-tl"></span>
          <span class="corner corner-tr"></span>
          <span class="corner corner-bl"></span>
          <span class="corner corner-br"></span>
          ${isExternal ? '<span class="play-indicator">VIEW ↗</span>' : '<span class="play-indicator">PLAY ▶</span>'}
        </div>
        <div class="card-meta">
          <h3 class="card-title">${project.title}</h3>
          <div class="card-tags">
            ${project.tags.map(t => `<span>${t.toUpperCase()}</span>`).join("")}
          </div>
        </div>
      `;

      const activate = () => openProject(project);
      card.addEventListener("click", activate);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });

      grid.appendChild(card);
    });
  }

  /* ---------- Open a project: lightbox or new tab ---------- */
  function openProject(project) {
    if (project.type === "external") {
      window.open(project.src, "_blank", "noopener");
      return;
    }

    lightboxMedia.innerHTML = "";

    if (project.type === "video-local") {
      const video = document.createElement("video");
      video.src = project.src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      lightboxMedia.appendChild(video);
    } else if (project.type === "image-local") {
      const img = document.createElement("img");
      img.src = project.src;
      img.alt = project.title;
      lightboxMedia.appendChild(img);
    }

    lightboxCaption.textContent = project.title;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // stop any playing video
    lightboxMedia.innerHTML = "";
  }

  lightbox.querySelectorAll("[data-close]").forEach(el =>
    el.addEventListener("click", closeLightbox)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });

  /* ---------- Filtering ---------- */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      document.querySelectorAll(".card").forEach(card => {
        const tags = card.dataset.tags.split(" ");
        const show = filter === "all" || tags.includes(filter);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- HUD clock (purely decorative, matches viewport HUD styling) ---------- */
  const clockEl = document.getElementById("clock");
  if (clockEl) {
    function tick() {
      const now = new Date();
      const pad = n => String(n).padStart(2, "0");
      clockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    }
    tick();
    setInterval(tick, 1000);
  }

  renderGrid();
})();
