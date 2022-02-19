import "./MyNavbar.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const setClose = () => setIsOpen(false);

  return (
    <div className="my-nav-bar">
      {isOpen && (
        <div className="my-modal" onClick={setClose}>
          Tuan
        </div>
      )}

      <Navbar color="" light expand="md">
        <NavbarBrand className="nav-brand" href="#">
          Portfolio
        </NavbarBrand>
        <NavbarToggler className="nav-toggle" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" href="#home" onClick={setClose}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#about" onClick={setClose}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#skills" onClick={setClose}>
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                href="#experience"
                onClick={setClose}
              >
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#projects" onClick={setClose}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#contact" onClick={setClose}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
