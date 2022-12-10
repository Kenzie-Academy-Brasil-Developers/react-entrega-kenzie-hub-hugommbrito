import { useContext } from "react";

import { UserContext } from "../../contexts/userContext";
import { TechContext } from "../../contexts/TechContext";

import {  StyledDashboardHeader,  StyledDashboardMain,  StyledDashboardNav,} from "./style";
import { StyledHeadline, StyledTitle } from "../../styles/fonts";
import { StyledButton } from "../../styles/buttons";
import { StyledCard } from "../../styles/card";

import { FaPlus } from "react-icons/fa";
import { ModalEdit } from "../modal";

export const DashboardPage = () => {
  const { logout, user, userTechs } = useContext(UserContext);
  const { setHideModal, setModalId } = useContext(TechContext);

  const openModal = (e) => {
    setHideModal(false);
    setModalId(e.target.id);
  };

  return (
    <>
      <StyledDashboardNav>
        <div className="container">
          <StyledTitle type="title1" color="primary">
            Kenzie Hub
          </StyledTitle>
          <StyledButton small onClick={logout}>
            Sair
          </StyledButton>
        </div>
      </StyledDashboardNav>
      <StyledDashboardHeader>
        <div className="container">
          <StyledTitle type="title1">Olá, {user.name}</StyledTitle>
          <StyledHeadline color="dark">{user.course_module}</StyledHeadline>
        </div>
      </StyledDashboardHeader>
      <StyledDashboardMain className="container">
        <div>
          <StyledTitle type="title2">Tecnologias </StyledTitle>
          <StyledButton small>
            <FaPlus />
          </StyledButton>
        </div>
        <section>
          {userTechs.map((tech) => (
            <StyledCard
              key={tech.id}
              id={tech.id}
              onClick={(e) => openModal(e)}
            >
              <StyledTitle type="title3">{tech.title}</StyledTitle>
              <StyledHeadline color="dark">{tech.status}</StyledHeadline>
            </StyledCard>
          ))}
        </section>
      </StyledDashboardMain>
      <ModalEdit></ModalEdit>
    </>
  );
};
