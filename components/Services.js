import React from 'react'
import Image from 'next/image'
const Services = () => {
    const servicesData = [
        { 
            id: 1, 
            title: "Frontend Development", 
            description: " Reactjs | Nextjs | Reduxjs | blockchain integration | Etherjs | Web3js | Wallet Connection | Apollo Client | CICD", 
            image: "/images/frontend-development.png" 
        },
        { 
            id: 2, 
            title: "Backend Development", 
            description: "Nodejs | Typescript | Expressjs | Loopback | Web Sockets | Graphql | MySQL |  PostgreSQL | MongoDB | Redis | CICD | S3 Bucket | Cloudinary", 
            image: "/images/backend-development.png" 
        },
        { 
            id: 3, 
            title: "Deployment", 
            description: "Containerization | Docker | Docker-Compose | Digitalocean | EC2 instance", 
            image: "/images/deployment.png" 
        },
        { 
            id: 4, 
            title: "Payment Integration", 
            description: " Blockchain | Paypal | Stripe", 
            image: "/images/payment-gateway.png" 
        },
    ]
    return (
        <>
            <section id="services">
                <div className="services container">
                    <div className="service-top">
                        <h1 className="section-title">Tech Stack</h1>
                        <p>
                            I am a passionate full-stack web application developer.i&apos;ll provide you solution of your problems.
                        </p>
                    </div>
                    <div className="service-bottom">
                        {servicesData.map(service =>

                            <div className="service-item" key={service.id}>
                                <div className="icon">
                                    <Image alt='' width="100" height="100" layout="responsive" objectFit="contain"
                                        src={service.image}
                                    />
                                </div>
                                <h2>{service.title}</h2>
                                <p>
                                    {service.description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services