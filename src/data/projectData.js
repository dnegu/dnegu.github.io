import imgNote from "../assets/img-projects/note-app.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import ChatAi from "../assets/img-projects/ChatAI.png";
import ProductivityApp from "../assets/img-projects/productivityApp.png";
import TrackerSubscription from "../assets/img-projects/img-substracker.png";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";

export const proyectos = [
  {
    titulo: "Interbank Mobile Banking System",
    descripcion:
      "Arquitectura y modernización de módulos de transacciones centrales para la App de Banca Móvil de Interbank. Diseñado con Clean Architecture, MVVM, Room y seguridad bancaria avanzada (SSL Pinning, AES-256, rotación JWT) con soporte a millones de usuarios y 99.9% crash-free rate.",
    imagen: ProductivityApp.src,
    tecnologias: ["Android", "Kotlin", "Clean Arch", "MVVM", "Room", "SSL Pinning", "Hilt"],
    demo: "https://www.linkedin.com/in/david-neyra-gutierrez/",
    codigo: "https://github.com/dnegu",
    categoria: "mobile",
  },
  {
    titulo: "KMP & Compose Multiplatform Suite",
    descripcion:
      "Arquitectura multiplataforma empresarial para Android e iOS utilizando Kotlin Multiplatform (KMP) y Compose Multiplatform. Logró más de un 75% de código compartido en lógica de negocio y UI, reduciendo el time-to-market en un 40%.",
    imagen: TrackerSubscription.src,
    tecnologias: ["Kotlin Multiplatform", "Compose Multiplatform", "Coroutines", "Koin", "CI/CD"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "kmp",
  },
  {
    titulo: "Webcontrol Offline-First Sync Engine",
    descripcion:
      "Motor de sincronización de base de datos diferencial de alto rendimiento para faenas mineras remotas (Las Bambas, Antapaccay). Redujo los tiempos de sincronización de datos de 30 minutos a menos de 3 minutos (90% de optimización), integrando RFID, biometría y GPS.",
    imagen: imgNote.src,
    tecnologias: ["Android", "Room", "Coroutines", ".NET Core", "SQL Server", "RFID/Biometrics"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "mobile",
  },
  {
    titulo: "BCP & Scotiabank Modular Architecture",
    descripcion:
      "Modularización de arquitectura monolítica en feature modules independientes para apps financieras de alta escala. Reducción del 50% en tiempos de compilación limpia y creación de sistema de diseño reutilizable con Jetpack Compose.",
    imagen: PortfolioDev.src,
    tecnologias: ["Android", "Jetpack Compose", "Modularization", "SOLID", "Clean Architecture"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "arquitectura",
  },
  {
    titulo: "AI-Assisted CI/CD & PR Validator",
    descripcion:
      "Pipeline de integración y despliegue continuo automatizado con Bitbucket Pipelines y GitHub Actions con análisis de código estático y validación de Pull Requests asistido por Inteligencia Artificial, ahorrando más de 10 horas semanales por desarrollador.",
    imagen: ChatAi.src,
    tecnologias: ["Bitbucket Pipelines", "GitHub Actions", "Python", "AI Integration", "Gradle"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "devops",
  },
  {
    titulo: "BILLAPP Retail Offline POS Engine",
    descripcion:
      "Aplicación de facturación móvil y punto de venta de alta concurrencia para comercios en Europa. Sistema offline-first con SQLite/Room y comunicación hardware para impresoras térmicas y pasarelas de pago vía Bluetooth/WiFi.",
    imagen: VintageTone.src,
    tecnologias: ["Android", "Kotlin", "SQLite", "Room", "Bluetooth POS SDK", "Offline-First"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "mobile",
  },
  {
    titulo: "Industrial Access & Safety Suite",
    descripcion:
      "Sistema de gestión de accesos industriales y monitoreo de tránsito con soporte full-stack: clientes móviles Android en terreno conectados a servicios backend RESTful y microservicios en .NET Core.",
    imagen: legalWeb.src,
    tecnologias: [".NET Core", "ASP.NET", "SQL Server", "Android", "REST APIs"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "backend",
  },
  {
    titulo: "Crypto & Financial Asset Portfolio (CMP)",
    descripcion:
      "Aplicación moderna para seguimiento de activos financieros y cotizaciones en tiempo real desarrollada con Compose Multiplatform, StateFlow, Coroutines y persistencia local reactiva.",
    imagen: mediCare.src,
    tecnologias: ["Compose Multiplatform", "KMP", "Coroutines/Flow", "Ktor Client"],
    demo: "https://github.com/dnegu",
    codigo: "https://github.com/dnegu",
    categoria: "kmp",
  },
];
