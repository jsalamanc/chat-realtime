import { NextResponse } from 'next/server';


export const GET = (request) => {
    const data = [{
        thumbnail: 'https://vabadus.es/images/cache/imagen_nodo/images/articulos/64b524021adc5990918944.png',
        title: '¿Que es TailwindCSS?',
        description: 'En esta sesión de hoy aprenderas como usar tailwind en tus proyoectos',
        slug: 'que-es-tailwind'
    }]
    return NextResponse.json(data);
}