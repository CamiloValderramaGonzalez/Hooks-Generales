import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="navbar-brand ms-3" to="/">useContext</div>
                <div className="container-fluid">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
