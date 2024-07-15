import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoArrowSwitch } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { BsChatSquareText } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "./images/Logo.png";
import man from "./images/man1.png";
import set from "./images/set.png";

const NavPage = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar className="bg-body-tertiary flex justify-between">
          <Container className="">
            <Navbar.Brand href="#home">
              <img
                src={set}
                width="40"
                height="40"
                className=""
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="60"
                height="60"
                className="mt-2"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Internship</Nav.Link>
            <Nav.Link href="#deets">Jobs</Nav.Link>
            <Nav.Link href="#deets">Clubs</Nav.Link>
            <div className="bg-cyan-100 w-36 h-10 rounded-md inline-flex justify-center">
              <Nav.Link href="#deets">Switch Mode</Nav.Link>
              <Nav.Link href="#deets">
                <GoArrowSwitch className="mt-1" />
              </Nav.Link>
            </div>
            <Nav.Link href="#deets">
              <CiBookmark />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BsChatSquareText />
            </Nav.Link>
            <Nav.Link href="#deets">
              <img
                src={man}
                width={30}
                height={30}
                className="rounded-full"
                alt=""
              />
            </Nav.Link>
            <Nav.Link href="#deets">
              <IoMdArrowDropdown className="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPage;
