import React from 'react'
import Image from 'next/image'
const Tools = () => {
    const toolsData = [
        { name: "Typescript", icon: "/tools/typescript.png" },
        { name: "Javascript", icon: "/tools/javascript.png" },
        { name: "Nodejs", icon: "/tools/node.png"},
        { name: "React Js", icon: "/tools/react.png" },
        { name: "Redux", icon: "/tools/redux.png" },
        { name: "MySQL", icon: "/tools/sql.jpg" },
        { name: "Mongo DB", icon: "/tools/mongo.png " },
        { name: "Graphql", icon: "/tools/graphql.png" },
        { name: "Apollo", icon: "/tools/apollo.png" },
        { name: "Bootstrap", icon: "/tools/bootstrap.jpg"},
        { name: "CSS", icon: "/tools/css.png"},
        { name: "Express Js", icon: "/tools/express.png" },
        { name: "Web Sockets", icon: "/tools/sockets.png " },
        { name: "CICD", icon: "/tools/cicd.png" },
        { name: "GIT", icon: "/tools/git.png" },
        { name: "Docker", icon: "/tools/docker.png" },
        { name: "Ether Js", icon: "/tools/etherjs.png" },
        { name: "AWS S3", icon: "/tools/aws-s3.svg" },
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
                                <Image priority={true} layout='responsive' width="50" height="50" src={tool.icon} alt="Node Js Icon" />
                        </div>
                    </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default Tools