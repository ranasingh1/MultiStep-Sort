import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' w-[98vw] sticky top-0 bg-white mb-2 p-4 pl-16 flex justify-between items-center'> 
       <h1 className=' text-2xl font-bold '>Mart.com </h1>
     <Link to ="/">  <button className=' bg-black  text-white rounded-lg p-2 mr-10 '>Menu Page</button></Link>
     </div>   
  )
}

export default Header