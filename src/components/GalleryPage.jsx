import React, { useEffect, useState } from 'react'
import GalleryCards from './GalleryCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import SideBar from './SideBar'


const GalleryPage = () => {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12
    const [selectedCategory, setselectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null) 

    useEffect(() => {
        async function fetchMyAPI() {
            let url = `http://localhost:3000/blogs?page=${currentPage}&limit={pageSize}`;
//filter by category
            if (selectedCategory) {
              url += `&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchMyAPI()

    } ,[currentPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      }
    
      const handleCategoryChange = (category) => {
        setselectedCategory(category);
        setCurrentPage(1)
        setActiveCategory(category)
      }



  return (
    <div>
{/* Category Section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} 
        selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>


{/* Gallery Cards Component */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <GalleryCards gallery={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} /> 

      {/* SideBar Component */}
      <div>
          <SideBar />
      </div>


      </div>





      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} gallery={blogs} pageSize={pageSize} />
      </div>


    </div>
  )
}

export default GalleryPage


// import React, { useEffect, useState } from 'react'

// const GalleryPage = () => {

//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         async function fetchBlogs() {
//             let url = `http://localhost:5000/gallery`;

//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data);
//             setBlogs(data);
//         } 

//         fetchBlogs()
//     })
    
//   return (
//     <div>GalleryPage</div>
//   )
// }

// export default GalleryPage