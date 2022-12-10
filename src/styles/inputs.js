import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;

    border: 1px solid var(--color-grey-2);
    border-radius: var(--radius-1);
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    &:focus{
        outline: none;
        border-color: var(--color-grey-0);
        color: var(--color-grey-0);
    }
    `
    
export const StyledSelect = styled.select`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;

    border: 1px solid var(--color-grey-2);
    border-radius: var(--radius-1);
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    &:focus{
        outline: none;
        border-color: var(--color-grey-0);
        color: var(--color-grey-0);
    }

`