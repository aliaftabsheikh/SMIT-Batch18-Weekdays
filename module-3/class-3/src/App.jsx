import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {

  return (
    <div className="container">
      
          <ProductCard image="https://media.wired.com/photos/5926e2657034dc5f91becf03/3:2/w_2560%2Cc_limit/SpiderFerrariHP.jpg"
          alt="Product 1"

           title="Product 1"
            description="This is the description for Product 1." />
          
          <ProductCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS-rz_PJQ1K78aFdkFllVcFeI8_nUU9N8dIfyWRMkuw&s"
          alt="Product 2"
           title="Product 2"
            description="This is the description for Product 2." />



          <ProductCard image="https://media.wired.com/photos/5926e2657034dc5f91becf03/3:2/w_2560%2Cc_limit/SpiderFerrariHP.jpg"
          alt="Product 3"
           title="Product 3"
            description="This is the description for Product 3." />
      
    </div>
  )
}

export default App
