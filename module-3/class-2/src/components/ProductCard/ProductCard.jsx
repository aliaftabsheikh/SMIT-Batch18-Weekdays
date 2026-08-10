import "./ProductCard.css"


const ProductCard = (props) => {
  return (
      <div className="card">
        <h1>{props.name}</h1>
        <p>{props.description}</p>

        <button className="btn">Buy Now</button>
      </div>
  )
}

export default ProductCard