import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css"; // laisse vide au début pour éviter les conflits

const Header = () => {
  console.log("✅ Header is loaded");

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand to="/"><strong>Employee Management Systeme</strong></Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link as ={Link} to ="/" className="nav-link">Employee</Nav.Link>
                <Nav.Link as ={Link} to ="/employee" className="nav-link">Post Employee</Nav.Link>
                </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
