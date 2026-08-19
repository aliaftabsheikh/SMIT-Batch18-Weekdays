import React, {useState, useEffect} from 'react'
import ProductCard from './components/ProductCard/ProductCard'

import Counter from './components/Counter/Counter'

import './App.css'
const App = () => {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    return products;
  }

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
  
              <div className="catalog__grid">
                {products.map((product) => (
              <ProductCard key={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} rating={product.rating.rate} reviews={product.rating.count} />
                ))}
              </div>
  )
}

export default App