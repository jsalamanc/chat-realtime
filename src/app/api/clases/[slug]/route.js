import { NextResponse } from 'next/server';


export const GET = (request, { params }) => {
    const { slug } = params;
    const data = [{
        video: "https://www.youtube.com/embed/17HknA0tBYY?si=FCTgvl1Q89I5pqQ4",
        title: '¿Que es TailwindCSS?',
        description: 'En esta sesión de hoy aprenderas como usar tailwind en tus proyoectos',
        slug: 'que-es-tailwind'
    }]
    const filteredContent = data?.find((entry) => entry?.slug === slug);
    return NextResponse.json(filteredContent);
}