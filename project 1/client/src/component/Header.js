import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class='div7'>
      <nav class="navbar">
        <Link class='link' to='/home'> Home </Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/document'> Documentaries </Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/login'> Login</Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/admin'> Admin </Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/about'> About </Link>&nbsp;&nbsp;&nbsp;
      </nav>
    </div>
  )
}

export default Header
