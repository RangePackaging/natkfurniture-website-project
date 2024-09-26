import Link from 'antd/es/typography/Link';
import React from 'react'
import '../App.css'
import {FaUser} from 'react-icons/fa6'


const GalleryCards = ({gallery, currentPage, selectedCategory, pageSize}) => {
  const filterGallery = gallery.filter((galleryItem) => !selectedCategory || galleryItem.category === selectedCategory)
  .slice((currentPage-1) * pageSize,currentPage * pageSize);
  
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols grid-cols-1 gap-8'>
        {
          filterGallery.map((galleryItem => 
          <Link to={`/gallery/${galleryItem.id}`} key={galleryItem.id} className='p-5 shadow-md'>
            
            <div>
              <img src={galleryItem.image} alt="" className='w-full' />
            </div>
            <h3 className='mt-4 font-bold hover:text-stone-600 cursor-pointer'>
              {galleryItem.title}
            </h3>
            <p className='mb-2 text-sm text-gray-500'><FaUser className='inline-flex items-center mr-2' />{galleryItem.author}</p>
            <p className='text-sm text-gray-500'>Published: {galleryItem.published_date}</p>
            
          </Link>))
        }
    </div>
  )
}

export default GalleryCards