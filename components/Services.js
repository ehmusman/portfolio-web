import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <>
          <section id="services">
              <div className="services container">
                  <div className="service-top">
                      <h1 className="section-title">Serv<span>i</span>ces</h1>
                      <p>
                          I am a passionate full-stack web application developer. i'll provide you solution of your problems.
                      </p>
                  </div>
                  <div className="service-bottom">
                      <div className="service-item">
                          <div className="icon">
                              <Image alt='' width="100%" height="100%" layout="responsive" objectFit="contain" 
                                  src="https://img.icons8.com/bubbles/100/000000/services.png"
                              />
                          </div>
                          <h2>Frontend Development</h2>
                          <p>
                               Reactjs | Nextjs | Reduxjs | blockchain integration | Etherjs | Web3js | Wallet Connection | Apollo Client | CICD
                          </p>
                      </div>
                      <div className="service-item">
                          <div className="icon">
                              <Image alt='' width="100%" height="100%" layout="responsive" objectFit="contain" 
                                  src="https://img.icons8.com/bubbles/100/000000/services.png"
                              />
                          </div>
                          <h2>Backend Development</h2>
                          <p>
                            Nodejs | Typescript | Expressjs | Loopback | Web Sockets | Graphql | MySQL |  PostgreSQL | MongoDB | Redis | CICD | S3 Bucket | Cloudinary
                          </p>
                      </div>
                      <div className="service-item">
                          <div className="icon">
                              <Image alt='' width="100%" height="100%" layout="responsive" objectFit="contain" 
                                  src="https://img.icons8.com/bubbles/100/000000/services.png"
                              />
                          </div>
                          <h2>Deployment</h2>
                          <p>
                              Containerization | Docker | Docker-Compose | Digitalocean | EC2 instance
                          </p>
                      </div>
                      <div className="service-item">
                          <div className="icon">
                              <Image alt='' width="100%" height="100%" layout="responsive" objectFit="contain" 
                                  src="https://img.icons8.com/bubbles/100/000000/services.png"
                              />
                          </div>
                          <h2>Payment Integration</h2>
                          <p>
                              Blockchain | Paypal | Stripe
                          </p>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Services