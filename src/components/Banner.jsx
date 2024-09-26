import React from 'react'
import '../App.css'
import '../styles/HomeBanner.css'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='px-4 py-20 mx-auto'>
        <div className='mb-10'>
            <Link to={'/'} style={{letterSpacing: '-0.12em',}} className='text-stone-500 text-5xl lg:text-7xl hover:text-black transition-all duration-700 lg:py-4 lg:mx-20 leading-snug font-extrabold'>natK<span className='font-light text-2xl lg:px-1'>&#174;</span></Link>
            
        </div>

        <section className="gallery">
            <div>
              <article>
                <a style={{cursor:'pointer'}} href=""><img style={{position:'relative'}} src="/images/bedNatk2.jpg" alt=""/></a>
              </article>
              <article>
                <a style={{cursor:'pointer'}} href=""><img src="/images/dividerNatk2.jpg" alt=""/></a>
              </article>
              <article>
                <a style={{cursor:'pointer'}} href=""><img src="/images/sofaNatk2.jpg" alt=""/></a>
              </article>
            </div>

            <div>
              <article>
                <a style={{cursor:'pointer'}} href=""><img src="/images/bedNatk1.jpg" alt=""/></a>
              </article>
              <article>
                <img src="/images/kitchenNatk2.jpg" alt=""/>
              </article>
              <article>
                <img src="/images/sofaNatk2.jpg" alt=""/>
              </article>
            </div>

            <div>
              <article>
                <img src="/images/dividerNatk1.jpg" alt=""/>
              </article>
              <article>
                <img src="/images/kitchenNatk1.jpg" alt=""/>
              </article>
              <article>
                <img src="/images/sofaNatk1.jpg" alt=""/>
              </article>
            </div>
      
    </section>


    </div>
  )
}

export default Banner