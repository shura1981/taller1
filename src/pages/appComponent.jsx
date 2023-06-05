//crar componente nav.jsx
import React from 'react'
import { Outlet, Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import CustomLink from '../components/custom-link.jsx';
import Footer from '../components/footer.jsx';
const AppComponent = () => {
    const navigate = useNavigate();
    const handleUnlogin = () => {
        localStorage.removeItem('userReact');
        navigate('/login', { replace: true });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Navbar
                    </Link>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to="/">
                                    Home
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog" >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'} to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/place-holder">
                                    place holder
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link pointer" onClick={handleUnlogin}>
                                    Cerrar Sesión
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    )
}

export default AppComponent



