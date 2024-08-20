import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';




const Update = () => {

  const {id} = useParams()

 const [title, setTitle] = useState('')
 const [body, setBody] = useState('')
 const [author, setAuthor] = useState('')
 const [isPending, setIsPending] = useState(false)
 const [isToastShown, setisToastShown] = useState(false)
 const navigate = useNavigate()


//  const notify = () => {
//   toast('blog updated successfully', {
//     toastId:'blogUpdated', 
//     style:{
//       background:'black',
//       color:"white"
//     }
    
//   })
//  }

const blogSuccess = () => {
  if(!isToastShown){
    toast('blog updated successfully', {
      style:{
        background:'black',
        color:'white'
      }
    })
  }
  setisToastShown(true)
}


 const fetchblogs = async () => {
  try {
    const response = await fetch(`http://localhost:8000/blogs/${id}`)
    if(!response.ok){
      throw new Error('error occured')
    }

    const data = await response.json()
    const blogs = data
    setTitle(blogs.title)
    setBody(blogs.body)
    setAuthor(blogs.author)
  } catch (error) {
    console.log('error:', error);
  }
 }

 useEffect(() => {
  fetchblogs()
 }, [id])

const updateBlog = async (e) => {
  e.preventDefault()




  try {
    const updateBlog = {
      title,
      body,
      author
    }

  setIsPending(true)
    const response = await fetch (`http://localhost:8000/blogs/${id}`,{
      method:'PUT',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify(updateBlog)
    })

    if(!response.ok){
      throw new Error('failed to fetch')
    }
    // alert('blog updated successfully')
    blogSuccess()
    setTimeout(() => {
      navigate('/')
    }, 1000);
    
   } catch (error) {
    console.log('error', error);
  }
}
 


  return (
    <div>
            <div className="flex items-center justify-center h-screen">
        <form onSubmit={updateBlog}  className="max-w-[600px] w-full rounded-lg  shadow-lg p-10">
            {/* {error && <div className="text-red-500">{error}</div>} */}
          <label for>Blog Title:</label> <br />
          <input
            className="w-full outline-none border-2 rounded-md border-gray-500 p-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />{" "}
          <br /> <br />
          <label>Blog Body:</label> <br />
          <textarea
            name=""
            id=""
            className="w-full outline-none rounded-md border-2 border-gray-500 p-4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            cols={40}
            rows={10}
          ></textarea>{" "}
          <br /> <br />
          <label htmlFor="">Author:</label> <br />
          <input
            className="w-full outline-none border-2 rounded-md border-gray-500 p-4"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
          />{" "}
          <br /> <br />
          {!isPending && 
          <button
            className="px-6 mt-5 bg-indigo-900 rounded-md text-[#fff] mx-auto block py-3 "
            type="submit"
            
          >
            Update Blog
          </button>}
          {isPending && <button className='px-6 mt-5 bg-indigo-500 cursor-no-drop rounded-md text-[#fff] mx-auto block py-3' disabled>Updating.....</button>}
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Update
