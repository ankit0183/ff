import React from 'react'
import NavBar from "@/app/components/NavBar";
import Link from "next/link";
const home = () => {
  return (
    <div>
    <div className='homeimage'>
    <main>
    <NavBar/>
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>

        <hr />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <p className="text-white cormorant-head home_p">Helping you reach the <br />Right Audience</p>
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