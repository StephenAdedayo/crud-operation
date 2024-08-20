import React from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { TiDelete } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Blog = ({id, title, body, author, handleDelete}) => {


  const truncateText = (text, wordLimit) => {
       const words = text.split(" ");
       if(words.length <= wordLimit) return text;
       return words.slice(0, wordLimit).join(" ") + "...";
  }
  
  return (
    <div className='mt-20'>
      
        {/* <Link to={`/blogs/${id}`}> */}
        
        <div className='bg-slate-50 shadow-md hover:scale-105 hover:shadow-lg p-10 space-y-3'>
        <Link to={`/blogs/${id}`}><h1 className='text-xl text-blue-900'>{title}</h1></Link>
        <p className='text-gray-600'>{truncateText(body, 50)}</p>
        <p className='font-semibold'>Written by: <span className='text-blue-900'>{author}</span></p>

        <div className='flex space-x-5'>
          <div className='flex items-center transition ease-in-out justify-center hover:-translate-y-1 cursor-pointer w-10 h-10 p-4 rounded-xl hover:bg-indigo-700 hover:text-white duration-500 delay-300'>
          <Link to={`/update/${id}`}>
          <CiEdit className='  text-2xl'/>
          </Link>
          </div>

          <div className='flex items-center transition ease-in-out justify-center hover:-translate-y-1 cursor-pointer w-10 h-10 py-4 rounded-xl hover:bg-gray-100 hover:text-red-500 duration-500 delay-300'>
          <CiTrash onClick={handleDelete} className='text-2xl '/>
          </div>
        </div>


         </div>
      
      



        
        {/* </Link> */}
        

    </div>
  )
}

export default Blog



