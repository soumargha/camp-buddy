/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/Footer'
import { FaGithub, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div
  className="landing-page"
  
>
  {/* hero section */}
  <section className="text-gray-600 body-font bg-lime-600 py-20 ">
    <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                className="text-3xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900  sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Welcome to Campus Buddy
            </h1>
            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-gray-200 font-semibold">
            Your Ultimate Marketplace for Renting, Selling, and Buying Goods and services inside the college campus .
            </p>
            <div className="flex justify-center">
                <Link  to="/register"
                    className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Get Started
                    
                </Link>
                <a href="#"
                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About us
                    </a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg" />
        </div>
    </div>
</section>

{/* jumbotron */}

<section className="py-12  bg-emerald-500 text-gray-100 sm:py-12 lg:py-16 ">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">We are just
                getting started!</h2>
            <p className="mb-4">We are creating a tool that helps you be more productive and efficient when building
                websites and webapps</p>

        </div>
        <div
            className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                strokeWidth="2" strokeLinecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                strokeWidth="2" strokeLinecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                        <p className="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a
                            project. See what othe editors are doing and edit even a simple text together</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" strokeWidth="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">History of Edits</h3>
                    <p className="mt-6 text-base text-gray-600">Go back and forth your history of changes and
                        restore your designs to any point in time</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                strokeWidth="2" strokeLinecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                strokeWidth="2" strokeLinecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Integrations</h3>
                        <p className="mt-6 text-base text-gray-600">Step up your designs and workflow with
                            integrations with your favourite tools such as mailchimp, slack, jira etc</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" strokeWidth="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publish webpage online</h3>
                    <p className="mt-6 text-base text-gray-600">Effortlessly publish your webpages online and make
                        it available to the world with a click of a button</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                strokeWidth="2" strokeLinecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                strokeWidth="2" strokeLinecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Forms and Data Collection
                        </h3>
                        <p className="mt-6 text-base text-gray-600">Collect data and information from users with
                            forms built on windframe and sort through them in a nice interface</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" strokeWidth="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Custom Domains</h3>
                    <p className="mt-6 text-base text-gray-600">Attach your own custom domain to your published
                        projects or website on windframe</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* about us */}


<div className="flex justify-center items-center h-screen bg-teal-600">
  <div className="w-1/2 shadow-3xl rounded-xl p-10 border bg-teal-400">
    <h2 className="text-3xl font-bold leading-tight text-gray-100 shadow-3xl sm:text-4xl xl:text-5xl mb-6">About me</h2>
    <div className="flex justify-around gap-11 items-center">
      <div>
        <img src="https://avatars.githubusercontent.com/u/110277485?v=4" alt="" className="rounded-2xl" />
      </div>
      <div>
        <h1 className="font-extrabold text-3xl">Hi, I am Soumargha</h1>
        <p className="font-semibold text-sm">I am a full stack developer and data analyst currently pursuing my studies at the National Institute of Technology, Agartala, with an anticipated graduation in 2025. In addition to my academic and professional pursuits, I have a passion for playing cricket and love dedicating time to composing unique and cool background music. Let's connect😊</p>
        
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-100" />
          </a>
          <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-gray-100" />
          </a>
          <a href="https://www.facebook.com/your-facebook-username" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-gray-100" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="w-6 h-6 text-gray-100" />
          </a>
        </div>

        <button href="" className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-500 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span className="ml-2">See my Resume</span>
        </button>
      </div>
    </div>
  </div>
</div>


{/* footer */}
<Footer/>

</div>

  )
}

export default LandingPage
