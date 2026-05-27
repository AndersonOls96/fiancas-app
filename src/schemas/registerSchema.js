import * as Yup from 'yup'

export const registerSchema = Yup.object({
    email: Yup.string()
        .email('Informe um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigada'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
        .required('Confirme sua senha')
})
