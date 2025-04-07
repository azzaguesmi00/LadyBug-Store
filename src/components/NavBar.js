import React from "react";
import {Nav ,Logo , NavLinks , NavItem} from "../Styles/NavBarstyle";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (

        <Nav>
        <Logo>LADYBUG STORE 🐞</Logo>
        <NavLinks>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/shop">Shop</Link></NavItem>
          <NavItem><Link to="/contact">Contact</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/services">Services</Link></NavItem>
        </NavLinks>
      </Nav>
    )
};

export default NavBar;