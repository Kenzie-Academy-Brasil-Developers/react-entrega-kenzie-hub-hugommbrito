import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify'

import { api } from '../../services/api'

import { StyledRegister, StyledRegisterHeader } from "./style"
import { StyledHeadline, StyledTitle } from "../../styles/fonts"
import { StyledButton } from "../../styles/buttons"
import { StyledInput, StyledSelect } from '../../styles/inputs'

export const RegisterPage = () => {
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
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

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema)
    })

    const submitFunction = async (data) => {

        const formatedData = {
            name: data.name,
            email: data.email,
            password: data.password,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module,
        }

        try{
            const response = await api.post('users', formatedData)

            toast.success('Usuário cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate('/login')
  
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }

    return(
        <>
            <StyledRegisterHeader className="container-form">
                <StyledTitle color='primary' type='title1' >Kenzie Hub</StyledTitle>
                <StyledButton small onClick={() => navigate('/login')} >Voltar</StyledButton>
            </StyledRegisterHeader>
            <StyledRegister className="container-form" >
                <StyledTitle type='title3' >Crie sua conta</StyledTitle>
                <StyledHeadline size='9' color='dark' >Rapido e grátis, vamos nessa</StyledHeadline>
                <form onSubmit={handleSubmit(submitFunction)} >
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Nome</StyledHeadline>
                        <StyledInput placeholder='Digite seu nome aqui' {...register('name')} />
                        { errors.name && <StyledHeadline color='primary' >{errors.name.message}</StyledHeadline>}
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Email</StyledHeadline>
                        <StyledInput placeholder='Digite seu Email aqui' {...register('email')}/>
                        { errors.email && <StyledHeadline color='primary' >{errors.email.message}</StyledHeadline>}
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Senha</StyledHeadline>
                        <StyledInput type='password' placeholder='Digite sua senha aqui' {...register('password')} />
                        { errors.password && <StyledHeadline color='primary' >{errors.password.message}</StyledHeadline>}
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Confirmar Senha</StyledHeadline>
                        <StyledInput type='password' placeholder='Digite sua senha novamente' {...register('passwordConfirm')} />
                        { errors.passwordConfirm && <StyledHeadline color='primary' >{errors.passwordConfirm.message}</StyledHeadline>}
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Bio</StyledHeadline>
                        <StyledInput placeholder='Fale sobre você' {...register('bio')} />
                        { errors.bio && <StyledHeadline color='primary' >{errors.bio.message}</StyledHeadline>}
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Contato</StyledHeadline>
                        <StyledInput placeholder='Opção de contato' {...register('contact')} />
                        { errors.contact && <StyledHeadline color='primary' >{errors.contact.message}</StyledHeadline>}
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Selecionar Módulo</StyledHeadline>
                        <StyledSelect {...register('course_module')} >
                            <option value="1º Módulo">1º Módulo</option>
                            <option value="2º Módulo">2º Módulo</option>
                            <option value="3º Módulo">3º Módulo</option>
                            <option value="4º Módulo">4º Módulo</option>
                            <option value="5º Módulo">5º Módulo</option>
                            <option value="6º Módulo">6º Módulo</option>
                        </StyledSelect>
                        { errors.course_module && <StyledHeadline color='primary' >{errors.course_module.message}</StyledHeadline>}
                    </div>
                    <StyledButton type='submit'  >Cadastrar</StyledButton>
                </form>
            </StyledRegister>
        </>
    )
}