import { EmailAuthCredential } from 'firebase/auth/web-extension'
import * as Yup from 'yup'

export const loginSchema = Yup.object({
    email: Yup.string()
        .email('Informe um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória')
})