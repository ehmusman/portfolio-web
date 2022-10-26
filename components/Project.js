import React from 'react'

const Project = ({title, description , link}) => {
  return (
    <>
          <div className="project-item">
              <div className="project-info">
                  <h1>{title}</h1>
                  <p>
                    {description}
                  </p>
              </div>
              <div className="project-img">
                  <button
                      type="button"
                      className="btn fs-1 text-center w-100 my-auto h-100 border border-dark border-2 border-start-0"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                  >
                      <a
                          style={{ textDecoration: "none", color: "black" }}
                          href={link} target="_blank" rel="noopener noreferrer">
                          See Video on Youtube
                      </a>
                  </button>
              </div>
          </div>
    </>
  )
}

export default Project