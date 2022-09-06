import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Elektronik() {
  return <>

    <h1>Ini Halaman Elektronik</h1>
    <Link to="/">
      Kembali ke halaman home
    </Link>
    
    <hr />

    <nav>
        <Link to='/elektronik/handphone'>
          Menuju Halaman HP
        </Link>
        <span> | </span>
        <Link to='/elektronik/laptop'>
          Menuju Halaman laptop
        </Link>
    </nav>
      
      <Outlet />
    
  </>
}
