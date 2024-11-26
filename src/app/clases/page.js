import { CardClass } from '@/components/ui/CardClass';
import Link from 'next/link';
import React from 'react';

const page = (props) => {
    return (
        <div className="container">
            <h1 className='my-4 text-2xl font-medium'>Clases disponibles</h1>
            <div className="flex">
                <Link href='/clases/que-es-tailwind'>
                    <CardClass
                        thumbnail={
                            'https://vabadus.es/images/cache/imagen_nodo/images/articulos/64b524021adc5990918944.png'
                        }
                        title={'¿Que es TailwindCSS?'}
                        description={
                            'En esta sesión de hoy aprenderas como usar tailwind en tus proyoectos'
                        }
                    />
                </Link>
            </div>
        </div>
    );
};

export default page;
