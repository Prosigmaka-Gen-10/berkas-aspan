import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ListHp() {

  return  <>
		<h2>Daftar Produk:</h2>

		<ul>
			<li>
				Samsung |
				<Link to="/detail-produk/Samsung">Lihat Detail</Link>
			</li>
			<li>
				Iphone |
				<Link to="/detail-produk/Iphone">Lihat Detail</Link>
			</li>
			<li>
				Oppo |
				<Link to="/detail-produk/Oppo">Lihat Detail</Link>
			</li>
		</ul>
	</>
}
