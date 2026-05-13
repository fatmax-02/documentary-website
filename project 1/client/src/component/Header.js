import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class='div7'>
      <nav class="navbar">
        <Link class='link' to='/home'> Home </Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/document'> Documentaries </Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/login'> Login</Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/register'> Register </Link>
        <Link class='link' to='/admin'> Admin </Link>&nbsp;&nbsp;&nbsp;
        <Link class='link' to='/about'> About </Link>&nbsp;&nbsp;&nbsp;
      </nav>
      
      {/* Search Bar in Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        <input type="text" placeholder="Search..." style={{ padding: '8px', width: '250px', borderRadius: '20px', border: '1px solid #ccc' }} />
        <button style={{ padding: '8px 20px', backgroundColor: '#d32a46', color: 'white', border: 'none', borderRadius: '20px' }}>Search</button>
      </div>
    </div>
  )
}

export default Header
