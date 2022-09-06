import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ListLaptop() {

  return  <>
		<h2>Daftar Merek Laptop:</h2>

		<ul>
			<li>
				Mac |
				<Link to="list-laptop/detail-produk/Mac">Lihat Detail</Link>
			</li>
			<li>
				Asus |
				<Link to="list-laptop/detail-produk/Asus">Lihat Detail</Link>
			</li>
			<li>
				Lenovo |
				<Link to="list-laptop/detail-produk/Lenovo">Lihat Detail</Link>
			</li>
		</ul>
	</>
}
