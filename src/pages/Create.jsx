import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const notify = () => toast("blog added");

 

  const handleSubmit = async (e) => {
    e.preventDefault()
  if(!title|| !body || !author){
    setError('Please Enter Your Blog Details')
    return
  }

  try {
    const blogs = {
      title,
      body,
      author
    }


   const response = await fetch('http://localhost:8000/blogs', {
    method:"POST",
    headers:{"content-type": "application/json"},
    body:JSON.stringify(blogs)

   })
    

      if(!response.ok){
        throw new Error("Failed to fetch")
      }

      // alert('blog added successfully')
      notify()


      setTimeout(() => {
        navigate('/')
      }, 1000);
      


     } catch (error) {
       console.log('error:', error);
     }
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="max-w-[600px] w-full rounded-lg  shadow-lg p-10">
            {error && <div className="text-red-500">{error}</div>}
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
          <button
            className="px-6 mt-5 bg-indigo-900 rounded-md text-[#fff] mx-auto block py-3 "
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Create;
