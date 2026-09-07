(function () {
  const tabsEl = document.getElementById("course-tabs");
  const panelsEl = document.getElementById("course-panels");

  function videoBlock(video) {
    const esPendiente = video.videoId.startsWith("TU_VIDEO_ID");

    const card = document.createElement("div");
    card.className = "video-card";

    const figure = document.createElement("figure");
    const frame = document.createElement("div");

    if (esPendiente) {
      frame.className = "video-frame video-pending";
      frame.style.position = "static";
      frame.style.paddingTop = "0";
      frame.innerHTML = `<div style="padding:34px 12px;"><strong>Video pendiente</strong>Agrega el ID en data.js</div>`;
    } else {
      frame.className = "video-frame";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${video.videoId}`;
      iframe.title = video.titulo;
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      frame.appendChild(iframe);
    }

    const caption = document.createElement("figcaption");
    caption.textContent = video.titulo;

    figure.appendChild(frame);
    figure.appendChild(caption);
    card.appendChild(figure);
    return card;
  }

  function buildPanel(curso) {
    const panel = document.createElement("section");
    panel.className = "panel";
    panel.id = `panel-${curso.id}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${curso.id}`);
    panel.hidden = true;
    panel.style.setProperty("--accent", curso.color);

    const head = document.createElement("div");
    head.className = "panel-head";
    head.innerHTML = `<h2 class="panel-title">${curso.nombre}</h2>`;
    panel.appendChild(head);

    const desc = document.createElement("p");
    desc.className = "panel-desc";
    desc.textContent = curso.descripcion;
    panel.appendChild(desc);

    curso.modulos.forEach((modulo) => {
      const modEl = document.createElement("div");
      modEl.className = "module";

      const modTitle = document.createElement("h3");
      modTitle.className = "module-title";
      modTitle.textContent = modulo.titulo;
      modEl.appendChild(modTitle);

      const grid = document.createElement("div");
      grid.className = "video-grid";
      modulo.videos.forEach((video) => grid.appendChild(videoBlock(video)));
      modEl.appendChild(grid);

      panel.appendChild(modEl);
    });

    return panel;
  }

  function selectCourse(id) {
    CURSOS.forEach((curso) => {
      const tab = document.getElementById(`tab-${curso.id}`);
      const panel = document.getElementById(`panel-${curso.id}`);
      const isActive = curso.id === id;
      tab.setAttribute("aria-selected", String(isActive));
      panel.hidden = !isActive;
    });
    history.replaceState(null, "", `#${id}`);
  }

  CURSOS.forEach((curso) => {
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.id = `tab-${curso.id}`;
    tab.type = "button";
    tab.role = "tab";
    tab.textContent = curso.nombre;
    tab.style.setProperty("--tab-accent", curso.color);
    tab.addEventListener("click", () => selectCourse(curso.id));
    tabsEl.appendChild(tab);

    panelsEl.appendChild(buildPanel(curso));
  });

  const inicial = CURSOS.find((c) => c.id === location.hash.replace("#", "")) || CURSOS[0];
  selectCourse(inicial.id);
})();
