import React from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

const Menu = ()=>{
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Bored</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#new">New</Nav.Link>
                <NavDropdown title="Brands" id="collasible-nav-dropdown">
                    <ul>
                        <li><a className="active" href="#Create Page">Create Page</a></li>
                        <li><a href="#Manage Pages">Manage Pages</a></li>
                        <li><a href="#Create Ads">Create Ads</a></li>
                        <li><a href="#Manage Ads">Manage Ads</a></li>
                        <li><a href="#Activity Logs">Activity Logs</a></li>
                        <li><a href="#Setting">Setting</a></li>
                        <li><a href="#Log Out">Log Out</a></li>
                    </ul>
                </NavDropdown>
                <NavDropdown title="Clothing" id="collasible-nav-dropdown">
                    <ul>
                        <li><a className="active" href="#Create Page">Create Page</a></li>
                        <li><a href="#Manage Pages">Manage Pages</a></li>
                        <li><a href="#Create Ads">Create Ads</a></li>
                        <li><a href="#Manage Ads">Manage Ads</a></li>
                        <li><a href="#Activity Logs">Activity Logs</a></li>
                        <li><a href="#Setting">Setting</a></li>
                        <li><a href="#Log Out">Log Out</a></li>
                    </ul>
                </NavDropdown>
                <NavDropdown title="Accessories" id="collasible-nav-dropdown">
                    <ul>
                        <li><a className="active" href="#Create Page">Create Page</a></li>
                        <li><a href="#Manage Pages">Manage Pages</a></li>
                        <li><a href="#Create Ads">Create Ads</a></li>
                        <li><a href="#Manage Ads">Manage Ads</a></li>
                        <li><a href="#Activity Logs">Activity Logs</a></li>
                        <li><a href="#Setting">Setting</a></li>
                        <li><a href="#Log Out">Log Out</a></li>
                    </ul>
                </NavDropdown>
                <NavDropdown title="Skateboarding" id="collasible-nav-dropdown">
                    <ul>
                        <li><a className="active" href="#Create Page">Create Page</a></li>
                        <li><a href="#Manage Pages">Manage Pages</a></li>
                        <li><a href="#Create Ads">Create Ads</a></li>
                        <li><a href="#Manage Ads">Manage Ads</a></li>
                        <li><a href="#Activity Logs">Activity Logs</a></li>
                        <li><a href="#Setting">Setting</a></li>
                        <li><a href="#Log Out">Log Out</a></li>
                    </ul>
                </NavDropdown>
                <Nav.Link href="#shoes">Shoes</Nav.Link>
                <Nav.Link href="#sale">Sale</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default Menu