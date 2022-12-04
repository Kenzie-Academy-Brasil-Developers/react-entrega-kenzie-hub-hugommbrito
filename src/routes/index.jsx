import { Routes, Route, Navigate } from 'react-router-dom'

import { DashboardPage } from '../components/dashboard'
import { LoginPage } from '../components/login'
import { RegisterPage } from '../components/register'

export const RoutesStructure = () => {
    return(
        <Routes >
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />

            <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
    )
}