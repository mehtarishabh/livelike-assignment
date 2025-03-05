import './ProductCard.scss';


function ProductCard({ product }) {
  return (
    <div className='ProductCard'>
      <h5>{product.title}</h5>
      <div className='ProductCard-flex'>
        <img src={product.image} className='ProductCard-image'/>
        <div>
          {product?.discount > 0 && <div style={{ color: "red"}}>{product.discount} % off</div>}
          <div>Price: {product?.price} $</div>
          <div>Rating: {product?.rating?.rate}</div>
          <div>Count: {product?.rating?.count}</div>
        </div>
      </div>
      <div className='ProductCard-descText'>Description</div>
      <div className='ProductCard-desc'>{product.description}</div>
    </div>
  )
}

export default ProductCard