import React from 'react'
import NavBar from '../components/NavBar'
import Link from "next/link";
const home = () => {
  return (
    <div>
    <div className='homeimage'>
    <main>
    <NavBar/>
      {/* <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index-2.html">
            <img src="images/logo.svg" alt="Logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
              <li className="nav-item">
                <a className="nav-link active" href="index-2.html">
                  HOME
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link inactive" href="services.html">
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

      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>

        <hr />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <p className="text-white cormorant-head home_p">Helping you reach<br />the Right Audience</p>
            <Link className="btn custom-btn   "  href="#">
              {/* <a className="btn custom-btn   " > */}
                Contact
              {/* </a> */}
              </Link>
              <Link className="btn custom-border-btn  smoothscroll"  href="/services">
              {/* <a className="btn custom-border-btn  smoothscroll" > */}
                Know More
              {/* </a> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="home-div-wrapper">
              <img src="images/frame-3.png" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    </div>
  )
}

export default home