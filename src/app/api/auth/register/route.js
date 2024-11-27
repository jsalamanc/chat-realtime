import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';
/**
 * propiedades validas para la petición
 */
const validKeys = ['username', 'password', 'name', 'typeUser'];

/**
 * @function POST()
 * handler route API
 */
export const POST = async (request) => {
    /**
     * obtengo el json recibido en la petición
     */
    const body = await request.json();
    /**
     * valido si las propiedades del objeto son validas
     */
    const isExact = Object?.keys(body).every((key) => validKeys.includes(key));
    /**
     * si las propiedades del body son correctas,
     * procedemos con la petición
     */
    if (isExact) {
        const { username, password, name, typeUser } = body;
        try {
            const user = await prisma.user.findUnique({
                where: {
                    username,
                },
            });
            /**
             * si el usuario existe, envia respuesta notificando al usuario
             */
            if (user) {
                return NextResponse.json({
                    status: 200,
                    message: 'El usuario existe',
                });
            }
            /**
             * encripta la contraseña del nuevo usuario
             */
            const hashedPassword = await bcrypt.hash(password, 10);
            /**
             * Crea el nuevo usuario en la bases de datos
             */
            const newUser = await prisma.user.create({
                data: {
                    username,
                    name,
                    password: hashedPassword,
                    type: typeUser
                },
            });
            if (newUser) {
                return NextResponse.json({
                    status: 400,
                    message: 'Usuario creado exitosamente.',
                });
            }
        } catch (error) {
            console.error('error', error);
            return NextResponse.json({
                status: 501,
                message: 'Error inesperado, porfavor, intentelo más tarde.',
            });
        }
    } else {
        /**
         * si las propiedades del body son incorrectas, retorna error
         */
        return NextResponse.json({
            status: 400,
            message: 'Peticíon invalida',
        });
    }
};
