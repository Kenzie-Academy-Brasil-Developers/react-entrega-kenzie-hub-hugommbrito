import { useState } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { DashboardPage } from '../components/dashboard'
import { LoginPage } from '../components/login'
import { RegisterPage } from '../components/register'

export const RoutesStructure = () => {
    const [user, setUser] = useState({id: 'c299bfc1-5ca6-4676-b283-c28905dd6a45', name: 'Hugo', email: 'hugo@mail.com', course_module: 'm3', bio: 'teste de bio',});

    return(
        <Routes >
            <Route path='/login' element={<LoginPage setUser={setUser} />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage userInfo={user} />} />

            <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
    )
}