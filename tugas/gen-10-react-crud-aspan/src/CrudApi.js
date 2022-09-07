import axios from "axios"
import { useEffect, useState } from "react"

import Spinner from './Spinner'

export default function CrudApi () {
	const originalForm = {
		name: '',
		price: '',
        toko: '',
	}

	const [products, setProducts] = useState([])
	const [formInput, setFormInput] = useState({...originalForm})
	const [isLoading, setIsLoading] = useState(true)

	async function getAllProduct () {
		try {
			setIsLoading(true)
			const response = await axios.get('http://localhost:3004/products')

			console.log(response.data)
			setProducts(response.data)

		} catch (err) {
            console.log(err)
            alert('Problem in [getAllProduct]')
		} finally {
			setIsLoading(false)
            // alert('please Wait [getAllProduct]')

		}
	}

	function handleSubmit (event) {
		event.preventDefault()

		if (formInput.id) { // kalau ada id nya pasti mengupdate
			updateProduct()
		}
		else {
			createProduct()
		}

		setFormInput({...originalForm})
	}

	function createProduct () {
		setIsLoading(true)
		axios
			.post('http://localhost:3004/products', formInput)
			.then(() => {
				getAllProduct()
			})
			.catch(err => {
				console.log(err)
                alert('Problem in [createProduct]')
			})
			.finally(() => {
				setIsLoading(false)
                // alert('Please Wait [createProduct]')
			})
	}

	function updateProduct () {
		setIsLoading(true)
		axios
			.put('http://localhost:3004/products/' + formInput.id, formInput)
			.then(() => {
				getAllProduct()
			})
			.catch(err => {
				console.log(err)
				alert('Problem in [updateProduct]')
			})
			.finally(() => {
				setIsLoading(false)
                // alert('Please Wait [updateProduct]')
                
			})
	}

	function deleteProduct (productId) {
		setIsLoading(true)
		axios
			.delete('http://localhost:3004/products/' + productId)
			.then(() => {
				getAllProduct()
			})
			.catch(err => {
				console.log(err)
				alert('Problem in [deleteProduct]')
			})
			.finally(() => {
				setIsLoading(false)
                // alert('Please Wait [deleteProduct]')
			})
	}

	function handleInput (event, propName) {
		const currentFormInput = {...formInput}
		currentFormInput[propName] = event.target.value
		setFormInput(currentFormInput)
	}

	function prepareUpdate (product) {
		setFormInput({...product})
	}

	useEffect(() => {
		getAllProduct()
	}, [])

	if (isLoading) return <Spinner />

	return <>
		<form onSubmit={event => handleSubmit(event)}>
			<h2>Form Product:</h2>

            <label>
				Store name:
				<input
					type="text"
					value={formInput.toko}
					onChange={event => handleInput(event, 'toko')} />
			</label>

			<br /><br />

			<label>
				Product name:
				<input
					type="text"
					value={formInput.name}
					onChange={event => handleInput(event, 'name')} />
			</label>

			<br /><br />

			<label>
				Product Price:
				<input
					type="number"
					value={formInput.price}
					onChange={event => handleInput(event, 'price')} />
			</label>

			<br /><br />

			<button>
				Submit
			</button>
		</form>

		<br /><hr /><br />

		<h2>Product List:</h2>
		<ul>
			{products.map(product =>
				<li key={product.id}>
					{product.toko} = {product.name} | Rp. {product.price}

					&nbsp;&nbsp;
					<button onClick={() => prepareUpdate(product)}>
						Update
					</button>

					&nbsp;&nbsp;
					<button onClick={() => deleteProduct(product.id)}>
						Delete
					</button>
				</li>
			)}
		</ul>
	</>
}