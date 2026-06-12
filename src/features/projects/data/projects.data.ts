import { Project } from '../types/project.types';

export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce B2B Moderno",
        description: "Tienda en línea dedicada a la venta de camisolas de fútbol en Guatemala, con procesamiento de pedidos directo por WhatsApp del propietario. Ofrece una experiencia de compra ágil e intuitiva y un diseño totalmente adaptable, optimizado para impulsar las ventas del negocio.",
        image: "/assets/Mock-Ecomerce.webp",
        tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS", "PostgreSQL", "NestJS", "Railway"],
        storeUrl: "https://www.lacasadelbalompie.com/"
    },
    {
        id: 2,
        title: "SaaS de Pedidos & Menú Digital Diseño Urbano",
        description: "SaaS gastronómico con página web y sistema interno de pedidos para restaurantes. Permite la personalización total de la landing page, menú digital interactivo y descarga de versión PDF. Enfocado en el rendimiento y la conversión de clientes.",
        image: "/assets/Mock-Landing-Demo-1.webp",
        tags: ["React", "Astro", "TypeScript", "Tailwind CSS", "PostgreSQL", "Railway"],
        storeUrl: "https://demo1.restaurantegt.com/"
    },
    {
        id: 3,
        title: "SaaS de Pedidos & Menú Digital Diseño Elegante",
        description: "SaaS gastronómico con página web y sistema interno de pedidos para restaurantes. Permite la personalización total de la landing page, menú digital interactivo y descarga de versión PDF. Presenta una interfaz de categoría premium con animaciones fluidas y carga ultra rápida.",
        image: "/assets/Mock-Landing-Demo-2.webp",
        tags: ["React", "Astro", "Tailwind CSS", "Motion", "UX/UI"],
        storeUrl: "https://demo2.restaurantegt.com/"
    },
    {
        id: 4,
        title: "Turbo Auto - Taller y Carwash",
        description: "Presencia digital para un taller mecánico y carwash ubicado en Quesada, Jutiapa. Presenta los servicios del negocio de forma clara, incluye una sección para canjear ofertas exclusivas y está diseñada para atraer clientes locales con un aspecto moderno y profesional.",
        image: "/assets/Mock-Landing-Turbo-Auto.webp",
        tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS"],
        storeUrl: "https://turboautogt.com/"
    },
];
