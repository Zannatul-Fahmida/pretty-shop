import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsSuitHeart, BsBasket3 } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { GiHollowCat } from 'react-icons/gi';

const Navigation = () => {
    return (
        <div>
            <Navbar>
                <Container className="d-flex align-items-center justify-content-between">
                    <Navbar.Brand href="#home"><GiHollowCat /><span style={{ color: '#ff0565' }}>Pretty</span>Shop</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <NavDropdown title="Catalog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bird</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#home"><AiOutlineSearch /></Nav.Link>
                        <Nav.Link href="#features"><BsSuitHeart /></Nav.Link>
                        <Nav.Link href="#pricing"><BsBasket3 /></Nav.Link>
                        <Nav.Link href="#pricing"><BiUserCircle /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;