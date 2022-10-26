import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
          <section id="header">
              <div className="header container">
                  <div className="nav-bar">
                      <div className="brand">
                          <Link href="/">
                            <a style={{textDecoration: "none"}}>
                              <h1><span>M</span>uhammad <span>U</span>sman</h1>
                            </a>
                          </Link>
                      </div>
                      <div className="nav-list">
                          <div className="hamburger">
                              <div className="bar"></div>
                          </div>
                          <ul>
                              <li><Link href="/" data-after="Home">Home</Link></li>
                              <li>
                                  <Link href="/services" data-after="Service">Services</Link>
                              </li>
                              <li>
                                  <Link href="/projects" data-after="Projects">Projects</Link>
                              </li>
                              <li><Link href="/about" data-after="About">About</Link></li>
                              <li><Link href="/contact" data-after="Contact">Contact</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Header