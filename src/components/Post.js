import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client.js"
import ucImage from "../uc.jpg"

export default function Post() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])

  return (
    <main className='bg-gray-900 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-gray-300 flex justify-center sans-serif pb-6'>
          Welcome to my Blog Posts
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-dark text-2xl font-bold px-3 py-4 bg-opacity-75 rounded bg-white'>
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
        <div>
          <img
            src={ucImage}
            alt='Under Construction'
            className='flex justify-center p-6 mx-auto opacity-75'
          />
        </div>
      </section>
    </main>
  )
}
