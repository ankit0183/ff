"use client";



import React, { useEffect, useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaTimes } from "react-icons/fa";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    console.log(window.location);
  }, []);

  useEffect(() => {
   console.log(pathname,"pathname");
  }, [])
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    playTickSound();
  };

  const playTickSound = () => {
    const tickSound = new Audio("/audio/link.mp3");
    tickSound.play();
  };

  return (
    <>
      <Navbar className={`bg1 navbar-expand-lg navbar navbar-inverse ${isNavbarFixed ? 'fixed-top' : ''}`}
        style={{
          backgroundImage: isNavbarFixed ? 'url("images/bg1.jpg")' : '',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="images/logo.svg"
            style={{
              width: 100,
              marginLeft: 51,
            }}
          />
        </NavbarBrand>
        <NavbarToggler
          style={{ height: "20px" }}
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={FaTimes}
              style={{ color: "white", height: "24px" }}
            />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav align-items-lg-center ms-auto me-lg-5" navbar>
            <NavItem>
              <Link href="/home">
                <NavLink className={`nav-link fs-6 ${pathname === "/home" ? 'active' : 'inactive'}`}>
                  Home
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/services">
                <NavLink className={`nav-link fs-7 ${pathname === "/services" ? 'active' : 'inactive'}`}>
                  SERVICES
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/ourwork">
                <NavLink className={`nav-link fs-7 ${pathname === "/ourwork" ? 'active' : 'inactive'}`}>
                  OUR WORK
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about">
                <NavLink className={`nav-link fs-7 ${pathname === "/about" ? 'active' : 'inactive'}`}>
                  ABOUT
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;




