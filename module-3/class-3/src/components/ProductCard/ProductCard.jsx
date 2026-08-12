import "./ProductCard.css"
const ProductCard = ({ image, alt, title, description }) => {
   

  return (
   <div className="card">
        <img className="card-img" src={image} alt={alt} />

        <h1 className="card-title">{title}</h1>
        <p className="card-description">{   description}</p>
        <button className="btn">Buy Now</button>
      </div>
  )
}

export default ProductCard