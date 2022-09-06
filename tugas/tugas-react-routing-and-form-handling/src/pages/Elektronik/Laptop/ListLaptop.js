import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ListLaptop() {

    return <>
        <h2>Daftar Merek Laptop:</h2>

        <ul>
            <li>
                Mac
                <br />
                <Link to="list-laptop/detail-produk/Mac">
                    Lihat Spesifikasi Laptop
                </Link>
            </li>
            <li>
                Asus
                <br />
                <Link to="list-laptop/detail-produk/Asus">
                    Lihat Spesifikasi Laptop
                </Link>
            </li>
            <li>
                Lenovo
                <br />
                <Link to="list-laptop/detail-produk/Lenovo">
                    Lihat Spesifikasi Laptop
                </Link>
            </li>
            
        </ul>
    </>
}
