import React from 'react'
import {FaHeart} from 'react-icons/fa'
function Footer() {
    const year = new Date().getFullYear
  return (
    <footer className='bg-white footer pa3 '>
      Random Robots &copy; {year} | Made with <FaHeart color='red'/>  by WTF 2022/2023
    </footer>
  )
}

export default Footer
