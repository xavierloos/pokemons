import React, { Component } from 'react'
import { Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <>
        <Navbar className='navBg d-flex align-content-center' expand="lg">
          <Container className="d-flex justify-content-center">
            <NavDropdown title="" id="basic-nav-dropdown" className=''>
              <NavDropdown.Item as={Link} to='/home'>Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/pokeball'>Pokeball</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/about'>About</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
        <section>
          <Outlet></Outlet>
        </section>
      </>
    )
  }
}
