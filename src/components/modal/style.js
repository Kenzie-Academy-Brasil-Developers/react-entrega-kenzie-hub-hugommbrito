import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    visibility: ${props => props.hide ? 'hidden' : 'visible'};

    & div {
        width: 90vw;
        padding: 12px 20px;
        background-color: var(--color-grey-3);
        margin: 0 auto;
    }
    
    .modalHeader{
        margin-top: 20vh;
        background-color: var(--color-grey-2);
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            background-color: transparent;
            border: none;
            cursor: pointer;

            .closeBtn{
                fill: var(--color-grey-0);
            }
        }
    }

    .modalBody{
        display: flex;
        flex-direction: column;
        gap: 14px;

        input{
            margin-bottom: 4px;
        }
    }

    .modalFooter{
        display: flex;
        justify-content: space-between;

        button:nth-child(1){
            width: 60%;
        }

        button:nth-child(2){
            width:35%;
        }
    }

    @media (min-width: 900px) {
        & div{
            width: 30vw;
        }
    }

`