const Product = ({ product, onDelete}) => {
    return(
        <div>
            <h3>
                {product.name}
                <button onClick={() => onDelete(product.id)}></button>
            </h3>
            <p>{product.price}</p>
        </div>
    )
}

export default Product;