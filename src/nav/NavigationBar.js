import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { logout } from "../services/authService";
import './Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Restaurant</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user && (
                        <Nav className="me-auto">
                            <NavLink to="/"><div className="nav-button">Home</div></NavLink>
                            <NavLink to="/about"><div className="nav-button">About</div></NavLink>
                            <NavLink to="/contact"><div className="nav-button">Contact</div></NavLink>
                            <NavLink to="/menu"><div className="nav-button">Menu</div></NavLink>
                            <NavLink to="/reservation"><div className="nav-button">Reservation</div></NavLink>
                        </Nav>
                    )}
                    
                    {!user && (
                        <Nav className="login-signup-buttons">
                            <NavLink to="/login"><div className="nav-button">Login</div></NavLink>
                            <NavLink to="/signup"><div className="nav-button">Sign Up</div></NavLink>
                        </Nav>
                    )}

                    {user && (
                        <Nav>
                            <div className="nav-button">Hello, {user.displayName}</div>
                            <div className="nav-button"><button onClick={handleLogout}>Logout</button></div>
                        </Nav>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
        // <nav className="navbar navbar-expand-lg custom-navbar">
        //     <div className="container">
        //         <NavLink className="navbar-brand" to="/">
        //             <strong>Restaurant Name</strong>
        //         </NavLink>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarNav"
        //             aria-controls="navbarNav"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //         <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav ms-auto">
        //                     <NavLink className="nav-link" to="/"><li className="nav-item">Home</li></NavLink>
        //                     <NavLink className="nav-link" to="/about"><li className="nav-item">About</li></NavLink>
        //                     <NavLink className="nav-link" to="/contact"><li className="nav-item">Contact</li></NavLink>
        //                     <NavLink className="nav-link" to="/menu"><li className="nav-item">Menu</li></NavLink>
        //                     <NavLink className="nav-link" to="/reservation"><li className="nav-item">Reservation</li></NavLink>
        //                 {user && (
        //                     <NavLink className="nav-link" to="/new"><li className="nav-item">New Article</li></NavLink>
        //                 )}
        //                 {!user && (
        //                     <>
        //                         <NavLink className="nav-link" to="/login"><li className="nav-item">Login</li></NavLink>
        //                         <NavLink className="nav-link" to="/signup"><li className="nav-item">Signup</li></NavLink>
        //                     </>
        //                 )}
        //                 {user && (
        //                     <>
        //                         <li className="nav-item">
        //                             <span className="navbar-text mx-2">Hello, {user.displayName}</span>
        //                         </li>
        //                         <li className="nav-item">
        //                             <button className="btn btn-sm custom-logout-btn" onClick={handleLogout}>Logout</button>
        //                         </li>
        //                     </>
        //                 )}
        //             </ul>
        //         </div>

        //     </div>
        // </nav>
    );
}
