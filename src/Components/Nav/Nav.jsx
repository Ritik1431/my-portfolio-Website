import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdOutlineAddIcCall} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#services"><MdMiscellaneousServices/></a>
        <a href="#contact"><MdOutlineAddIcCall/></a>
      </nav>
    </div>
  )
}

export default Nav
