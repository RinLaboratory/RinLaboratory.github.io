import {
  Code,
  Database,
  Cloud,
  Palette,
  Terminal,
  Wrench,
  Globe,
} from "@lucide/astro";

const langNavigation = {
  items: [
    {
      label: "INICIO",
      href: "/",
      sections: [
        { label: "SOBRE MÍ", href: "#about" },
        { label: "EXPERIENCIA", href: "#experience" },
      ],
    },
    { label: "HABILIDADES", href: "/skills" },
    { label: "PROYECTOS", href: "/projects" },
  ],
};

const langAbout = {
  about: "Sobre mí",
  presentation: `
    Cuento con más de 3 años de experiencia como desarrollador de software.\\n\\n
    Mi trabajo se enfoca en un punto especial donde el diseño, la **implementación** y la **innovación** crean experiencias que no solamente se ven elegantes, si no que también son **rápidas**, **robustas** y fáciles de usar.\\n\\n
    He tenido la oportunidad de **aprender**, **aplicar** mis conocimientos y **liderar** implementaciones en ambientes que varían desde pymes hasta empresas establecidas estando siempre comprometido con la **continua entrega de valor** y **calidad** garantizando siempre un **trabajo excepcional**.\n\n
    `,
};

const langContact = {
  contact: "Contacto",
  message:
    "Estoy siempre en busca de nuevas oportunidades para contribuir a proyectos desafiantes en el campo del desarrollo de software y la ingeniería informática. Si tienes una pregunta, idea de proyecto o quieres saludar, mi contacto siempre estará disponible.",
  mailto: "m.chiong.supp+github@gmail.com",
  sendMail: "Contacto",
  footer: "Hecho con 💕 por Matías Chiong. 2026 ©",
};

