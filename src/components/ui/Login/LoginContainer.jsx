"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Form } from "./Form";

export const LoginContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await signIn("credentials", {
                username: data.username,
                password: data.password,
                redirect: false,
            });
            if (res?.status !== 200) {
                alert('Error ocurrido')
            }
            router.push("/clases");
        } catch (error) {
            console.error("error", error);
        }
    });

    return <Form onSubmit={onSubmit} register={register} errors={errors} />;
};
