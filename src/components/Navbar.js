import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Raw Material</Link>
        <ul className="right">
          <li><NavLink exact to="/">Daftar Barang</NavLink></li>
          <li><NavLink to='/batchticket'>Batch Ticket</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar