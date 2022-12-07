import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './formSchema'
import { ToastContainer, toast } from 'react-toastify'

import { api } from '../../../services/api'

import { StyledButton } from '../../../styles/buttons'
import { StyledInput, StyledSelect } from '../../../styles/inputs'
import { StyledHeadline, StyledTitle } from '../../../styles/fonts'

export const Form = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
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
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            navigate('/login')
  
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
            })

        }
    }


    return (
        <form onSubmit={handleSubmit(submitFunction)} >
            <div className='inputDiv'>
                <StyledHeadline size='9' >Nome</StyledHeadline>
                <StyledInput placeholder='Digite seu nome aqui' {...register('name')} />
                { errors.name && <StyledHeadline color='primary' >{errors.name.message}</StyledHeadline>}
            </div>
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
            <div className='inputDiv'>
                <StyledHeadline size='9' >Confirmar Senha</StyledHeadline>
                <StyledInput type='password' placeholder='Digite sua senha novamente' {...register('passwordConfirm')} />
                { errors.passwordConfirm && <StyledHeadline color='primary' >{errors.passwordConfirm.message}</StyledHeadline>}
            </div>
            <div className='inputDiv'>
                <StyledHeadline size='9' >Bio</StyledHeadline>
                <StyledInput placeholder='Fale sobre você' {...register('bio')} />
                { errors.bio && <StyledHeadline color='primary' >{errors.bio.message}</StyledHeadline>}
            </div>
            <div className='inputDiv'>
                <StyledHeadline size='9' >Contato</StyledHeadline>
                <StyledInput placeholder='Opção de contato' {...register('contact')} />
                { errors.contact && <StyledHeadline color='primary' >{errors.contact.message}</StyledHeadline>}
            </div>
            <div className='inputDiv'>
                <StyledHeadline size='9' >Selecionar Módulo</StyledHeadline>
                <StyledSelect {...register('course_module')} >
                    <option value='1º Módulo'>1º Módulo</option>
                    <option value='2º Módulo'>2º Módulo</option>
                    <option value='3º Módulo'>3º Módulo</option>
                    <option value='4º Módulo'>4º Módulo</option>
                    <option value='5º Módulo'>5º Módulo</option>
                    <option value='6º Módulo'>6º Módulo</option>
                </StyledSelect>
                { errors.course_module && <StyledHeadline color='primary' >{errors.course_module.message}</StyledHeadline>}
            </div>
            <StyledButton type='submit'  >Cadastrar</StyledButton>
        </form>
    )
}