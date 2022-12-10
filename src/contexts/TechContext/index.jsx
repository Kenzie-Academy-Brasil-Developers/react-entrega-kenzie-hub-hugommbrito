import { createContext, useState } from "react";

export const TechContext = createContext({})

export const TechContextProvider = ({ children }) => {

    const [hideModal, setHideModal] = useState(true);
    const [modalId, setModalId] = useState('')

    return (
        <TechContext.Provider value={{hideModal, setHideModal, modalId, setModalId}} >
            { children }
        </TechContext.Provider>
    )
}