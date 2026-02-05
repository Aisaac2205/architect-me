import { Project } from '../types/project.types';

export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Moderno",
        description: "Página web dedicada a la venta de camisolas de fútbol en Guatemala, procesamiento de pedidos mediante WhatsApp del Dueño. Diseño adaptable y optimizado para ventas.",
        image: "/assets/Ecomerce.jpg",
        tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS", "PostgreSQL", "NestJS", "Railway"],
        storeUrl: "https://www.lacasadelbalompie.com/"
    },
    {
        id: 2,
        title: "Neural Vault - AI Directory",
        description: "SPA minimalista diseñada para demostrar la arquitectura moderna de Angular 18+. Implementa gestión de estado reactivo con Signals, componentes Standalone y patrones de diseño SOLID, alejándose de la estructura legacy. UI 'Dark Mode' optimizada.",
        image: "/assets/Neural.jpg",
        tags: ["Angular", "TypeScript", "Tailwind CSS", "Signals", "Vercel"],
        storeUrl: "https://neural-vault-five.vercel.app"
    },
    {
        id: 3,
        title: "Sistema de Pedidos Quick-Service",
        description: "Plataforma de comercio ágil diseñada para restaurantes de alto volumen. Digitaliza el menú y automatiza la toma de órdenes vía WhatsApp, eliminando fricción en el proceso de compra. Enfocado en el rendimiento (Lighthouse 100) y la conversión móvil.",
        image: "/assets/Demo1.jpg",
        tags: ["React", "Astro", "TypeScript", "Tailwind CSS", "PostgreSQL", "Railway"],
        storeUrl: "https://demo1.restaurantegt.com/"
    },
    {
        id: 4,
        title: "Experiencia Digital Gastronómica",
        description: "Interfaz inmersiva desarrollada para restaurantes de categoría premium. Integra cabeceras de video dinámicas (Video-Header) y galerías de alta definición sin sacrificar velocidad de carga. Una arquitectura pensada para potenciar la identidad de marca del cliente.",
        image: "/assets/Demo2.jpg",
        tags: ["React", "Astro", "Tailwind CSS", "Motion", "UX/UI"],
        storeUrl: "https://demo2.restaurantegt.com/"
    },
    {
        id: 5,
        title: "Turbo Auto - Taller y Carwash",
        description: "Página web informativa sobre servicios de taller mecánico y carwash ubicado en Quesada, Jutiapa. Incluye información de servicios, sección de canjear ofertas y más. Diseño moderno y funcional.",
        image: "/assets/TurboAuto.jpg",
        tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS"],
        storeUrl: "https://turboautogt.com/"
    },
];
