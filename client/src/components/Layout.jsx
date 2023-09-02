import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Toaster position="top-right" />
            {children}
            <Footer />
        </>
    )
}

export default Layout