import React, { useState, useEffect } from 'react';
import { debounce } from '../../utilities/helpers';

import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './MyNavBar.css'
import myLogo from "../../images/my-logo.png"


const MyNavbar = () => {

    return (
        <Navbar className="nav-bg" variant="dark" expand="lg">
            <Container className="justify-content-between" style={{ Height: '30px' }} >
                <Navbar.Brand href="/"><img class="my-logo" src={myLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="mr-auto my-2 my-lg-0 mx-3 justify-content-end"
                        style={{ maxHeight: '160px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/"><span className="text-hover">HOME</span></Nav.Link>
                        <Nav.Link href="#about"><span className="text-hover">ABOUT</span></Nav.Link>
                        <Nav.Link href="#project"><span className="text-hover">PROJECT</span></Nav.Link>
                        <Nav.Link href="#contact"><span className="text-hover">CONTACT</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default MyNavbar;