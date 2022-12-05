import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast} from 'react-toastify'

import { api } from '../../services/api'

import { StyledLogin, StyledLoginHeader } from './style'
import { StyledTitle, StyledHeadline } from '../../styles/fonts'
import { StyledInput } from '../../styles/inputs'
import { StyledButton } from '../../styles/buttons'

export const LoginPage = ({ setUser }) => {
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email: yup.string().required('Campo Obrigatório'),
        password: yup.string().required('Campo Obrigatório'),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    })

    const [loading, setLoading] = useState(false)

    const submitFunction = async (data) => {
        try{
            setLoading(true)
            const response = await api.post('sessions', data)

            setUser(response.data.user)
            window.localStorage.setItem('@TOKEN', response.data.token)
            window.localStorage.setItem('@USERID', response.data.user.id)
            toast.success('Login realizado com sucesso!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            navigate('/dashboard')
            
        } catch (error) {
            toast.error(error.response.data.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

        } finally {
            setLoading(false)

        }

    }

    return(
        <>
            <StyledLoginHeader className='container-form'>
                <StyledTitle type='title1' color='primary'>Kenzie Hub</StyledTitle>
            </StyledLoginHeader>
            <StyledLogin className='container-form'>
                <StyledTitle >Login</StyledTitle>
                <form onSubmit={handleSubmit(submitFunction)} >
                    <div className='inputDiv'>
                        <StyledHeadline size='9' >Email</StyledHeadline>
                        <StyledInput placeholder='Digite seu Email aqui' {...register('email')}/>
                        { errors.email && <StyledHeadline color='primary' >{errors.email.message}</StyledHeadline>}
                    </div>
                    <div className='inputDiv'>
                        <StyledHeadline size='9' >Senha</StyledHeadline>
                        <StyledInput type='password' placeholder='Digite sua senha aqui' {...register('password')} />
                        { errors.password && <StyledHeadline color='primary' >{errors.password.message}</StyledHeadline>}
                    </div>
                    <StyledButton >{loading ? 'Carregando...' : 'Entrar'}</StyledButton>
                </form>
                <StyledHeadline size='9.6' bold color='dark' >Ainda não possui uma conta?</StyledHeadline>
                <StyledButton grey onClick={() => navigate('/register')} >Cadastre-se</StyledButton>
            </StyledLogin>
        </>
    )
}