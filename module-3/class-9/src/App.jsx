import { ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import './App.css'
import Product from './components/Product/Product'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartItemCount = cartItems.reduce((totalItems, item) => totalItems + item.quantity, 0)
  const cartSubtotal = cartItems.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0)

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

 

  // if(!isLoggedIn){
  //   return <Login setIsLoggedIn={setIsLoggedIn}/>
  // }else{
  //   return <Home setIsLoggedIn={setIsLoggedIn}/>
  // }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-brand" href="#catalog" aria-label="Morrow catalog">
            <span className="site-brand__mark" aria-hidden="true">M</span>
            <span>Morrow</span>
          </a>

          <div className="site-header__actions">
            <nav className="site-header__nav" aria-label="Primary navigation">
              <a href="#catalog">Catalog</a>
            </nav>
            <button
              className="site-header__cart"
              type="button"
              onClick={() => setIsCartOpen((isOpen) => !isOpen)}
              aria-label={`Shopping bag with ${cartItemCount} ${cartItemCount === 1 ? 'item' : 'items'}`}
              aria-expanded={isCartOpen}
              aria-controls="cart-summary"
            >
              <ShoppingBag aria-hidden="true" size={19} />
              <span className="site-header__cart-label">Bag</span>
              <span className="site-header__cart-count" aria-hidden="true">{cartItemCount}</span>
            </button>

            {isCartOpen && (
              <aside className="cart-popover" id="cart-summary" aria-label="Shopping bag">
                <div className="cart-popover__heading">
                  <h2>Your bag</h2>
                  <button
                    className="cart-popover__close"
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    aria-label="Close shopping bag"
                    title="Close bag"
                  >
                    <X aria-hidden="true" size={18} />
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <p className="cart-popover__empty">Your selected pieces will appear here.</p>
                ) : (
                  <>
                    <ul className="cart-popover__items">
                      {cartItems.map((item) => (
                        <li className="cart-popover__item" key={item.id}>
                          <img src={item.image} alt="" />
                          <div>
                            <p>{item.title}</p>
                            <span>{currencyFormatter.format(item.price)} x {item.quantity}</span>
                          </div>
                          <button
                            className="cart-popover__remove"
                            type="button"
                            onClick={() => handleRemoveFromCart(item.id)}
                            aria-label={`Remove ${item.title} from bag`}
                            title="Remove from bag"
                          >
                            <X aria-hidden="true" size={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="cart-popover__total">
                      <span>Subtotal</span>
                      <strong>{currencyFormatter.format(cartSubtotal)}</strong>
                    </div>
                  </>
                )}

                <button className="cart-popover__continue" type="button" onClick={() => setIsCartOpen(false)}>
                  Continue shopping
                </button>
              </aside>
            )}
          </div>
        </div>
      </header>
{/* {
  isNavbarShown && (
  <div className="navbar">
        <h2>My App</h2>
        <div className="nav_links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>


      </div>
  )
}
 */}

     

      {/* {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/>} */}
      {/* <Login setIsLoggedIn={setIsLoggedIn}/> */}



      {/* <Home setIsLoggedIn={setIsLoggedIn}/> */}

{/* 
      <button style={
        {margin: '20px', padding: '10px', fontSize: '1.2rem'}
      } onClick={() => 
      // setIsNavbarShown(isNavbarShown ? false : true)
      setIsNavbarShown(!isNavbarShown)
    
    }
      
      >Toggele Navbar</button> */}
        {/* {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/>} */}
      <Product onAddToCart={handleAddToCart} />
    </div>
  )
}

export default App