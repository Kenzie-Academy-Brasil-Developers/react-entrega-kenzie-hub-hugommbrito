import { useState } from 'react'
import { RoutesStructure } from './routes/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/globalStyles'


function App() {

    return (
        <>
            <GlobalStyles />
            <RoutesStructure />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme='dark'
              />
        </>
    )
}

export default App
