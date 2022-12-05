import { useNavigate } from 'react-router-dom' 

import { StyledDashboardHeader, StyledDashboardMain, StyledDashboardNav } from "./style"
import { StyledHeadline, StyledTitle } from "../../styles/fonts"
import { StyledButton } from "../../styles/buttons";

export const DashboardPage = ({ userInfo }) => {
    const navigate = useNavigate()
    console.log(userInfo);

    return(
        <>
            <StyledDashboardNav >
                <div className="container" >
                    <StyledTitle type='title1' color='primary' >Kenzie Hub</StyledTitle>
                    <StyledButton small onClick={() => navigate('/login')} >Sair</StyledButton>
                </div>
            </StyledDashboardNav>
            <StyledDashboardHeader >
                <div className="container" >
                    <StyledTitle type='title1' >Olá, {userInfo.name}</StyledTitle>
                    <StyledHeadline color='dark' >{userInfo.course_module}</StyledHeadline>
                </div>
            </StyledDashboardHeader>
            <StyledDashboardMain className="container">
                    <StyledTitle type='title1' >Que pena! Estamos em desenvolvimento :( </StyledTitle>
                    <StyledHeadline size='16' >Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledHeadline>
            </StyledDashboardMain>
        </>
    )
}