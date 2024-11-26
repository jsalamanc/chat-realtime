import React from 'react';
import { validator } from '@/lib/validatorForms';
import Link from 'next/link';

export const Form = ({
    onSubmit,
    register,
    errors
}) => {
    return (
        <form action="#" onSubmit={onSubmit}>
            <div className="mb-4">
                <label className="block text-white">Nombre</label>
                <input
                    type="text"
                    className="w-full border border-gray-500 bg-gray-700 transition rounded-md py-2 px-3 focus:outline-none focus:ring text-slate-100"
                    autoComplete="name"
                    {...register('name', validator.name)}
                    placeholder="Ingrese su nombre"
                />
                {errors?.name && errors.name?.message && (
                    <p className="text-red-500">{`${errors.name.message}`}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-white">Nombre de usuario</label>
                <input
                    type="text"
                    className="w-full border border-gray-500 bg-gray-700 transition rounded-md py-2 px-3 focus:outline-none focus:ring text-slate-100"
                    autoComplete="name"
                    {...register('name', validator.username)}
                    placeholder="Ingrese su nombre"
                />
                {errors?.name && errors.name?.message && (
                    <p className="text-red-500">{`${errors.name.message}`}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-white">Contraseña</label>
                <input
                    type="password"
                    className="w-full border border-gray-500 bg-gray-700 transition rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring text-white"
                    autoComplete="current-password"
                    {...register('password', validator.createPassword)}
                    placeholder="Ingrese su contraseña"
                />
                {errors?.password && errors.password?.message && (
                    <p className="text-red-500">{`${errors.password.message}`}</p>
                )}
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
                Iniciar sesión
            </button>
            <p className="mt-5 text-sm text-slate-300 text-center">
                ¿ya tienes cuenta?
            </p>
            <div className="mt-4 flex">
                <Link
                    href="/?type=login"
                    className="bg-white hover:bg-gray-300 text-gray-900 text-center font-semibold rounded-md py-2 px-4 w-full"
                >
                    Iniciar sesión
                </Link>
            </div>
        </form>
    );
};
