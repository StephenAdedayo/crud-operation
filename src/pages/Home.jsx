import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import { useParams } from 'react-router-dom'

const Home = () => {

  const [blogs, setBlogs] = useState('')
  const {id} = useParams()
  const fetchBlogs = async () => {
    try {
      const response = await fetch ('http://localhost:8000/blogs')
    const data = await response.json()
    setBlogs(data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method:'DELETE'
        
      })
      if(!response.ok){
        throw new Error('failed')
      }

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id ))
    } catch (error) {
      console.log('error', error);
    }
  }


  return (
    <div className='px-5 xl:px-40 grid md:grid-cols-2 grid-cols-1 gap-10 '>
      

      {blogs && blogs.map(blog => (
      <Blog id={blog.id}  title={blog.title} body={blog.body} author={blog.author} handleDelete={() => handleDelete(blog.id)}/>
      ))}
        
        {/* <Blog/> */}
        {/* <Blog/> */}
        {/* <Blog/> */}

    </div>
  )
}

export default Home
