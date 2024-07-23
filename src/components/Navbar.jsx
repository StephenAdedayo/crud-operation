import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className='px-5 lg:px-40 shadow-md w-full py-5 flex justify-between'>
     
     <div>
        <p>Steve's Blog</p>
     </div>


  <ul className='space-x-10 text-sm uppercase font-semibold'>
  <Link className='active:text-red-500 ' to="/">Home</Link>
  <Link to="/create">Create</Link>
  <Link to="/update/id">Update</Link>
  <Link to="/blogs/id">BlogPage</Link>


  </ul>





     </nav>




    </div>
  )
}

export default Navbar
