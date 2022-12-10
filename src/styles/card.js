import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    padding: 0.75rem;
    margin: 0.4rem auto;

    background-color: var(--color-grey-4);
    border-radius: var(--radius-1);
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    &:hover{
        background-color: var(--color-grey-2);
    }
`