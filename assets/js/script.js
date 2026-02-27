// 17 SLIDES EN ORDEN:
//
// 1) Portada
// 2) Matching
// 3) Comparador azul
// 4) Texto católico
// 5) Filipinas
// 6) Retiro 2–3
// 7) Elección icono
// 8) Retiro 1
// 9) Palacio + entorno
// 10) Antropología invisible
// 11) Afrotopia
// 12) Guinea 2–3
// 13) África étnica
// 14) Yoruba
// 15) Verde doble imagen
// 16) Vitrina América épicas
// 17) Slide final de agradecimiento

const slidesData = [
  // 1. PORTADA
  {
    type: "cover",
    bgColor: "#001219",
    image: "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/museov.PNG",
    title: "Visita decolonizada",
    subtitle: "Museo Nacional de Antropología",
    buttonText: "Empezar"
  },

  // 2. MATCHING (AZUL OSCURO)
  {
    type: "matching",
    bgColor: "#0d3b4f",
    title: "La cultura nos condiciona",
    instructions: "Arrastra cada palabra al lado del color que creas conveniente."
  },

 // 3. COMPARADOR (AZUL OSCURO)
  {
    type: "image-compare",
    bgColor: "#0d3b4f",
    before: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ3E0pnMATl3YwX8o62mXBZ_UfqK1QQNavxb1inHVv-26WNIvPHb6_JXNxVHcTHvnAIGtCt1Kuoj6sUYSoU8V3HUfW4NVGrIehNmAQpscx5YeYPJ3-_MFG6uew03IhfkORqE77S7QSvE6p/s1600/DSC_0024.JPG",
    after: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1awyyz3wX7t70KnvUBc10f5sZCugYEZgo5w&s",
    labelBefore: "Imagen 1",
    labelAfter: "Imagen 2",
    instructions: "Desliza para comparar ambas imágenes."
  },

  // 4. TEXTO CATÓLICO (ROJO OSCURO)
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/textocatolicoresaltado.PNG",
    text: "¿Qué hay de raro en el texto?",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 5. FILIPINAS (ROJO OSCURO)
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/filipinasahora.PNG",
    text: "Filipinas ahora",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 6. RETIRO 2–3 (ROJO OSCURO)
  {
    type: "double-image-text",
    bgColor: "#7b1e2b",
    images: [
      "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/retiro2.PNG",
      "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/retiro3.PNG"
    ],
    text: "¿Qué diferencias veis? ¿Es real o estereotipado?",
    instructions: "Pulsa para ampliar las imágenes."
  },

  // 7. ELECCIÓN ÍCONO (ROJO OSCURO)
  {
    type: "image-choice",
    bgColor: "#7b1e2b",
    question: "¿Qué imagen representa mejor el icono de la sección?",
    instructions: "Pulsa en tu elección.",
    options: [
      {
        img: "https://fundacion-antama.org/wp-content/uploads/2019/10/201910-Trigo-1024x725.jpg",
        color: "blue"
      },
      {
        img: "https://www.brillante.es/wp-content/uploads/2024/03/paddy-rice-plant-2023-11-27-05-32-24-utc-1.jpg",
        color: "violet"
      }
    ],
    selected: null
  },

  // 8. RETIRO 1 (ROJO OSCURO)
  {
    type: "image-text",
    bgColor: "#7b1e2b",
    image: "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/retiro1.PNG",
    text: "¿Dónde creéis que es?",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 9. PALACIO + ENTORNO (ROJO OSCURO)
  {
    type: "double-image-text",
    bgColor: "#7b1e2b",
    images: [
      "https://www.madrid.es/UnidadWeb/UGBBDD/ObjetosExternos/Ficheros/sicweb/monograficos/contenidos/imgdocsic/palaciocristal.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/98/5c/fd/edificio-y-entorno.jpg"
    ],
    text: "¿Conocéis estos edificios?",
    instructions: "Pulsa para ampliar la imagen."
  },
  
  // 6. RETIRO 2–3 (ROJO OSCURO)
  {
    type: "double-image-text",
    bgColor: "#7b1e2b",
    images: [
      "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/retiro2.PNG",
      "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/retiro3.PNG"
    ],
    text: "Esto es el Parque del Retiro de Madrid",
    instructions: "Pulsa para ampliar las imágenes."
  },

  // 10. ANTROPOLOGÍA INVISIBLE (ROJO OSCURO)
  {
    type: "image-text",
    bgColor: "#7b1e2b",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiP-NmUbg0A07cthvmB2XKzwk27byuQ7wBNQ&s",
    text: "Vitrina de Antropología Invisible.",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 11. AFROTOPIA (OCRE OSCURO)
  {
    type: "image-text",
    bgColor: "#7a6220",
    image: "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/afrotopia.PNG",
    text: "Afrotopía",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 12. GUINEA 2–3 (OCRE OSCURO)
  {
    type: "double-image",
    bgColor: "#7a6220",
    images: [
      "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/guinea2.jpg",
      "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/guinea3.jpg"
    ],
    text: "Esto es el Parque del Retiro de Madrid",
    instructions: "Pulsa para ampliar las imágenes.",
  },

  // 13. ÁFRICA ÉTNICA (OCRE OSCURO)
  {
    type: "image-zoom-text",
    bgColor: "#7a6220",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Africa_ethnic_groups_1996.jpg",
    text: "¿Cómo se representan los grupos étnicos",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 14. YORUBA (OCRE OSCURO)
  {
    type: "image-text",
    bgColor: "#7a6220",
    image: "https://image.pbs.org/poster_images/assets/sj14-vid-yorubarel.jpg",
    text: "Cultura Yoruba",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 15. VERDE — dos fotos (VERDE OSCURO)
  {
    type: "double-image",
    bgColor: "#1f4f34",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXSaiLiG_Dw4AildQFRF9IrjLjzcYkx-oT-8rEZhj0UV3hIMffnHNEnmQ0lmP62trF1yaZPKywvjbqtG5WMnosk8sxFwkdDYmZ37gnyIHl0YLImh3aqoc0QvGGNU5f945NqYe689TE9A4/s1600/t0s9dCfIOdX02xqNWNwPyK3Vund.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDg06aYfiu8cUsj4097gISTl_vLOAQmAj5mw&s"
    ],
    text: "¿Son realistas estas representaciones",
    instructions: "Pulsa para ampliar la imagen.",

  },

  // 16. VERDE — Vitrina América épicas (VERDE OSCURO)
  {
    type: "image-text",
    bgColor: "#1f4f34",
    image: "https://raw.githubusercontent.com/raulgo04/decolonizacionapp/refs/heads/main/assets/img/vitrinaamericaepicas.PNG",
    text: "¿Son todos los objetos de la misma época?",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 17. SLIDE FINAL - AGRADECIMIENTO
  {
    type: "text",
    bgColor: "#001219",
    text: "Gracias por hacer la visita",
    instructions: "Esperamos que apliques la visión decolonial la próxima vez que visites un museo."
  }
];

let current = 0;
const slidesEl = document.getElementById("slides");
const progressBar = document.querySelector(".progress-bar");
const navEl = document.getElementById("nav");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImg");
const modalClose = document.getElementById("imageModalClose");

/* Soporte para image-choice/poll */
function handleSelection(index) {
  const slide = slidesData[current];
  if (!("selected" in slide)) return;
  if (slide.selected !== null && slide.selected !== undefined) return;
  slide.selected = index;
  renderSlide();
}

function renderSlide() {
  const slide = slidesData[current];
  const total = slidesData.length;

  slidesEl.innerHTML = "";

  const el = document.createElement("div");
  el.className = "slide";
  el.style.backgroundColor = slide.bgColor;

  let inner = `<div class="slide-counter">${current + 1} / ${total}</div>`;

  if (slide.type === "cover") {
    inner += `
      <div class="cover-content">
        <img class="cover-image zoomable" src="${slide.image}" alt="Museo Nacional de Antropología">
        <h1 class="cover-title">${slide.title}</h1>
        <p class="cover-subtitle">${slide.subtitle || ""}</p>
        <button class="cover-button" id="startBtn">${slide.buttonText}</button>
      </div>
    `;
  }

  else if (slide.type === "image-compare") {
    inner += `
      <h2>Sala de los Orígenes</h2>
      <p>${slide.question || ""}</p>
      <div class="image-slider-container">
        <div class="image base" style="background-image:url('${slide.after}')"></div>
        <div class="image overlay" style="background-image:url('${slide.before}'); width:50%;"></div>

        <input id="range-slider" class="range-slider" name="slider" type="range" min="1" max="100" value="50" />
        <div class="slider-control">
          <span class="slider-control-btn left"></span>
          <span class="slider-control-btn right"></span>
        </div>
      </div>
      <div class="compare-labels">
        <span>${slide.labelBefore}</span>
        <span>${slide.labelAfter}</span>
      </div>
    `;
  }

  else if (slide.type === "matching") {
    inner += `
      <h2 class="matching-title">${slide.title || ""}</h2>
      <div class="matching-grid">
        <div class="matching-row" data-color="red">
          <div class="color-box color-red" data-color="red"></div>
          <div class="drop-zone" data-color="red"></div>
        </div>
        <div class="matching-row" data-color="yellow">
          <div class="color-box color-yellow" data-color="yellow"></div>
          <div class="drop-zone" data-color="yellow"></div>
        </div>
        <div class="matching-row" data-color="green">
          <div class="color-box color-green" data-color="green"></div>
          <div class="drop-zone" data-color="green"></div>
        </div>
      </div>
      <div class="labels-pool">
        <div class="label-box" draggable="true" data-target="red">Naturaleza</div>
        <div class="label-box" draggable="true" data-target="yellow">Desierto</div>
        <div class="label-box" draggable="true" data-target="green">Religión</div>
      </div>
      <p class="matching-instructions">${slide.instructions || ""}</p>
    `;
  }

  else if (slide.type === "image-text") {
    inner += `
      ${slide.text ? `<h2>${slide.text}</h2>` : `<h2></h2>`}
      <img class="center-image zoomable" src="${slide.image}" alt="Imagen">
    `;
  }

  else if (slide.type === "double-image-text") {
    inner += `
      ${slide.text ? `<h2>${slide.text}</h2>` : `<h2></h2>`}
      <div class="double-images">
        <img class="zoomable" src="${slide.images[0]}" alt="Imagen 1">
        <img class="zoomable" src="${slide.images[1]}" alt="Imagen 2">
      </div>
    `;
  }

  else if (slide.type === "double-image") {
    inner += `
      <h2></h2>
      <div class="double-images">
        <img class="zoomable" src="${slide.images[0]}" alt="Imagen 1">
        <img class="zoomable" src="${slide.images[1]}" alt="Imagen 2">
      </div>
    `;
  }

  else if (slide.type === "image-zoom-text") {
    inner += `
      ${slide.text ? `<h2>${slide.text}</h2>` : `<h2></h2>`}
      <img class="center-image zoomable" src="${slide.image}" alt="Imagen ampliable">
    `;
  }

  else if (slide.type === "image-choice") {
    inner += `
      <h3>${slide.question || ""}</h3>
      <div class="image-options">
        ${slide.options.map((opt, i) => `
          <div class="image-option ${slide.selected === i ? opt.color : ""} ${slide.selected !== null && slide.selected !== undefined && slide.selected !== i ? "selected-other" : ""}" data-index="${i}">
            <img class="zoomable" src="${opt.img}" alt="Opción ${i+1}">
          </div>
        `).join("")}
      </div>
    `;
  }

  else if (slide.type === "poll") {
    inner += `
      <h3>${slide.question || ""}</h3>
      <div class="poll-options">
        ${slide.options.map((opt, i) => `
          <div class="poll-option ${slide.selected === i ? opt.color : ""} ${slide.selected !== null && slide.selected !== undefined && slide.selected !== i ? "selected-other" : ""}" data-index="${i}">
            ${opt.text}
          </div>
        `).join("")}
      </div>
    `;
  }

  else if (slide.type === "text") {
    inner += `
      <h2>${slide.text || ""}</h2>
      ${slide.subText ? `<p>${slide.subText}</p>` : ""}
    `;
  }

  el.innerHTML = inner;
  slidesEl.appendChild(el);

  // Ocultar navegación en la portada
  if (current === 0) {
    navEl.style.display = "none";
  } else {
    navEl.style.display = "flex";
  }

  updateProgress();
  attachInteractionsForCurrentSlide();
}

function updateProgress() {
  progressBar.style.width = ((current + 1) / slidesData.length) * 100 + "%";
}

function openModalWithSrc(src) {
  modalImg.src = src;
  modal.classList.add("show");
}

function attachInteractionsForCurrentSlide() {
  const slide = slidesData[current];

  // Portada → botón Empezar
  if (slide.type === "cover") {
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        current = 1; // Ir a la primera slide después de la portada
        renderSlide();
      });
    }
  }

  // Comparador de imágenes
  if (slide.type === "image-compare") {
    const container = document.querySelector(".image-slider-container");
    if (container) {
      const sliderInput = container.querySelector(".range-slider");
      const overlayImg = container.querySelector(".image.overlay");
      const buttonRange = container.querySelector(".slider-control");

      if (sliderInput && overlayImg && buttonRange) {
        sliderInput.addEventListener("input", (e) => {
          const sliderPos = e.target.value;
          overlayImg.style.width = sliderPos + "%";
          buttonRange.style.left = sliderPos + "%";
        });
      }

      container.addEventListener("mousemove", (e) => {
        const reduceMovement = (n) => n / 25;
        container.animate(
          {
            transform: `scale(1.03) rotateX(${reduceMovement(
              e.movementY
            )}deg) rotateY(${reduceMovement(e.movementX)}deg)`
          },
          { duration: 1200 }
        );
      });

      container.addEventListener("mouseout", () => {
        container.animate(
          { transform: `scale(1) rotateX(0deg) rotateY(0deg)` },
          { duration: 250, fill: "forwards" }
        );
      });
    }
  }

  // Zoom de imágenes
  const zoomables = document.querySelectorAll(".zoomable");
  zoomables.forEach(img => {
    img.addEventListener("click", () => {
      openModalWithSrc(img.src);
    });
  });

  // Juego de emparejar
  if (slide.type === "matching") {
    let dragged = null;

    const labelBoxes = document.querySelectorAll(".label-box");
    const dropZones = document.querySelectorAll(".drop-zone");
    const labelsPool = document.querySelector(".labels-pool");

    labelBoxes.forEach(label => {
      label.addEventListener("dragstart", (e) => {
        dragged = label;
        label.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });

      label.addEventListener("dragend", () => {
        if (dragged) {
          dragged.classList.remove("dragging");
        }
        dragged = null;
      });
    });

    function enableDropZone(zone) {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragged) {
          zone.innerHTML = "";
          zone.appendChild(dragged);
          dragged.classList.add("box-linked");
        }
      });
    }

    dropZones.forEach(zone => enableDropZone(zone));

    if (labelsPool) {
      labelsPool.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });

      labelsPool.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragged) {
          labelsPool.appendChild(dragged);
        }
      });
    }
  }

  // image-choice
  if (slide.type === "image-choice") {
    const opts = document.querySelectorAll(".image-option");
    opts.forEach(opt => {
      opt.addEventListener("click", () => {
        const i = parseInt(opt.getAttribute("data-index"), 10);
        handleSelection(i);
      });
    });
  }

  // poll
  if (slide.type === "poll") {
    const opts = document.querySelectorAll(".poll-option");
    opts.forEach(opt => {
      opt.addEventListener("click", () => {
        const i = parseInt(opt.getAttribute("data-index"), 10);
        handleSelection(i);
      });
    });
  }
}

// Navegación general
nextBtn.addEventListener("click", () => {
  if (current < slidesData.length - 1) {
    current++;
    renderSlide();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderSlide();
  }
});

// Cerrar modal
modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Render inicial
renderSlide();
