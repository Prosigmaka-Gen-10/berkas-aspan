import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function Laptop() {
  return <>
    <p>Ini Daftar merek Laptop</p>
    <Link to='/elektronik/laptop/list-laptop'>List Laptop</Link>
    <br />
    <Link to="/elektronik">Tutup List Laptop</Link>
    <Outlet />


  </>
}
