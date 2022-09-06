import { useState } from "react"
import { Routes, Route, Link, } from 'react-router-dom'


export default function FormHandling() {
	const [nama, setNama] = useState()
	const [hari, setHari] = useState('selasa')
	const [jenis, setJenis] = useState('l')
	const [harga, setHarga] = useState()

	function handleInputNama(event) {
		setNama(event.target.value)
	}
	function handleInputHarga(event) {
		setHarga(event.target.value)
	}

	function handleSubmit() {
		const payload = {
			namaSaya: nama,
			hariIni: hari,
			jenis: jenis,
			harga: harga,
		}

		console.log(payload)
	}

	return <>
		<label>
			Nama Barang: <br />
			<input type="text" onChange={handleInputNama} value={nama} />
		</label>

		<br />
		<br />

		<label>
			Hari: <br />
			<select onChange={event => setHari(event.target.value)} value={hari}>
				<option value="senin">Senin</option>
				<option value="selasa">Selasa</option>
				<option value="rabu">Rabu</option>
				<option value="kamis">Kamis</option>
				<option value="jumat">Jumat</option>
			</select>
		</label>

		<br />
		<br />


		Jenis Barang: <br />
		<label>
			<input
				type="radio"
				value="l"
				name="jenis"
				onChange={event => setJenis(event.target.value)}
				checked={jenis === 'l' ? true : false} />
			Laptop
		</label>
		&nbsp;&nbsp;
		<label>
			<input
				type="radio"
				value="h"
				name="jenis"
				onChange={event => setJenis(event.target.value)}
				checked={jenis === 'h' ? true : false} />
			Handphone
		</label>
		<br />
		<br />
		{/* <label> */}
			Harga Barang : Rp.
			<input type="number" onChange={handleInputHarga} value={harga} />
		{/* </label> */}

		<br />
		<br />

		<button onClick={handleSubmit}>
			submit
		</button>
		<br />
		<br />
		<p>Jika Sudah Memasukan Data Barang Silakan Kembali</p>
		<br />
		<button>
			<Link to="/">
				Sudah memasukan data
			</Link>

		</button>
	</>

}