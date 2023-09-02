import React from 'react'
import { NavLink } from "react-router-dom"
import { useAuth } from '../context/Auth'
import toast from 'react-hot-toast'
const Header = () => {
    const [auth, setAuth] = useAuth();
    const logOut = () => {
        setAuth({
            ...auth,
            user: null,
            token: null
        });
        localStorage.removeItem("auth");
        toast.success("Log out Successfull")
    }
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width={40} height={32}><use xlinkto="#bootstrap" /></svg>
                    <span className="fs-4">🛍️E-Comm</span>
                </NavLink>
                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink to="/" className="nav-link" aria-current="page">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/category" className="nav-link" aria-current="page">Category</NavLink></li>
                    {!auth.user ? (<>
                        <li className="nav-item"><NavLink to="/register" className="nav-link">register</NavLink></li>
                        <li className="nav-item"><NavLink to="/login" className="nav-link">LogIn</NavLink></li></>) : (<>
                            <li className="nav-item"><NavLink onClick={logOut} to="/login" className="nav-link">Log Out</NavLink></li></>)}
                    <li className="nav-item"><NavLink to="/cart" className="nav-link">Cart(0)</NavLink></li>
                </ul>
            </header>
        </div>

    )
}

export default Header