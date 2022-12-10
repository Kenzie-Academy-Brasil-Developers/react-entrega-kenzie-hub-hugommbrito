import { useContext,  } from "react"

import { FaTimes } from "react-icons/fa"
import { TechContext } from "../../contexts/TechContext"
import { StyledButton } from "../../styles/buttons"
import { StyledHeadline, StyledTitle } from "../../styles/fonts"
import { StyledInput, StyledSelect } from "../../styles/inputs"
import { StyledModal } from "./style"

export const ModalEdit = () => {
    const { hideModal, setHideModal } = useContext(TechContext)


    return (
        <StyledModal hide={hideModal} >
            <div className="modalHeader">
                <StyledTitle type="title3" >Editar Tecnologia</StyledTitle>
                <button onClick={() => setHideModal(true)}><FaTimes className="closeBtn" /></button>
            </div>
            <div className="modalBody">
                <StyledHeadline size='12' >Nome do projeto</StyledHeadline>
                <StyledInput placeholder="" />
                <StyledHeadline size='12' >Status</StyledHeadline>
                <StyledSelect >
                    <option value='Iniciante' >Iniciante</option>
                    <option value='Intermediário' >Intermediário</option>
                    <option value='Avançado' >Avançado</option>
                </StyledSelect>
            </div>
            <div className="modalFooter">
                <StyledButton small primary >Salvar Alterações</StyledButton>
                <StyledButton small grey > Excluir</StyledButton>
            </div>
        </StyledModal>
    )
}