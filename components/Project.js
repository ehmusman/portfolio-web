import React from 'react'
import Image from 'next/image'
const Project = ({title, description , link, image, github}) => {
  console.log("image", image);
  return (
    <>
      <div className="project-item my-2">
        <div className="project-info">
          <h1>{title}</h1>
          <p>
            {description}
          </p>
          <h1>
            {link ?  
          <a href={link} target="_blank" rel="noopener noreferrer" className='btn btn-dark btn-lg mt-5 mx-2'>See Video on Youtube</a>
            : null}
            {github ? 
          <a href={github} target="_blank" rel="noopener noreferrer" className='btn btn-dark btn-lg mt-5 mx-2'>Github Repository</a>
            :null}
          </h1>
        </div>
        <div className="project-img">
          <Image layout='fill' src={image || "/img-1.png"} alt="img" />
        </div>
      </div>
    </>
  )
}

export default Project