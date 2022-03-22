import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () =>
{
    return(
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href={ process.env.REACT_APP_PATH }>
                    <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH }>
                        {/* <picture>
                            <source
                                className="d-inline-block align-top" 
                                width="30"
                                height="25"
                                srcSet={ logoWebp } 
                            />
                            <Image 
                                alt="Logo"
                                className="d-inline-block align-top" 
                                width="30"
                                height="25"
                                src={ logoPng } 
                            />
                        </picture> */}
                        { ' ' }Boostrap
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH }>Inicio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;