"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Form } from "./Form";

export const RegisterContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    /**
     * @function onSubmit()
     * encargada de controlar el registro de usuarios nuevos
     */
    const onSubmit = handleSubmit(async (data) => {
        /**
         * envia los datos del usuario para relaizar el registro
         */
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-credentials": `${process.env.API_KEY}`,
            },
            body: JSON.stringify({
                password: data.password,
                name: data.name,
                typeUser: data.typeUser,
                username: data.username
            }),
        });
        const result = await res.json();

        /**
         * Si el usuario existe, despliega notificación de error
         * para informar al usuario
         */
        if (result?.message === "El usuario existe") {
            alert(result?.message)
        }

        /**
         * Si el usuario fue creado exitosamente, despliega notificación
         * para informar al usuario
         */
        if (result?.message === "Usuario creado exitosamente.") {
            alert(result?.message);
            router.push("/?type=login");
        }

        /**
         * Si hubo un error al momento de realizar el registro, despliega notificación
         * de error para informar al usuario
         */
        if (
            result?.message === "Error inesperado, porfavor, intentelo más tarde."
        ) {
            alert(result?.message);
        }
    });

    return <Form onSubmit={onSubmit} register={register} errors={errors} />;
};
