import React from 'react'
import Image from 'next/image'
const Tools = () => {
    const toolsData = [
        { alt: "Typescript icon", name: "Typescript", icon: "/tools/typescript.png" },
        { alt: "Javascript icon", name: "Javascript", icon: "/tools/javascript.png" },
        { alt: "Nodejs icon", name: "Nodejs", icon: "/tools/node.png"},
        { alt: "Reactjs icon", name: "React Js", icon: "/tools/react.png" },
        { alt: "Reduxjs icon", name: "Redux", icon: "/tools/redux.png" },
        { alt: "MySQL icon", name: "MySQL", icon: "/tools/sql.jpg" },
        { alt: "MongoDB icon", name: "MongoDB", icon: "/tools/mongo.png " },
        { alt: "Graphql icon", name: "Graphql", icon: "/tools/graphql.png" },
        { alt: "Apollo icon", name: "Apollo", icon: "/tools/apollo.png" },
        { alt: "Bootstrap icon", name: "Bootstrap", icon: "/tools/bootstrap.jpg"},
        { alt: "CSS icon", name: "CSS", icon: "/tools/css.png"},
        { alt: "Expressjs icon", name: "Express Js", icon: "/tools/express.png" },
        { alt: "Web Sockets icon", name: "Web Sockets", icon: "/tools/sockets.png " },
        { alt: "CICD icon", name: "CICD", icon: "/tools/cicd.png" },
        { alt: "GIT icon", name: "GIT", icon: "/tools/git.png" },
        { alt: "Docker icon", name: "Docker", icon: "/tools/docker.png" },
        { alt: "Etherjs icon", name: "Ether Js", icon: "/tools/etherjs.png" },
        { alt: "AWS S3 icon", name: "AWS S3", icon: "/tools/aws-s3.svg" },
        // { name: "", icon: ""},
    ]
  
    return (
        <>
            <div id="technology">
                <div className="container row">
                    {toolsData.map(tool => 
                    <div key={tool.name} className="card col-md-2 col-6 my-2 mx-2">
                        <h4>{tool.name}</h4>
                        <div>
                                <Image priority={true} layout='responsive' width="50" height="50" src={tool.icon} alt={tool.alt} />
                        </div>
                    </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default Tools