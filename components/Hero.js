import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
          <section id="hero">
              <div className="hero container">
                  <div>
                      <h1>Hello, <span></span></h1>
                      <h1>My Name is <span></span></h1>
                      <h1>Muhammad Usman<span></span></h1>
                      <Link href="/about">
                      <a type="button" className="cta">Portfolio</a>
                      </Link>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Hero