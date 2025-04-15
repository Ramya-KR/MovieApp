import React from 'react'
import logo from "../assets/movieIcon.jpg";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={logo} alt='Movie Icon' className='w-[70px]'/>
        <Link className='text-yellow-800 text-xl font-bold' to='/'>Movies</Link>
        <Link className='text-yellow-800 text-xl font-bold' to='/watchlist'>WatchList</Link>
    </div>
  )
}

export default Navbar

