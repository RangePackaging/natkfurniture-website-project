import React from 'react'
import { useLoaderData } from 'react-router'

const SingleGalleryPage = () => {

    const data = useLoaderData();
        const {title, image, category, author, publish_date, reading_time, content} = data[0];
  
  
    return (
    <div className='py-40 text-center px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
            Single Blog Page
        </h2>

        <div className=' max-w-7xl mx-auto my-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 cursor-pointer'></h2>

            </div>

        </div>
    </div>
  )
}

export default SingleGalleryPage