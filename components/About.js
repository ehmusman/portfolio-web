import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
          <section id="about">
              <div className="about container">
                  <div className="col-left">
                      <div className="about-img">
                          <Image layout='fill' src="/profile.jpeg" alt="img" />
                      </div>
                  </div>
                  <div className="col-right">
                      <h1 className="section-title">About <span>me</span></h1>
                      <h2>JavaScript | Reactjs | Nodejs | MERN Stack | Web3 js | Docker | AWS | GraphQL | Rest APIs | TypeScript | CICD | Microservices Architecture| Team Lead</h2>
                      <p>
                          I am a Fullstack web application developer with a demonstrated history of working in the information technology and services industry. I am skilled in JavaScript, Typescript, Nodejs, Reactjs, Docker, Docker-compose,
                          Kubernetrese, CICD, Web3js, EtherjS, GraphQL, Blockchain integration, Wallet Connection, SQL(MySQL, PostgreSQL), and NoSQL(MongoDB, Redis) databases with Database design and management. Strong engineering professional focus in Fullstack web development from the University of Engineering and Technology - UET. Enthusiastic and eager to contribute to
                          team success through hard work, attention to detail, and  organizational skills Motivated to learn, grow and excel in my ﬁeld.
                      </p>
                      <a
                          className="cta"
                          href="/Hafiz Muhammad Usman.pdf"
                          alt="alt text"
                          target="_blank"
                          rel="noopener noreferrer"
                      >Download Resume</a>
                  </div>
              </div>
          </section>
    </>
  )
}

export default About