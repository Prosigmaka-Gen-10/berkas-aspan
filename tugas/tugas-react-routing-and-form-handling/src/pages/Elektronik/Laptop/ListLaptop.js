import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ListLaptop() {

  return  <>
		<h2>Daftar Produk:</h2>

		<ul>
			<li>
				Mac |
				<Link to="/detail-produk/Samsung">Lihat Detail</Link>
			</li>
			<li>
				Asus |
				<Link to="/detail-produk/Iphone">Lihat Detail</Link>
			</li>
			<li>
				Lenovo |
				<Link to="/detail-produk/Oppo">Lihat Detail</Link>
			</li>
		</ul>
	</>
}
