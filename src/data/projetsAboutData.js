import ProductivityApp from "../assets/img-projects/productivityApp.png";
import TrackerSubscription from "../assets/img-projects/img-substracker.png";
import imgNote from "../assets/img-projects/note-app.png";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";

export const proyectos = [
  {
    titulo: "Interbank Mobile Banking System",
    descripcion:
      "Arquitectura y modernización de módulos de transacciones centrales para la App de Banca Móvil de Interbank, soportando a millones de usuarios con 99.9% crash-free session rate.",
    imagen: ProductivityApp.src,
    tecnologias: ["Android", "Kotlin", "Clean Arch", "MVVM", "Room", "SSL Pinning"],
    demo: "https://www.linkedin.com/in/david-neyra-gutierrez/",
    codigo: "https://github.com/dnegu",
    categoria: "mobile",
  },
  {
    titulo: "KMP & Compose Multiplatform Suite",
    descripcion:
      "Arquitectura multiplataforma empresarial (Android / iOS) con más del 75% de código compartido y reducción del 40% en time-to-market.",
    imagen: TrackerSubscription.src,
    tecnologias: ["Kotlin Multiplatform", "Compose Multiplatform", "Coroutines", "Koin"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "kmp",
  },
  {
    titulo: "Webcontrol Industrial Offline Sync",
    descripcion:
      "Motor de sincronización diferencial para minería a gran escala (Las Bambas, Antapaccay), reduciendo la latencia de sincronización en un 90% (de 30 a <3 min).",
    imagen: imgNote.src,
    tecnologias: ["Android", "Room", "Coroutines", ".NET Core", "RFID/Biometrics"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "mobile",
  },
  {
    titulo: "BCP & Scotiabank Modular Architecture",
    descripcion:
      "Modularización de arquitectura monolítica en feature modules y diseño de librería de componentes reutilizables con Jetpack Compose.",
    imagen: PortfolioDev.src,
    tecnologias: ["Android", "Jetpack Compose", "Modularization", "Clean Arch"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "arquitectura",
  },
];
