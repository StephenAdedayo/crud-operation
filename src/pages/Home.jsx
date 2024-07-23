import React, { useState } from 'react'
import Blog from '../components/Blog'

const Home = () => {

  const [blogs, setBlogs] = useState('')

  return (
    <div className='px-5 xl:px-40 grid md:grid-cols-2 grid-cols-1 gap-10 '>
      
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>

    </div>
  )
}

export default Home
