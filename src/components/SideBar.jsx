import React, { useEffect, useState } from 'react'
import { FaBookOpenReader, } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/blogs').then(res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))
  }, [])

  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold px-4'>Trends</h3>
        <div>
          {
            popularBlogs.slice(0,5).map(blog => 
            <div key={blog.id} className='my-5 border-b-2 border-spacing-1 px-4'>
              <h4 className='font-medium mb-1'>{blog.title}</h4>
              <Link to='/' className='text-base pb-2 hover:text-stone-600 inline-flex
              items-center py-1 text-sky-800'>Read more<FaBookOpenReader className='m-1 ml-2' />
              </Link>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar