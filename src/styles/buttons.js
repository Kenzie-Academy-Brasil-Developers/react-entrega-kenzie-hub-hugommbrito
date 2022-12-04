import styled from "styled-components";

export const StyledButton = styled.button`
    width: max-content;
    height: ${ props => props.small ? '2rem' : '3rem'};
    padding: 0 ${ props => props.small ? '1rem' : '1.5rem'};


    background-color: ${props => {
            if(props.small){
                return 'var(--color-grey-3)'
            }else if (props.disabled){
                return 'var(--color-grey-1)'
            } else if (props.negative){
                return 'var(--color-primary-negative)'
            } else {
                return 'var(--color-primary)'
            }
        }
    };
    border: 1px solid ${props => {
            if(props.small){
                return 'var(--color-grey-3)'
            }else if(props.disabled){
                return 'var(--color-grey-1)'
            } else if (props.negative){
                return 'var(--color-primary-negative)'
            } else {
                return 'var(--color-primary)'
            }
        }
    };
    border-radius: var(--radius-1);
    
    font-size: var(--font-s12);
    font-weight: var(--font-w500);
    color: var(--color-grey-0);

    cursor: pointer;
    
    &:hover{
        background-color: ${props => {
            if(props.small){
                return 'var(--color-grey-2)'
            }else if(props.disabled){
                return 'var(--color-grey-2)'
            } else if (props.negative){
                return 'var(--color-primary-negative)'
            } else {
                return 'var(--color-primary-focus)'
            }
        }
    };
    border: 1px solid ${props => {
            if(props.small){
                return 'var(--color-grey-2)'
            }else if(props.disabled){
                return 'var(--color-grey-2)'
            } else if (props.negative){
                return 'var(--color-primary-negative)'
            } else {
                return 'var(--color-primary-focus)'
            }
        }
    };
    }
    

`