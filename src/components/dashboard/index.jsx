import { useContext, useEffect } from 'react';

import { UserContext } from '../../contexts/userContext';
import { TechContext } from '../../contexts/TechContext';
import { api } from '../../services/api';

import {  StyledDashboardHeader,  StyledDashboardMain,  StyledDashboardNav,} from './style';
import { StyledHeadline, StyledTitle } from '../../styles/fonts';
import { StyledButton } from '../../styles/buttons';
import { StyledCard } from '../../styles/card';

import { FaPlus } from 'react-icons/fa';
import { ModalEdit, ModalNewTech } from '../modal';

export const DashboardPage = () => {
  const { logout, user, userTechs, setUserTechs } = useContext(UserContext);
  const { setHideEditModal, setModalId, setHideNewTcModal, hideNewTcModal, hideEditModal } = useContext(TechContext);

  const userId = window.localStorage.getItem('@USERID')

  const openEditModal = (e) => {
    setHideEditModal(false);
    setModalId(e.target.id);
  };

  const openNewTcModal = () => {
    setHideNewTcModal(false);
  };

    useEffect(() => {
      (async () => {
        const response = await api.get(`users/${userId}`)
        setUserTechs([...response.data.techs])
      })()
    },[hideNewTcModal, hideEditModal ])

  return (
    <>
      <StyledDashboardNav>
        <div className='container'>
          <StyledTitle type='title1' color='primary'>
            Kenzie Hub
          </StyledTitle>
          <StyledButton small onClick={logout}>
            Sair
          </StyledButton>
        </div>
      </StyledDashboardNav>
      <StyledDashboardHeader>
        <div className='container'>
          <StyledTitle type='title1'>Olá, {user.name}</StyledTitle>
          <StyledHeadline color='dark'>{user.course_module}</StyledHeadline>
        </div>
      </StyledDashboardHeader>
      <StyledDashboardMain className='container'>
        <div>
          <StyledTitle type='title2'>Tecnologias </StyledTitle>
          <StyledButton small onClick={openNewTcModal} >
            <FaPlus />
          </StyledButton>
        </div>
        <section>{
          userTechs.map((tech) => (
              <StyledCard key={tech.id} id={tech.id} title={tech.title} onClick={(e) => openEditModal(e)}>
                  <StyledTitle type='title3'>{tech.title}</StyledTitle>
                  <StyledHeadline color='dark'>{tech.status}</StyledHeadline>
              </StyledCard>
          ))
        }</section>
      </StyledDashboardMain>
      <ModalNewTech></ModalNewTech>
      <ModalEdit></ModalEdit>
    </>
  );
};
