


const mensajes = {
  ansioso: "Por tanto, no tengan miedo, pues yo soy su Dios y estoy con ustedes. Mi mano victoriosa les dará fuerza y ayuda; mi mano victoriosa siempre les dará su apoyo. Isaías 41:10",
  triste: "Estén siempre contentos. Oren en todo momento. Den gracias a Dios en cualquier circunstancia. Esto es lo que Dios espera de ustedes, como cristianos que son. 1 Tesalonisenses 5:16-18",
  alegre: "Dios escucha a los suyos y los libra de su angustia Salmo 34:17",
  solo: "No se preocupen por nada. Más bien, oren y pídanle a Dios todo lo que necesiten, y sean agradecidos. Así Dios les dará su paz, esa paz que la gente de este mundo no alcanza a comprender, pero que protege el corazón y el entendimiento de los que ya son de Cristo Filipenses 4:6-7",
  abrumado: "En medio de mis angustias y grandes preocupaciones, tú me diste consuelo y alegría Salmo 94:19",
  preocupado: "Confiá. Dios ya está obrando aunque no lo veas. Así que no se preocupen por lo que pasará mañana. Ya tendrán tiempo para eso. Recuerden que ya tenemos bastante con los problemas de cada día. Mateo 6:34🙌"
};

const botones = document.querySelectorAll("button[data-emocion]");
const mensaje = document.getElementById("mensaje");

// Mostrar emoción seleccionada
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const emocion = boton.dataset.emocion;
    if (mensaje) {
      mensaje.textContent = mensajes[emocion];
      mensaje.style.display = "block";
    }
    localStorage.setItem("emocionElegida", emocion);
  });
});

// Mostrar emoción guardada al recargar
if (mensaje) {
  const emocionGuardada = localStorage.getItem("emocionElegida");
  if (emocionGuardada) {
    mensaje.textContent = mensajes[emocionGuardada];
    mensaje.style.display = "block";
  }
}

/*  TESTIMONIOS */


const formTestimonio = document.getElementById("form-testimonio");
const historialTestimonios = document.getElementById("historial-testimonios");

// Traemos lo guardado en localStorage 
let testimonios = JSON.parse(localStorage.getItem("testimonios")) || [];






function renderizarTestimonios() {
    if (!historialTestimonios) return; 
    

    historialTestimonios.innerHTML = "";

    testimonios.forEach(testimonio => {
        const card = document.createElement("div");
        card.classList.add("testimonio-card");

        card.innerHTML = `
            <h4>${testimonio.nombre}</h4>
            <p>${testimonio.mensaje}</p>
        `;

        historialTestimonios.appendChild(card);
    });
}

/*EVENTO SUBMIT */

if (formTestimonio) {
    formTestimonio.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const mensaje = document.getElementById("mensajeTestimonio").value.trim();

        if (nombre === "" || mensaje === "") return;

        const nuevoTestimonio = {
            nombre: nombre,
            mensaje: mensaje
        };

        testimonios.push(nuevoTestimonio);

        localStorage.setItem("testimonios", JSON.stringify(testimonios));

        renderizarTestimonios();

        formTestimonio.reset();
    });
}


renderizarTestimonios();

if (formTestimonio) {
    formTestimonio.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const mensaje = document.getElementById("mensajeTestimonio").value.trim();

        if (!nombre || !mensaje) return;

        const nuevoTestimonio = { nombre, mensaje };

        testimonios.push(nuevoTestimonio);
        localStorage.setItem("testimonios", JSON.stringify(testimonios));

        renderizarTestimonios();
        formTestimonio.reset();
    });
}
