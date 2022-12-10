import { createContext, useState, } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export const TechContext = createContext({})

export const TechContextProvider = ({ children }) => {

    const [hideEditModal, setHideEditModal] = useState(true);
    const [hideNewTcModal, setHideNewTcModal] = useState(true);
    const [modalId, setModalId] = useState('')

    const token = window.localStorage.getItem('@TOKEN');

    const createNewTechCard = (data) => {
        (async () => {
            try {
                const response = await api.post('users/techs', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if(response.data.id){
                    toast.success(`Você cadastrou ${response.data.title} como uma nova Tecnologia!`, {position: 'top-right',autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: true,progress: undefined,theme: 'dark',});
                }
                console.log(response.data.id);
                setHideNewTcModal(true)
            } catch (error) {
                console.error(error)
                toast.error(error.response.data.message, {position: 'top-right',autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: true,progress: undefined,theme: 'dark',});
            }
        })()
    }

    const editTech = async ( data ) => {
        console.log(data);
        try {
            const response = await api.put(`users/techs/${modalId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response);
            setHideEditModal(true)
            toast.success(`Status atualizado com sucesso`, {position: 'top-right',autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: true,progress: undefined,theme: 'dark',});

        } catch (error) {
            console.error(error.response.data.message)
            toast.error(error.response.data.message, {position: 'top-right',autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: true,progress: undefined,theme: 'dark',});

        }
    }

    const deleteTech = async () => {
        try {
            const response = await api.delete(`users/techs/${modalId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response);
            setHideEditModal(true)
            toast.success(`Tech deletada com sucesso`, {position: 'top-right',autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: true,progress: undefined,theme: 'dark',});

        } catch (error) {
            console.error(error.response.data.message)
            toast.error(error.response.data.message, {position: 'top-right',autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: false,draggable: true,progress: undefined,theme: 'dark',});

        }
    }

    return (
        <TechContext.Provider value={{hideEditModal, setHideEditModal, modalId, setModalId, hideNewTcModal, setHideNewTcModal, createNewTechCard, editTech, deleteTech}} >
            { children }
        </TechContext.Provider>
    )
}