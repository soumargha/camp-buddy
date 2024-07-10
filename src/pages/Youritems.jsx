/* eslint-disable no-unused-vars */
import React from 'react'
import Table from '../components/Table'

const Youritems = () => {
  return (
    <>
    <div className="flex justify-center mt-4">
      <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 text-center dark:text-black">
        Items you have bought
      </h1>


    </div><Table />
    <div className="flex justify-center mt-4">
      <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 text-center dark:text-black">
        Items you have Listed
      </h1>


    </div>
    <Table />
    </>
  )
}

export default Youritems
