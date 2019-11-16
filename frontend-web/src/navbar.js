import React from 'react'
import {
    Navbar, Nav, NavLink, NavbarBrand, Form, Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Navibar extends React.Component {
    render() {
      return (
        <div>
            {/* <h1>Navbar</h1> */}

            <Navbar bg="dark" variant="dark">
                <NavbarBrand href="#home">Navbar</NavbarBrand>
                <Nav className="mr-auto">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                </Nav>
                <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
      );
    }
}
export default Navibar

