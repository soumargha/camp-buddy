/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'

const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>

   <div className="h-screen w-screen bg-gradient-to-l from-gray-200 via-gray-400 to-stone-100">

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
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <h1 className="mt-[-24rem] text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6 text-center">
          <span>
            Search for your
            <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
              needs
            </span>
          </span>
        </h1>
        
        {/* Search bar */}
        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
          </div>
          <div className="relative inline-block text-left">
            <div>
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}>
                All categories
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">Relevance</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">Price - High to Low</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">Price - Low to High</a>
                </div>
              </div>
            )}
          </div>
          <div className="bg-yellow-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer">
            <span>Search</span>
          </div>
        </div>

       
        

      </div>
       {/* products */}
      
    </div>
    </div>
  )
}

export default Homepage
