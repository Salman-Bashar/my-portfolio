import React from "react"

export default function About() {
  return (
    <main className='bg-gray-900 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-gray-300 flex justify-center sans-serif mb-6'>
          Hi, I'm Salman
        </h1>
        <p className='text-2xl flex text-gray-400 justify-center sans-serif mb-6'>
          a web developer specialized in front-end and back-end development
        </p>
        <p className='text-2xl flex text-gray-400 justify-center sans-serif mb-6'>
          I want to make things that make a difference
        </p>
        <section className='container mx-auto'>
          <p className='text-4xl flex text-gray-200 justify-center sans-serif mb-6'>
            Check my{" "}
            <a
              href='https://drive.google.com/file/d/1JXQzicdZPaULJ1oTqAfVNggedEjdl8tV/view?usp=sharing'
              alt=''
              target='_blank'
              rel='noopener noreferrer'
              className='pl-2 pr-2 text-yellow-500'
            >
              Resume
            </a>{" "}
            to know more about me
          </p>
        </section>
      </section>
    </main>
  )
}
