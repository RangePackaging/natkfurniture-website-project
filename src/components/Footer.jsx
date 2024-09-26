import React from 'react'
import { FaTiktok, FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6'

const Footer = () => {

  return (
    <div style={{backgroundColor:'#f7f9f9'}}>
        <div className='px-4 pt-16 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 lg:grid-cols-6 pb-8'>
                    {/* category 1 */}
                        <div>
                            <p className='font-medium tracking-wide text-black'>Category</p>
                            <ul className=''>
                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>News</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>World</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Games</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Reference</a>
                                </li>


                            </ul>
                        </div>

                    {/* category 2 */}
                        <div>
                            <p className='font-medium tracking-wide text-black'>Apples</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Web</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>eCommerce</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Business</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Entertainment</a>
                                </li>


                            </ul>
                        </div>

                    {/* category 3 */}
                        <div>
                            <p className='font-medium tracking-wide text-black'>Cherry</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Media</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Brochure</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Non-Profit</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Projects</a>
                                </li>


                            </ul>
                        </div>

                    {/* Category 4 */}
                        <div>
                            <p className='font-medium tracking-wide text-black'>Business</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Infopreneur</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Personal</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Wiki</a>
                                </li>

                                <li>
                                    <a href="/" className='text-stone-600 transition-colors duration-300 hover:text-black hover:underline underline-offset-2'>Forum</a>
                                </li>


                            </ul>
                        </div>

                    {/* Subscription */}
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                            <p className='font-medium tracking-wide text-black'>Subscription for updates</p>
                            <form className="mt-4 flex flex-col md:flex-row">
                                <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition 
                                duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 
                                focus:outline-none focus:shadow-out' />
                                
                                <button type='submit' className='inline-flex items-center justify-center h-12 px-6
                                font-medium -tracking-wide text-black transition duration-200 rounded shadow-md
                                hover:bg-stone-600 hover:text-white focus:outline-none border'>
                                    subscribe
                                </button>
                            </form>
                            <p className='mt-4 text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim omnis laudantium placeat recusandae molestias molestiae harum cum sed iste.
                            </p>
                                
                        </div>

                    </div>
                </div>

                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                    <p className='text-sm'><small>&copy;</small>CopyRight 2024 | all rights reserved.</p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-stone-600'>
                            <FaInstagram className='h-5 w-5' />
                        </a>

                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-stone-600'>
                            <FaXTwitter className='h-5 w-5' />
                        </a>

                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-stone-600'>
                            <FaFacebook className='h-5 w-5' />
                        </a>

                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-stone-600'>
                            <FaTiktok className='h-5 w-5' />
                        </a>
                        

                    </div>
                </div>
        </div>


    </div>
  )
}

export default Footer