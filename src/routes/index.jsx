import { useState } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { DashboardPage } from '../components/dashboard'
import { LoginPage } from '../components/login'
import { RegisterPage } from '../components/register'

export const RoutesStructure = () => {
    const [user, setUser] = useState({})

    return(
        <Routes >
            <Route path='/login' element={<LoginPage setUser={setUser} />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage userInfo={user} setUser={setUser} />} />

            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    )
}