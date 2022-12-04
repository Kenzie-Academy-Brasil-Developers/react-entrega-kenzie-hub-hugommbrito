import styled from "styled-components"

export const StyledTitle = styled.h2`
    color: ${props => {
        if(props.color === 'dark'){
            return 'var(--color-grey-1)'
        } else if (props.color == 'primary'){
            return 'var(--color-primary)'
        } else {
            return 'var(--color-grey-0)'
        }
    }};
    ${props =>{
            switch(props.type){
                case "title1":
                    return 'font-size: var(--font-s18); font-weight: var(--font-w700)';
                case "title2":
                    return 'font-size: var(--font-s16); font-weight: var(--font-w600)';
                case "title3":
                    return 'font-size: var(--font-s14); font-weight: var(--font-w700)';
            }
        }
    };
`

export const StyledHeadline = styled.p`
    color: ${props => {
        if(props.color === 'dark'){
            return 'var(--color-grey-1)'
        } else if (props.color == 'primary'){
            return 'var(--color-primary)'
        } else {
            return 'var(--color-grey-0)'
        }
    }};
    font-size: var(--font-s12);
    font-weight: ${props => props.bold ? 'var(--font-w600)' : 'var(--font-w400)'};
    font-style: ${props => props.italic ? 'italic' : 'normal'};
`