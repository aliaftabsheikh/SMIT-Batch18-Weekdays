import React, {useState, useEffect} from 'react'

const Products = () => {

const [products, setProducts] = useState([]);

async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

useEffect(() => {

    fetchData().then((data) => {
        setProducts(data);
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })

   
}, []);
  return (
    <div>
        {
            products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products