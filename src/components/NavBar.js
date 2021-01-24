import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
  return (
    <header className='bg-yellow-500'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inflex-flex items-center py-10 px-3 mr-4 text-yellow-100 hover:text-green-800 text-4xl font-bold sans-serif tracking-widest'
          >
            SALMAN
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-yellow-800 bg-yellow-400'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-dark hover:text-green-800'
          >
            About Me!
          </NavLink>
          <NavLink
            to='/project'
            activeClassName='text-yellow-800 bg-yellow-400'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-dark hover:text-green-800'
          >
            Projects
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='text-yellow-800 bg-yellow-400'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-dark hover:text-green-800'
          >
            Blog
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.linkedin.com/in/salman-bashar-5b87a3118/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ heigh: 35, width: 35 }}
          />
          <SocialIcon
            url='https://github.com/Salman-Bashar'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ heigh: 35, width: 35 }}
          />
          <SocialIcon
            url='mailto:salmanbadhon@gmail.com'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ heigh: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}
