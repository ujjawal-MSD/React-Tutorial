const Properties = ({ products }) => {
    return (
        <>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>{product.id}</p>
                        <h1>{product.name}</h1>
                        <p>{product.category}</p>
                        <strong>{product.price}</strong> <br />
                        <button> {product.inStock === true ? "Buy Now" : "out of stock"}</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Properties;