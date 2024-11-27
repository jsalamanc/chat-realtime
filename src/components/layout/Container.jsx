"use client";

import React, { useEffect } from 'react'
import { useSession } from "next-auth/react";
import { useAppDispatch } from '@/lib/context/store';
import { setUserSession } from '@/lib/context/reducers/UserSession';

export const Container = ({ children }) => {
    const { data: session, status } = useSession();
    const dispatch = useAppDispatch();

    useEffect(() => {
        /**
         * funcion encargada de obtener la información del usuario
         */
        const getUser = async () => {
            const promise = await fetch("/api/auth/get-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'access-control-allow-credentials': process.env.API_KEY
                },
                body: JSON.stringify({ username: session?.user?.name }),
            });
            const user = await promise.json();
            console.log({ user });
            /**
             * almacena al información del usuario en redux
             */
            dispatch(setUserSession({ user }));
        };
        /**
         * si el usuario esta autenticado obtiene la infromación del usuario
         */
        if (status === "authenticated") {
            getUser();
        }
    }, [status]);

    return (
        <div>{children}</div>
    )
}
