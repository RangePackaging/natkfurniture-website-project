import React from 'react'
import GalleryPage from '../components/GalleryPage'
const Gallery = () => {
  return (

     <div>

      <div className='py-32 text-stone-500 text-center px-4'>
          <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Welcome to our GALLERY!</h2>
      </div>

      <div className='max-w-7xl mx-auto'>
          <GalleryPage />
      </div>
      

     </div>
  )
}

export default Gallery