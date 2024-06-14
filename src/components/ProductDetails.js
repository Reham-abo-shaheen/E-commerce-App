import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";

    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, []);
    return (
        <>
            <Product product={product} showButton={false} showDes={true} />
            <p className="price">Price: {product.price} $</p>
        </>
    )
}

export default ProductDetails;