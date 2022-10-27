import Image from 'next/image'
import React from 'react'
import Project from './Project'

const Projects = () => {
    const projects = [
        {
            title: "Gladiator Finance", 
            description: "Designed an NFT Marketplace for 3D gladiator NFTs. It’s a clone of pancakeswap.A user can bet on a gladiator’s ﬁght, customize the Gladiator before buying, can register it for a ﬁght, can purchase equipment for it to make it more powerful.Users can also sell gladiators and equipment in a Market place.I have worked as a full- stack developer.It is designed using Reactjs, Redux Toolkit, Zustand, Custome Hooks, Wallet Connection, Typescript, Nodejs, Loopback, MongoDB, Etherjs, and Web3Js.",
            link: "https://www.youtube.com/watch?v=maXWOlI8YU0"
        },
        {
            title: "Crowdfunding Platform",
            link: "https://www.youtube.com/watch?v=fxyPdOOXUog",
            description: "A crowdfunding platform that is built on the BSC blockchain. I worked as a full-stack developer.the backend was developed using nodejs and express js with MongoDB database.I used swagger for creating documentation of APIs.The user interface is created using Reactjs with Redux toolkit for global state management.I make sure to increase the performance of UI by avoiding the additional rerendering of React components."
        },
        {
            title: "Swiss Block",
            link: "https://www.youtube.com/watch?v=X5jtFhoGQHI",
            description: "SWISS Block is a centralized exchange it is a similar exchange like FTX but some add on functionality like of paper trading as the main thing of this exchange is that it is totally gasless, it has all types of trades like Future, Spot, Margin trading, etc.I worked as a full-stack developer. It is designed using Reactjs, Redux Toolkit, Typescript, Nodejs, Expressjs, PostgreSQL, and Sequilize ORM"
        },
        {
        title: "Noyz",
        link: "https://www.youtube.com/watch?v=uq7dKYAN3b8",
            description: "Noyz is a music-based NFT marketplace similar to Audius. Noyz is built on the Avalanche blockchain.The marketplace contains the following functionality e.g., Buying, NFT Listing on Market Page, Selling, Bidding, NFT , Royalty Fee Standards, Market Place commission Fee, User Proﬁles where users can listen to NFTS that they hold, Music Player, Users can follow the artist they like, Music Feed Section. In this project, I worked as a full- stack developer.The technologies that are used are listed here. Reactjs, Reduxjs, Nodejs, Expressjs, MongoDB, Metamask Wallet Connection, Etherjs, S3 bucket implementation for storing static Assets."
        }
    ]
  return (
    <>
          <section id="projects">
              <div className="projects">
                  <div className="projects-header">
                      <h1 className="section-title">Recent <span>Projects</span></h1>
                  </div>
                  <div className="all-projects">
                    {projects.map(project => 
                    <Project 
                    key={project.title} 
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    />)}
                  </div>
              </div>
          </section>

    </>
  )
}

export default Projects