const langExperience = {
  experience: "Experiencia",
  jobs: [
    {
      period: "SEPT 2025 — ACTUALIDAD",
      title: "Ingeniero de desarrollo",
      company: "MASCHINENFABRIK (MAF)",
      companyUrl: "https://www.linkedin.com/company/maschinenfabrik-maf/",
      description: `
      **•** Optimización y mantención de una plataforma web de monitoreo de dispositivos, asegurando estabilidad y rendimiento en entornos productivos.\\n
      **•** Implementación y mantención de un sistema de notificaciones automáticas basado en condiciones específicas de los dispositivos.\\n
      **•** Automatización de procesos de configuración de dispositivos, reduciendo tiempos operativos y errores manuales.\\n
      **•** Desarrollo de herramientas internas para la configuración, diagnóstico y depuración de dispositivos.\\n
      **•** Diseño, modelado y administración de bases de datos, evitando duplicidad de información y optimizando el rendimiento de consultas.\\n
      **•** Desarrollo y mejora continua de la plataforma web, explorando nuevas herramientas orientadas al diagnóstico y monitoreo grupal de dispositivos.\\n
      **•** Ejecución de procesos de QA durante el desarrollo, garantizando una plataforma segura, estable y tolerante a errores.`,
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "Node.js",
        "Fast API",
        "PocketBase",
        "PostgreSQL",
        "Git",
        "Docker",
        "Tauri v2.0",
      ],
    },
    {
      period: "AGO 2025 — AGO 2025",
      title: "Desarrollador de Software",
      company: "Freelance",
      companyUrl:
        "https://www.linkedin.com/company/freelance-self-employed-official/",
      description: `
      **•** Desarrollo de herramientas internas para la gestión y seguimiento de actividad de empleados, reduciendo tiempos operativos y errores manuales.\\n
      **•** Diseño, modelado y administración de bases de datos, evitando duplicidad de información y optimizando el rendimiento de consultas.\\n
      **•** Implementación de sistemas de monitoreo y notificación en tiempo real del estado de servicios y máquinas, incrementando la disponibilidad operativa.\\n
      **•** Automatización de procesos para el ajuste y análisis de sesiones de empleados, optimizando consultas sobre grandes volúmenes de datos históricos y la generación de recordatorios.\\n
      **•** Ejecución de procesos de QA en desarrollo y producción, asegurando herramientas estables, seguras y tolerantes a errores.\\n
      **•** Desarrollo de una herramienta de análisis competitivo asistido por Inteligencia Artificial, utilizada para la evaluación de viabilidad de ingreso de productos al mercado.`,
      technologies: [
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "Pterodactyl",
        "SQLite",
        "Python",
        "Git",
        "Anthropic",
      ],
    },
    {
      period: "DIC 2024 — JUL 2025",
      title: "Desarrollador Full Stack",
      company: "DockCharged Inc.",
      companyUrl: "https://www.linkedin.com/company/dockcharged/",
      description: `
      **•** Desarrollo y evolución de una plataforma web multi-organización autoescalable para el monitoreo de dispositivos IoT de medición energética y gestión de cobros.\\n
      **•** Implementación de procesos automatizados para generación de reportes de consumo energético (PDF), facturación según uso y conciliación de pagos.\\n
      **•** Desarrollo de API REST escalable para integrar plataforma web, aplicación móvil (iOS/Android), ThingsBoard y procesadores de pago.\\n
      **•** Diseño y modelado de bases de datos, mejorando el rendimiento de consultas y reduciendo duplicidad de información.\\n
      **•** Integración e ingeniería inversa de ThingsBoard, permitiendo la administración de dispositivos IoT, métricas históricas y control de versiones.\\n
      **•** Desarrollo de herramientas internas para la gestión de usuarios, organizaciones y dispositivos.\\n
      **•** Ejecución de procesos de QA, pruebas y mantenimiento, logrando una plataforma estable, segura y tolerante a errores, incrementando la estabilidad general del sistema en un 80%.`,
      technologies: [
        "React.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Git",
        "Docker",
      ],
    },
    {
      period: "DIC 2021 — JUN 2024",
      title: "Desarrollador Junior",
      company: "Pudux SPA.",
      companyUrl: "https://www.linkedin.com/company/pudux/",
      description: `
      **•** Desarrollo, evolución y mantenimiento de la plataforma web Trófica App, orientada al monitoreo de zonas de flora en peligro de extinción.\\n
      **•** Desarrollo y mantención de la plataforma SensaFeet (web y móvil iOS/Android) para el monitoreo de plantillas ortopédicas sensorizadas y seguimiento de hábitos de pacientes.\\n
      **•** Implementación de aplicación móvil SensaFeet como interfaz entre dispositivos sensorizados y la plataforma web, permitiendo la recolección y análisis de datos mediante Firebase.\\n
      **•** Implementación de procesos automatizados para la generación de reportes en formato PDF sobre el uso de plantillas ortopédicas sensorizadas por parte de pacientes.\\n
      **•** Desarrollo de prototipos internos para evaluación de nuevas ideas de producto en etapas tempranas.\\n
      **•** Mantención y corrección de errores en el sistema Catálogo de Datos UC, analizando flujos internos y mejorando la estabilidad general en un 10%.\\n
      **•** Ejecución de procesos de QA en desarrollo y producción, asegurando plataformas web y móviles estables, seguras y tolerantes a errores.`,
      technologies: [
        "React.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Git",
        "Docker",
      ],
    },
  ],
};

const langProfile = {
  items: [
    { label: "INICIO", href: "/" },
    { label: "HABILIDADES", href: "/skills" },
    { label: "PROYECTOS", href: "/projects" },
  ],
  socials: {
    github: "https://github.com/RinLaboratory",
    linkedin: "https://www.linkedin.com/in/mat%C3%ADas-chiong-881aa42a6/",
    email: "mailto:m.chiong.supp+github@gmail.com",
  },
  name: "Matías Chiong",
  job: "Ingeniero Civil Informático",
  description:
    "Construyo proyectos que proporcionan experiencias únicas guiándonos a un mundo mejor.",
};

