/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'

const Homepage = () => {
  return (
    <div>

{/* Navbar */}
<header
    className=" inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
                    <p className="sr-only">Website Title</p>
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
                    href="/youritems">Your Items</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
                    href="/cart">Cart</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
                    href="/profile">Profile</a>
            </div>
            <div className="flex items-center justify-end gap-3">
               
                <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/login">Logout</a>
                <a className="inline-flex items-center justify-center rounded-xl bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="#">Upload</a>
            </div>
        </div>
    </div>
</header>

{/* Main content */}
<div className=" flex flex-col items-center justify-center min-h-screen space-y-8">
  <h1 className="mt-[-10rem] mb-80 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6 text-center">
    <span>
      See what is 
      <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
        available near you
      </span>
    </span>
  </h1>
</div>



<Searchbar/>


    </div>
  )
}

export default Homepage
