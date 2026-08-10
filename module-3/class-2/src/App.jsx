import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
    const productsData = [
      {
        name: "Product 1",
        description: "This is Product 1."
      },
      {
        name: "Product 2",
        description: "This is Product 2."
      },
      {
        name: "Product 3",
        description: "This is Product 3."
      },
      {
        name: "Product 4",
        description: "This is Product 4."
      },
      {
        name: "Product 5",
        description: "This is Product 5."
      }
    ]

  return (
    <div className="container">

        {/* <ProductCard name="Product 1" description="This is Product 1." />
        <ProductCard name="Product 2" description="This is Product 2." />
        <ProductCard name="Product 3" description="This is Product 3." /> */}

        {
          productsData.map((product, index) => {
            return <ProductCard key={index} name={product.name} description={product.description} />
          })
        }
      

    </div>
  )
}

export default App


// HOME WORK : PROPS, USESTATE