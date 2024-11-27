export const validator = {
    username: {
        required: 'Nombre de usuario invalido'
    },
    name: {
        required: 'Nombre invalido'
    },
    password: {
        required: 'Contraseña invalida.'
    },
    typeUser: {
        required: 'Tipo de usuario invalido.'
    },
    createPassword: {
        required: 'Ingrese una contraseña.',
        pattern: {
            value:
                /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
            message: 'Contraseña invalida.'
        }
    }
};
