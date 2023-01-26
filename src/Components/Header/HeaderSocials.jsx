import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="https://github.com" target="blank"><AiFillGithub/></a>
      <a href="https://twitter.com" target="blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials
