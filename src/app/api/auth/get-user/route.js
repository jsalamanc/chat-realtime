import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    try {
        /**
         * obtengo el json recibido en la petición
         */
        const body = await request.json();
        /**
         * verificamos si el usuario existe
         */
        const user = await prisma.user.findUnique({
            where: {
                username: body?.username,
            },
        });
        /**
         * si el error es diferente de 200,
         * retorna el error
         */
        if (!user) throw new Error('El usuario no existe');
        return NextResponse.json({
            status: 200,
            data: user,
        });
    } catch (error) {
        console.error('error', error);
        return NextResponse.json({
            status: 500,
            message: 'Error inesperado.',
        });
    }
};
