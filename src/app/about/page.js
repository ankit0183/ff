'use client';
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NavBar from '../components/NavBar';
import Footers from '../components/Footers';
 

const about = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  };
  return (
    
    <div>
      
      <div className='myimage'>
        
        <main>
          <NavBar />
       {/* <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="index-2.html">
          <img src="images/logo.svg" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
         // data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                onClick={toggleNavbar}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
            <NavItem>
    <Link href="/">
      <NavLink>Home</NavLink>
    </Link>
  </NavItem>
            <li className="nav-item">
              <a className="nav-link active" href="services.html">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="our-work.html">
                OUR WORK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="about.html">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}
          
      <section className="hero-section-new" id="section_1">
        <div className="section-overlay"></div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-white mb-5-top century-head">About Us</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="services-div-wrapper">
              <img src="images/frame-4.svg" style={{ height: '200px' }} alt="Image" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img src="images/logo-new.svg" className="about-image img-fluid" alt="Logo" />
              </div>
              <p className="text-pink century">(French meaning - the feeling of <strong>relaxation</strong>)</p>
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info">
                <p className="text-black century">
                  We are a team of <strong>creative</strong> minds, harnessing the power of collaboration and ingenuity to drive
                  business growth through captivating visuals.
                  <br /><br />
                  Our creative team thrives on the joy and stories that emanate from our work, cherishing the relationships we
                  build with our clients.
                  <br /><br />
                  We see you not only as clients but as integral team members, with the collective wisdom of our partnership
                  sparking <strong>innovative ideas. Your vision,</strong> our execution – a <strong>seamless partnership.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section-new bg1">
        <div className="section-overlay"></div>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <p className="text-white cormorant-head">Need an Awesome Idea?</p>
               {/* <a className="btn border border-primary btn-danger" href="./" role="button">Contact</a> */}
               <a className="btn custom-btn smoothscroll text-pink" href="#">
               Contact
                </a>
                 
            </div>
          </div>
        </div>
      </section>

     <Footers/>
     </main>
        
         
      </div>
      
    
     
    </div>
  )
}

export default about