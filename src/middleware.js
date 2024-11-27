import { getToken } from 'next-auth/jwt';
// import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    // Obtener el token de la sesión del usuario
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;
    // Proteger rutas de clases y api
    if (pathname.startsWith('/clases') || pathname.includes('/api')) {
        if (!token) {
            // Si no hay token, redirigir al login para rutas de clases
            if (pathname.startsWith('/clases')) {
                return NextResponse.redirect(new URL('/?type=login', req.url), { status: 307 });
            }
            // Devolver un 401 para rutas API sin token válido
            if (pathname.includes('/api')) {
                return new NextResponse(
                    JSON.stringify({ message: 'Token no proporcionado o inválido.' }),
                    { status: 401, headers: { 'Content-Type': 'application/json' } }
                );
            }
        }
    }

    // Si hay token y se intenta acceder a la página principal, redirigir al clases
    if (token && pathname === '/') {
        return NextResponse.redirect(new URL('/clases', req.url), {
            status: 307,
        });
    }

    // Permitir el acceso si no es una ruta protegida o está logueado
    return NextResponse.next();
}

// Aplica el middleware solo a las rutas "/" y "/dashboard" y la api
export const config = {
    matcher: [
        '/',
        '/clases/:path*',
        '/api/client/:path*',
    ],
};
