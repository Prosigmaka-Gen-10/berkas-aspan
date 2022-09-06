import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Handphone() {

  return <>
    <p>Ini Daftar merek HP</p>
    <Link to='/elektronik/handphone/list-hp'>List Hp</Link>
    <br />
    <Link to="/elektronik">Tutup List HP</Link>
    <Outlet/>


  </>
}
