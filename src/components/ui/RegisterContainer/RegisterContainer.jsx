"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/context/store";
import { generateNotify } from "@/lib/context/GenerateNotify";
import { Form } from "./Form";

export const RegisterContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const router = useRouter();
    const dispatch = useAppDispatch();
    const router = useRouter();

    /**
     * @function onSubmit()
     * encargada de controlar el registro de usuarios nuevos
     */
    const onSubmit = handleSubmit(async (data) => {
        /**
         * envia los datos del usuario para relaizar el registro
         */
        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-credentials": `${process.env.API_KEY}`,
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                name: data.name,
            }),
        });
        const result = await res.json();

        /**
         * Si el usuario existe, despliega notificación de error
         * para informar al usuario
         */
        if (result?.message === "El usuario existe") {
            generateNotify({
                dispatch,
                timeout: 4000,
                notification: { type: "error", message: result?.message || "" },
            });
        }

        /**
         * Si el usuario fue creado exitosamente, despliega notificación
         * para informar al usuario
         */
        if (result?.message === "Usuario creado exitosamente.") {
            generateNotify({
                dispatch,
                timeout: 4000,
                notification: { type: "success", message: result?.message || "" },
            });
            router.push("/dashboard");
        }

        /**
         * Si hubo un error al momento de realizar el registro, despliega notificación
         * de error para informar al usuario
         */
        if (
            result?.message === "Error inesperado, porfavor, intentelo más tarde."
        ) {
            generateNotify({
                dispatch,
                timeout: 4000,
                notification: { type: "error", message: result?.message || "" },
            });
        }
    });

    return <Form onSubmit={onSubmit} register={register} errors={errors} />;
};
