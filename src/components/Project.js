import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"

export default function Project() {
  const [projectData, setProject] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            link,
            sourceCode,
            description
        }`
      )
      .then((data) => setProject(data))
      .catch(console.error)
  }, [])

  return (
    <main className='bg-gray-900 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-gray-300 flex justify-center sans-serif mb-6'>
          My Projects
        </h1>
        <section className='grid grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-gray-300 p-16'>
                <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-red-500 font-bold hover:text-red-400 text-xl hover:underlined'
                  >
                    View Project Source Code{" "}
                    <span role='img' aria-label='right pointer'>
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  )
}