const langProjects = {
  projects: "Proyectos",
  description:
    "Una selección de proyectos en los que he trabajado que demuestran mi experiencia",
  featuredProjects: "Proyectos destacados",
  otherProjects: "Otros proyectos",
  workedProjects: [
    {
      title: "Página Intranet Iglesia Santo Toribio",
      description: `Proyecto creado en colaboración con la iglesia "Santo Toribio", para facilitar la gestión y administración de documentos eclesiásticos con la finalidad de reducir tiempos operativos y errores humanos.`,
      image: [
        "/santo-toribio-1.webp",
        "/santo-toribio-2.webp",
        "/santo-toribio-3.webp",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "Node.js",
      ],
      githubUrl: [
        "https://github.com/RinLaboratory/IngSoftware2.Frontend",
        "https://github.com/RinLaboratory/IngSoftware2.Backend",
      ],
      featured: true,
    },
    {
      title: "Página Intranet Enfermería de Colegio",
      description: `Mi proyecto de título, "Sistema de eventos de colegio con el propósito de almacenar un historial médico escolar", Creado para facilitar la gestion y administración de historiales médicos de estudiantes y funcionarios con la finalidad de reducir tiempos operativos y errores humanos.`,
      image: [
        "/proyecto-titulo-1.webp",
        "/proyecto-titulo-2.webp",
        "/proyecto-titulo-3.webp",
        "/proyecto-titulo-4.webp",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "Node.js",
      ],
      githubUrl: [
        "https://github.com/RinLaboratory/ProyectoTitulo-Front",
        "https://github.com/RinLaboratory/ProyectoTitulo-Back",
      ],
      featured: true,
    },
    {
      title: "Sistema de Monitoreo de Servicios Minecraft",
      description:
        "Sistema de monitoreo de servicios de minecraft en tiempo real, con la capacidad de notificar a las partes interesadas cuando estos servicios cumplen con ciertas condiciones.",
      image: ["/server-monitor-1.webp", "/server-monitor-2.webp"],
      technologies: ["TypeScript", "JavaScript", "Node.js", "Discord.js"],
      githubUrl: ["https://github.com/RinLaboratory/MC-Server-Notifier"],
      featured: true,
    },
    {
      title: "Sistema de Gestión y Administración de Empleados",
      description:
        "Creado para gestionar, administrar, automatizar y eliminar errores humanos.",
      image: [
        "/blog-placeholder-1.jpg",
        "/blog-placeholder-1.jpg",
        "/blog-placeholder-1.jpg",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Discord.js",
        "Express",
        "SQLite",
        "Node-Cron",
        "Redis",
      ],
      githubUrl: [],
      featured: false,
    },
    {
      title: "Herramienta de Análisis Competitivo Asistido con IA",
      description:
        "Creado para evaluación y viabilidad de ingreso de productos al mercado.",
      image: [
        "/blog-placeholder-1.jpg",
        "/blog-placeholder-1.jpg",
        "/blog-placeholder-1.jpg",
      ],
      technologies: ["Python", "Anthropic", "JungleScout", "BrightData"],
      githubUrl: [],
      featured: false,
    },
  ],
};

const langSkills = {
  skills: "Habilidades y Tecnologías",
  description:
    "Una descripción general de las herramientas con las que trabajo a diario.",
  categories: [
    {
      title: "Front End",
      icon: Code,
      skills: [
        "React.js",
        "Next.js",
        "React Router",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
    },
    {
      title: "Back End",
      icon: Globe,
      skills: [
        "Node.js",
        "API Rest",
        "Express",
        "TypeScript",
        "JavaScript",
        "Fast API",
        "Node-Cron",
        "Discord.js",
      ],
    },
    {
      title: "Data Storage",
      icon: Database,
      skills: [
        "SQLite",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "PocketBase",
        "Redis",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Linux",
        "Nginx",
        "Dokploy",
        "Pterodactyl",
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        "Figma",
        "Excalidraw",
        "App Diagrams",
        "Diseño Responsivo",
        "Accesibilidad",
        "Investigación de usuarios finales",
      ],
    },
    {
      title: "Herramientas & Flujo de trabajo",
      icon: Terminal,
      skills: [
        "Git",
        "VS Code",
        "Insomnia",
        "Storybook",
        "yarn / npm / pnpm / bun",
        "Screen2Gif",
        "Notion",
        "Linux",
        "Windows",
      ],
    },
    {
      title: "Otras Tecnologías",
      icon: Wrench,
      skills: [
        "JWT",
        "Drizzle",
        "Zod",
        "Tanstack Query",
        "SWR",
        "eslint",
        "prettier",
        "mongoose",
        "Novu",
        "ThingsBoard",
        "Optimización de sistemas",
        "Ciberseguridad",
      ],
    },
  ],
};

export default {
  langProfile,
  langNavigation,
  langAbout,
  langContact,
  langExperience,
  langProjects,
  langSkills,
};
