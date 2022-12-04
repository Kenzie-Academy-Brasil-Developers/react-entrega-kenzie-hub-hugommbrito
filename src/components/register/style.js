import styled from "styled-components";

export const StyledRegisterHeader = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledRegister = styled.div`
    padding: 2.5rem 1.5rem;
    margin: 0 auto 50px ;

    background-color: var(--color-grey-3);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-5);
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-5);

        width: 100%;
    }

    input, select, button, .inputDiv{
        width: 100%;
    }
`