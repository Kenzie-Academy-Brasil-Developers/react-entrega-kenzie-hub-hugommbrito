import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Campo Obrigatório'),
    email: yup
        .string()
        .required('Campo Obrigatório')
        .email('Email Inválido'),
    password: yup
        .string()
        .required('Campo Obrigatório')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'A senha deve conter no mínimo 8 caracteres, sendo pelo menos 1 letra maiúscula, 1 letra minustula, 1 número e 1 caracter especial'),
    passwordConfirm: yup
        .string()
        .required('Campo Obrigatório')
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
    bio: yup
        .string()
        .required('Campo Obrigatório'),
    contact: yup
        .string()
        .required('Campo Obrigatório'),
    course_module: yup
        .string()
        .required('Campo Obrigatório'),
})