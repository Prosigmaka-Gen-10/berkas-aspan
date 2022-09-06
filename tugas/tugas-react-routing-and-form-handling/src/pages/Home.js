import React, { Component } from 'react'
import { Routes, Route, Link, Ou } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return <>

			<p>Silahkan Pilih</p>
			<ul>
				<li>
					<Link to="/elektronik">
						Menuju Halaman Elektronik
					</Link>
				</li>
				<li>
					<Link to="/form-handling">
						Masukan data Barang
					</Link>
				</li>
				
			</ul>



		</>
	}
}
