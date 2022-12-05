import { useForm } from 'react-hook-form'

import { api } from "../../services/api";

import { StyledLogin, StyledLoginHeader } from "./style"
import { StyledTitle, StyledHeadline } from "../../styles/fonts"
import { StyledInput } from "../../styles/inputs";
import { StyledButton } from "../../styles/buttons";

export const LoginPage = () => {
    const { register, handleSubmit } = useForm()

    return(
        <>
        <StyledLoginHeader className="container-form">
            <StyledTitle type='title1' color='primary'>Kenzie Hub</StyledTitle>
        </StyledLoginHeader>
        <StyledLogin className="container-form">
            <StyledTitle >Login</StyledTitle>
            <form >
                <div className="inputDiv">
                    <StyledHeadline size='9' >Email</StyledHeadline>
                    <StyledInput placeholder='Digite seu Email aqui' {...register('email')}/>
                    {/* { errors.email && <StyledHeadline color='primary' >{errors.email.message}</StyledHeadline>} */}
                </div>
                <div className="inputDiv">
                    <StyledHeadline size='9' >Senha</StyledHeadline>
                    <StyledInput type='password' placeholder='Digite sua senha aqui' {...register('password')} />
                    {/* { errors.password && <StyledHeadline color='primary' >{errors.password.message}</StyledHeadline>} */}
                </div>
                <StyledButton >Entrar</StyledButton>
            </form>
            <StyledHeadline size='9.6' bold color='dark' >Ainda não possui uma conta?</StyledHeadline>
            <StyledButton disabled >Cadastre-se</StyledButton>
        </StyledLogin>
        </>
    )
}