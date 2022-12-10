import { useContext,  } from 'react'
import { useForm } from 'react-hook-form'

import { FaTimes } from 'react-icons/fa'
import { TechContext } from '../../contexts/TechContext'

import { StyledButton } from '../../styles/buttons'
import { StyledHeadline, StyledTitle } from '../../styles/fonts'
import { StyledInput, StyledSelect } from '../../styles/inputs'
import { StyledModal, StyledNewTcModal } from './style'

export const ModalEdit = () => {
    const { hideEditModal, setHideEditModal, editTech, deleteTech } = useContext(TechContext)

    const { register, handleSubmit } = useForm()

    return (
        <StyledModal hide={hideEditModal} >
            <div className='modalHeader'>
                <StyledTitle type='title3' >Editar Tecnologia</StyledTitle>
                <button onClick={() => setHideEditModal(true)}><FaTimes className='closeBtn' /></button>
            </div>
            <form onSubmit={handleSubmit(editTech)} >
                <div className='modalBody'>
                    <StyledHeadline size='12' >Nome do projeto</StyledHeadline>
                    <StyledInput placeholder='Novo nome para essa Tech' {...register('title')}/>
                    <StyledHeadline size='12' >Status</StyledHeadline>
                    <StyledSelect {...register('status')} >
                        <option value='Iniciante' >Iniciante</option>
                        <option value='Intermediário' >Intermediário</option>
                        <option value='Avançado' >Avançado</option>
                    </StyledSelect>
                </div>
                <div className='modalFooter'>
                    <StyledButton small primary type='submit' >Salvar Alterações</StyledButton>
                    <StyledButton small grey onClick={deleteTech} type='button'> Excluir</StyledButton>
                </div>
            </form>
        </StyledModal>
    )
}

export const ModalNewTech = () => {
    const { hideNewTcModal, setHideNewTcModal, createNewTechCard } = useContext(TechContext)

    const { register, handleSubmit } = useForm()

    return (
        <StyledNewTcModal hide={hideNewTcModal} >
            <div className='modalHeader'>
                <StyledTitle type='title3' >Cadastrar Tecnologia</StyledTitle>
                <button onClick={() => setHideNewTcModal(true)}><FaTimes className='closeBtn' /></button>
            </div>
            <form onSubmit={handleSubmit(createNewTechCard)} >
                <div className='modalBody'>
                    <StyledHeadline size='12' >Nome do projeto</StyledHeadline>
                    <StyledInput placeholder='Dê um nome para essa Tech' {...register('title')} />
                    <StyledHeadline size='12' >Status</StyledHeadline>
                    <StyledSelect {...register('status')} >
                        <option value='Iniciante' >Iniciante</option>
                        <option value='Intermediário' >Intermediário</option>
                        <option value='Avançado' >Avançado</option>
                    </StyledSelect>
                </div>
                <div className='modalFooter'>
                    <StyledButton small primary type='submit' >Cadastrar Tecnologia</StyledButton>
                </div>
            </form>
        </StyledNewTcModal>
    )
}