import styled from "styled-components";

export const StyledDashboardNav = styled.nav`
    
    border-bottom: 1px solid var(--color-grey-3);
    
    div{
        margin: 18px auto 24px;

        display: flex;
        justify-content: space-between;
    }
    `
export const StyledDashboardHeader = styled.header`
    padding: 34px 0;
    
    border-bottom: 1px solid var(--color-grey-3);

    div{
        display:flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (min-width: 900px) {
        div{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
`

export const StyledDashboardMain = styled.main`
    display: none;

    h2{
        margin-top: 37px;
    }

    p{
        margin-top: 23px;
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`