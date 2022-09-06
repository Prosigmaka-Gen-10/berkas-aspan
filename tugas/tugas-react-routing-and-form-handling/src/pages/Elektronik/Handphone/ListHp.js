import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ListHp() {

	return <>
		<h2>Daftar Merek Handphone:</h2>

		<ul>
			<li>
				Samsung
				<br />
				<Link to="/detail-produk/Samsung">
					Lihat SpesifikasiHP
				</Link>
			</li>
			<li>
				Iphone
				<br />
				<Link to="/detail-produk/Iphone">
					Lihat SpesifikasiHP
				</Link>
			</li>
			<li>
				Oppo
				<br />
				<Link to="/detail-produk/Oppo">
					Lihat SpesifikasiHP
				</Link>
			</li>
		</ul>
	</>
}
