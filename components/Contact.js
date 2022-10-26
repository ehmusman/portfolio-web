import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <>
          <section id="contact">
              <div className="contact container">
                  <div>
                      <h1 className="section-title">Contact <span>info</span></h1>
                  </div>
                  <div className="contact-items">
                      <div className="contact-item">
                          <div className="icon">
                              <Image width="100%" height="100%" layout="responsive" alt="img" src="https://img.icons8.com/bubbles/100/000000/phone.png" />
                          </div>
                          <div className="contact-info">
                              <h1>Phone</h1>
                              <h2>+92 (347) 737-0480</h2>
                              <h2>+92 (316) 383-9554</h2>
                          </div>
                      </div>
                      <div className="contact-item">
                          <div className="icon">
                              <Image width="100%" height="100%" layout="responsive" alt="img"
                                  src="https://img.icons8.com/bubbles/100/000000/new-post.png"
                              />
                          </div>
                          <div className="contact-info">
                              <h1>Email</h1>
                              <h2>ehmusman@gmail.com</h2>
                          </div>
                      </div>
                      <div className="contact-item">
                          <div className="icon">
                              <Image width="100%" height="100%" layout="responsive" alt="img"
                                  src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
                              />
                          </div>
                          <div className="contact-info">
                              <h1>Address</h1>
                              <h2>New Green Town, Faisalabad, Pakistan</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Contact