import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTiktok, FaFacebook, FaXTwitter, FaInstagram, FaBars, FaCouch, FaXmark} from "react-icons/fa6";
import '../App.css'



const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {path:'/', link:'Home'},
        {path:'/about', link:'About'},
        {path:'/services', link:'Services'},
        {path:'/gallery', link:'Gallery'},
        {path:'/contact', link:'Contact'},
    ]


  return (
    <header className='text-stone-500 fixed top-0 left-0 right-0' style={{backgroundColor:'#f7f9f9', zIndex:'100'}}>
        

        <nav style={{ display:'flex', alignItems:'center', justifyContent:'space-between',}}
             className='py-6 px-4 max-w-7xl mx-auto'>

                <div className='flex'>
                    <a href="/"><FaCouch className='w-7 h-7 text-stone-500 hover:text-black'/></a>
                    <div className='lg:flex gap-4 items-center hidden ml-10'>
                        <a href="" className=' hover:text-black transition-all duration-700'><FaTiktok /></a>
                        <a href="" className=' hover:text-black transition-all duration-700'><FaXTwitter /></a>
                        <a href="" className=' hover:text-black transition-all duration-700'><FaFacebook /></a>
                        <a href="" className=' hover:text-black transition-all duration-700'><FaInstagram /></a>
                    </div>
                </div>

                

                <ul className='hidden gap-12 text-lg md:flex'>
                    {
                        navItems.map(({path, link}) => 
                        <li key={path}>
                            <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                        </li>)
                    }
                    </ul>

                <button className='lg:flex items-center px-4 py-1 bg-stone-500 text-white rounded-lg hover:bg-stone-300 hover:text-sky-800 transition-all duration-700 hidden'>
                    login
                </button>

                
                <button onClick={toggleMenu} className='cursor-pointer md:hidden'>
                    {
                        isMenuOpen ? <FaXmark className='w-7 h-7' /> : <FaBars className='w-5 h-5'/>
                    }
                </button>
                
        </nav>

                <div>
                    <ul style={{backgroundColor:'#f7f9f9'}} className={`md:hidden gap-12 text-lg space-y-8 px-4 py-6 text-stone-600 text-center 
                    ${isMenuOpen ? 'fixed top-70 w-full transition-all ease-out duration-150' : 'hidden'}`}>
                    {
                        navItems.map(({path, link}) => 
                        <li key={path} className='hover:text-black transition-all duration-700'>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                    </ul>
                </div>
        
       
    </header>
  )
}

export default NavBar