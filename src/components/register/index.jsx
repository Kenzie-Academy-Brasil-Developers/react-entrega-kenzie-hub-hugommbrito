import { useNavigate } from 'react-router-dom'

import { StyledRegister, StyledRegisterHeader } from "./style"
import { StyledHeadline, StyledTitle } from "../../styles/fonts"
import { StyledButton } from "../../styles/buttons"
import { StyledInput, StyledSelect } from '../../styles/inputs'

export const RegisterPage = () => {
    const navigate = useNavigate()

    return(
        <>
            <StyledRegisterHeader className="container-form">
                <StyledTitle color='primary' type='title1' >Kenzie Hub</StyledTitle>
                <StyledButton small onClick={() => navigate('/login')} >Voltar</StyledButton>
            </StyledRegisterHeader>
            <StyledRegister className="container-form" >
                <StyledTitle type='title3' >Crie sua conta</StyledTitle>
                <StyledHeadline size='9' color='dark' >Rapido e grátis, vamos nessa</StyledHeadline>
                <form >
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Nome</StyledHeadline>
                        <StyledInput placeholder='Digite seu nome aqui' />
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Email</StyledHeadline>
                        <StyledInput placeholder='Digite seu Email aqui' />
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Senha</StyledHeadline>
                        <StyledInput placeholder='Digite sua senha aqui' />
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Confirmar Senha</StyledHeadline>
                        <StyledInput placeholder='Digite sua senha novamente' />
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Bio</StyledHeadline>
                        <StyledInput placeholder='Fale sobre você' />
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Contato</StyledHeadline>
                        <StyledInput placeholder='Opção de contato' />
                    </div>
                    <div className="inputDiv">
                        <StyledHeadline size='9' >Selecionar Módulo</StyledHeadline>
                        <StyledSelect >
                            <option value="m1">1º Módulo</option>
                            <option value="m2">2º Módulo</option>
                            <option value="m3">3º Módulo</option>
                            <option value="m4">4º Módulo</option>
                            <option value="m5">5º Módulo</option>
                            <option value="m6">6º Módulo</option>
                        </StyledSelect>
                    </div>
                    <StyledButton type='submit' negative >Cadastrar</StyledButton>
                </form>
            </StyledRegister>
        </>
    )
}