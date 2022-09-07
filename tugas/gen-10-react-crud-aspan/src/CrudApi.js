import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";


export default function CrudApi() {
    const formDocument = {
        name: '',
        price: '',
        expired: '',
    }

    const [products, setProducts] = useState([])
    const [formInput, setFormInput] = useState({ ...formDocument })

    async function getAllProduct() {
        try {

            const response = await axios.get('http://localhost:3004/products')
            setProducts(response.data)

        } catch (error) {
            console.log(error)
        } finally {
            alert('Sorry, there was a problem on the server')
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formInput.id) {
            updateProduct()
        }
        else {
            createProduct()
        }

        setFormInput({ ...formDocument })
    }

    function createProduct() {

        axios
            .post('http://localhost:3004/products'
                , formInput)
            .then(() => {
                getAllProduct()
            })
            .catch(error => {
                console.log(error)
                alert('Sorry, the server has a issue for processing data')

            })
            .finally(() => {

            })
    }

    function updateProduct() {
        axios
            .put('http://localhost:3004/products'
                + formInput.id, formInput)
            .then(() => {
                getAllProduct()
            })
            .catch(error => {
                console.log(error)
                alert('sorry, you cannot process this website')
            })
            .finally(() => {

            })
    }

    function deleteProduct(productId) {
        axios
            .delete('http://localhost:3004/products'
                + productId)
            .then(() => {
                getAllProduct()
            })
            .catch(error => {
                console.log(error)
                alert('sorry, theres a problem issue')
            })
            .finally(() => {

            })
    }

    function handleInput(event, propName) {
        const currentFormInput = { ...formInput }
        currentFormInput[propName] = event.target.value
        setFormInput(currentFormInput)
    }
    function prepareUpdate(product) {
        setFormInput({ ...product })
    }

    useEffect(() => {
        getAllProduct()
    }, [])


    return <>
        <form onSubmit={event => handleSubmit(event)}>
            <h2>Form Product</h2>

            <label>
                Name Product :
                <input
                    type="text"
                    value={formInput.name}
                    onChange={event => handleInput(event, 'name')} />
            </label>
            <br />
            <label>
                Product price:
                <input
                    type="number"
                    value={formInput.price}
                    onChange={event => handleInput(event, 'price')} />
            </label>

            <br /><br />

            <button>Submit</button>
        </form>

        <h2>Product List :</h2>
        <ul>
            {products.map(product =>
                <li key={product.id}>
                    {product.name} | Rp. {product.price}

                    &nbsp;&nbsp;
                    <button onClick={() => prepareUpdate(product)}>
                        Update
                    </button>

                    &nbsp;&nbsp;
                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>

                </li>)}
        </ul>

    </>
}

