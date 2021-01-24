import React from "react"
import image from "../bg-img.jpg"

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Web Development'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-4xl font-bold text-yellow-600 sans-serif leading-none lg:leading-snug home-name'>
          HELLO WORLD!
        </h1>
      </section>
    </main>
  )
}
