
import { useNavigate } from 'react-router-dom'

import { StyledRegister, StyledRegisterHeader } from './style'
import { StyledHeadline, StyledTitle } from '../../styles/fonts'
import { StyledButton } from '../../styles/buttons'
import { Form } from './form' 

export const RegisterPage = () => {
    const navigate = useNavigate()

    return(
        <>
            <StyledRegisterHeader className='container-form'>
                <StyledTitle color='primary' type='title1' >Kenzie Hub</StyledTitle>
                <StyledButton small onClick={() => navigate('/login')} >Voltar</StyledButton>
            </StyledRegisterHeader>
            <StyledRegister className='container-form' >
                <StyledTitle type='title3' >Crie sua conta</StyledTitle>
                <StyledHeadline size='9' color='dark' >Rapido e grátis, vamos nessa</StyledHeadline>
                <Form />

            </StyledRegister>
        </>
    )
}