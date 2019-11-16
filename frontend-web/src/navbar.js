import React from 'react'
import {
    Navbar, Nav, NavLink, NavbarBrand, Form
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './asset/bulzen.png'
class Navibar extends React.Component {
    render() {
      return (
        <div>
            {/* <Navbar fixed="top" bg="dark"  variant="dark"> */}
            <Navbar fixed="top" style={{backgroundColor : '#343a40'}}>
                <NavbarBrand href="/" style={{color : '#FFFFFF', fontSize:30, fontWeight:"bold", fontStyle:'italic'}}>BULZEN</NavbarBrand>
                <Nav className="mr-auto">
                <NavLink href="/" style={{color : '#8F9396'}}>Home</NavLink>
                <NavLink href="/detail" style={{color : '#8F9396'}}>Detail</NavLink>
                </Nav>
                <Form inline>
                </Form>
            </Navbar>
        </div>
      );
    }
}
export default Navibar

