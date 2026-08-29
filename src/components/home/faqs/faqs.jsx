import React, { useState } from "react";

const CategoryIcons = {
  "Especialidad & Stack Tecnológico": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Kotlin Multiplatform (KMP)": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Liderazgo Técnico y Equipos": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  ),
  "Seguridad Bancaria y Escala": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
    </svg>
  ),
  "Sistemas Offline-First y Rendimiento": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Especialidad & Stack Tecnológico": [
      "Especializado en Android Nativo (Kotlin, Java), Kotlin Multiplatform (KMP), Compose Multiplatform y Jetpack Compose. Domino arquitecturas limpias (Clean Architecture, MVVM, MVI), principios SOLID, modularización por capas/features y stack backend/integración (.NET Core, SQL Server, Firebase, REST APIs).",
    ],
    "Kotlin Multiplatform (KMP)": [
      "Diseño arquitecturas multiplataforma robustas que maximizan la reutilización de código (lógica de negocio compartida, red, bases de datos y UI con Compose Multiplatform) manteniendo rendimiento nativo y reduciendo el tiempo de desarrollo en hasta un 40%.",
    ],
    "Liderazgo Técnico y Equipos": [
      "He liderado equipos de hasta 15 ingenieros (desarrolladores Android y Backend), guiando decisiones de arquitectura, revisiones de código exhaustivas, mentoría técnica, estimación de sprints y establecimiento de cultura de pruebas con coberturas de hasta 100% en lógica central.",
    ],
    "Seguridad Bancaria y Escala": [
      "Amplia experiencia en aplicaciones financieras de alta concurrencia (Interbank, BCP, Scotiabank). Implementación de SSL Pinning, rotación dinámica de tokens JWT, cifrado de datos en reposo (AES-256 / EncryptedSharedPreferences) y tasas de disponibilidad del 99.9% crash-free.",
    ],
    "Sistemas Offline-First y Rendimiento": [
      "Diseño de motores de sincronización diferencial en Room Database y SQLite para faenas remotas y operaciones críticas sin conexión (minería, logística, retail), reduciendo tiempos de latencia y sincronización en más del 90%.",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
          Preguntas Frecuentes & Enfoque de Ingeniería
        </h2>
        <ul className="mt-8 space-y-4 text-lg drop-shadow-[2px_2px_0_#7836cf]">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category] || CategoryIcons["Especialidad & Stack Tecnológico"]}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[240px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#7836cf] font-bold">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#6a2cbb] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {skills[category]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;
