"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/context/store";
import { signIn } from "next-auth/react";
import { Form } from "./Form";
import { generateNotify } from "@/lib/context/GenerateNotify";

export const LoginContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await signIn("credentials", {
                username: data.username,
                name: data.name,
                password: data.password,
                redirect: false,
            });
            if (res?.status !== 200) {
                generateNotify({
                    dispatch,
                    timeout: 4000,
                    notification: { type: "error", message: res?.error || "" },
                });
            }
            router.push("/clases");
        } catch (error) {
            console.error("error", error);
        }
    });

    return <Form onSubmit={onSubmit} register={register} errors={errors} />;
};
