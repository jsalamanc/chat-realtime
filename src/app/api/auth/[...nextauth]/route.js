import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    throw new Error('Credenciales no proporcionadas');
                }
                /**
                 * desestructuramos las credenciales recibidas del frontend
                 */
                const { username, password } = credentials;
                /**
                 * verificamos si el usuario existe
                 */
                const user = await prisma.user.findUnique({
                    where: {
                        username,
                    },
                });
                /**
                 * si el error es diferente de 200,
                 * retorna el error
                 */
                if (!user)
                    throw new Error('El usuario no existe');
                /**
                 * almacenamos la contraseña de la bases de datos
                 * en la variable passwordDB
                 */
                const passwordDB = user?.password;
                /**
                 * verifica si la contraseña recibida es correcta
                 */
                const isPasswordCorrect = await bcrypt.compare(`${password}`, passwordDB);
                /**
                 * si la contraseña es correcta, retorna las credenciales del usuario
                 */
                if (isPasswordCorrect) {
                    return {
                        id: user?.id,
                        name: user?.username || null,
                        email: 'test@test.com',
                        image: 'none',
                    };
                }
                /**
                 * si la contraseña es incorrecta, retorna error
                 */
                if (!isPasswordCorrect) {
                    throw new Error('Contraseña Invalida');
                }
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
});

export { handler as GET, handler as POST };
