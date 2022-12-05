import styled from "styled-components";

export const StyledDashboardNav = styled.nav`
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: var(--color-grey-4);

    border-bottom: 1px solid var(--color-grey-3);
    
    div{
        margin: 18px auto 24px;

        display: flex;
        justify-content: space-between;
    }
`

export const StyledDashboardHeader = styled.header`
    position: relative;
    top: 75px;
    
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
    position: relative;
    top: 75px;
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