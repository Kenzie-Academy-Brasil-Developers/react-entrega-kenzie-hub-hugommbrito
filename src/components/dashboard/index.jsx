import { StyledDashboard } from "./style"

import { StyledTitle } from "../../styles/fonts"
import { StyledButton } from "../../styles/buttons";

export const DashboardPage = ({ userInfo }) => {
    console.log(userInfo);
    return(
        <StyledDashboard >
            <StyledTitle >DASHBOARD</StyledTitle>
            <StyledButton onClick={() => console.log(userInfo)} >user</StyledButton>
        </StyledDashboard>
    )
}