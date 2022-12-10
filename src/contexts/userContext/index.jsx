import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast} from 'react-toastify'

import { api } from '../../services/api'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [userTechs, setUserTechs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = window.localStorage.getItem('@TOKEN')
        const userId = window.localStorage.getItem('@USERID')

        if(token){
            (async () => {
                try {
                    setLoading(true)
                    const response = await api.get(`users/${userId}`)
                    setUser(response.data)
                    setUserTechs([...response.data.techs])

                    
                } catch (error) {
                    window.localStorage.clear()
                    console.error(error);
                } finally {
                    setLoading(false)

                }
            })()
        } else {
            navigate('/')
        }
    }, [])

    const login = async (data) => {
        try{
            setLoading(true)
            const response = await api.post('sessions', data)

            setUser(response.data.user)
            window.localStorage.setItem('@TOKEN', response.data.token)
            window.localStorage.setItem('@USERID', response.data.user.id)
            toast.success('Login realizado com sucesso!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            navigate('/dashboard')
            
        } catch (error) {
            toast.error(error.response.data.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

        } finally {
            setLoading(false)

        }

    }

    const logout = () => {
        window.localStorage.clear()
        setUser({})
        navigate('/login')
    }

    return (
        <UserContext.Provider value={{login, user, loading, logout, userTechs}} >
            { children }
        </UserContext.Provider>
    )
}