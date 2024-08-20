import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify'

const BlogPage = () => {

const [blogs, setBlogs] = useState('')
const {id} = useParams()
const [isPending, setIsPending] = useState(false)
const [toastShown, setToastShown] = useState(false);

const notify = () => {

  if (!toastShown) {
    toast("loading....", {
      style:{
        background:'black',
        color:'white'
      }
    });
    setToastShown(true); // Ensure the toast is only shown once
  }

  
  
};

// const notify = () => {
//   toast("loading...", {   
//     toastId: "blogAddedToast", // Unique identifier
//     style:{
//       background:'black',
//       color:'white'
//     }
//   });
// };

const singleBlog = async () => {


  

 


  try {
  
    
   
    const response = await fetch(`http://localhost:8000/blogs/${id}`)


    if(!response.ok){
      throw new Error('error fetching data')
    }
    const data = await response.json()
    setBlogs(data)
    
    setIsPending(false)
  } catch (error) {
    console.log('error', error);
  }

}

useEffect(() => {

   notify()
   setIsPending(true)

  setTimeout(() => {
    singleBlog()
  }, 4000);
   
}, [id ])


const {title, body, author} = blogs

  return (
  
   
      <main className='px-[100px]'>
      
        {/* {isPending && <div>loading...</div>} */}
 <div className='py-12'>

  <div className='mt-12 border p-20 bg-slate-100'>


<h1 className='text-3xl font-bold text-slate-600'>
testing testing testing
</h1>

{/* <p className='mt-4'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a labore animi quibusdam numquam reprehenderit, nam tempora provident totam, sint recusandae asperiores, ab repellendus delectus architecto harum laborum quas aspernatur similique quidem natus! Sequi quibusdam odio repellat facilis quos. Culpa itaque dicta distinctio amet, voluptates aspernatur reprehenderit error fuga, accusamus totam illo. Nam quae expedita blanditiis possimus quidem repellendus, quam optio qui aperiam! Vero, officia non aut optio porro dicta facere ipsam nulla dolores modi quo cumque iusto reprehenderit provident expedita ex nihil distinctio. Ipsa, molestiae quibusdam? Similique architecto explicabo beatae aliquid cumque eum ad praesentium eius inventore vel sunt tempora autem, dignissimos pariatur accusantium harum esse totam cum. Debitis reprehenderit consequatur nostrum? Nesciunt est enim iste nobis nemo tempore facere animi aliquid quam cum iure, dolorum id dignissimos at quas fugit ut amet aspernatur culpa dolor quia nisi laboriosam error quibusdam? Autem ea aspernatur voluptates illo odit quidem fugiat esse deserunt, dolorum quibusdam quisquam vero sequi suscipit cum aperiam voluptate! Magni expedita, officia blanditiis dolores tempora adipisci nam! Deserunt modi nihil ipsum vel explicabo fugiat nostrum quam earum, distinctio laborum iste soluta in blanditiis, corporis eos nesciunt! Nam culpa autem nisi alias deserunt nostrum, aliquid quis ut recusandae exercitationem.
</p> */}
<p className='mt-4'>
  Author:Stephen
</p>
  </div>
      <p>{title}</p>
     <p>{body}</p>
     <p>{author}</p>
     </div>
     <ToastContainer 
     />
      </main>

   
  )
}

export default BlogPage
