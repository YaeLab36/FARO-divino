const mensajes = {
  1: "No se preocupen por nada. Más bien, oren y pídanle a Dios todo lo que necesiten, y sean agradecidos. Así Dios les dará su paz, esa paz que la gente de este mundo no alcanza a comprender, pero que protege el corazón y el entendimiento de los que ya son de Cristo Filipenses 4:6-7",

  2: "Por tanto, no tengan miedo, pues yo soy su Dios y estoy con ustedes. Mi mano victoriosa les dará fuerza y ayuda; mi mano victoriosa siempre les dará su apoyo. Isaías 41:10",

  3: "Estén siempre contentos. Oren en todo momento. Den gracias a Dios en cualquier circunstancia. Esto es lo que Dios espera de ustedes, como cristianos que son. 1 Tesalonisenses 5:16-18",

  4: "Dios escucha a los suyos y los libra de su angustia Salmo 34:17",

  5: "En medio de mis angustias y grandes preocupaciones, tú me diste consuelo y alegría Salmo 94:19",

  6: "Confiá. Dios ya está obrando aunque no lo veas. Así que no se preocupen por lo que pasará mañana. Ya tendrán tiempo para eso. Recuerden que ya tenemos bastante con los problemas de cada día. Mateo 6:34🙌"
};

function mostrarMensaje(opcion) {
  alert(mensajes[opcion]);
}


let carrito = [];

let productos = [
  { id: 1, nombre: "Solo/a",  },
  { id: 2, nombre: "Ansioso/a",  },
  { id: 3, nombre: "Triste",  },
  { id: 4, nombre: "Alegre",  },
  { id: 5, nombre: "Abrumado/a", },
  { id: 6, nombre: "Preocupado",  }
];

const agregarAlCarrito = (i) => {
  carrito.push(productos[parseInt(i) - 1]);
};

let Emocion;
do {
  Emocion = prompt(
    "Bienvenido/a ¿Como te sientes hoy? \n 1) Solo/a\n 2) Ansioso/a\n 3) Triste\n 4) Alegre\n 5) Abrumado/a\n 6) Preocupado\n 7) Ver opciones\n 8) Salir"
  );

  switch (Emocion) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
  agregarAlCarrito(Emocion);
  mostrarMensaje(Emocion);
  break;

    case "7":
      console.log(carrito);

      break;
    case "8":
        alert("Dios te bendiga, gracias por visitarnos");

      break;
    default:
      alert("Opción incorrecta...");
      break;
  }
} while (Emocion != 8);

