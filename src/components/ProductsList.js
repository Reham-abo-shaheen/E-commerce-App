import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProduct = () => {
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }
    const filter = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then((data) => setProducts(data));

    }
    useEffect(() => {
        getProduct();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center p-3">Our Product</h2>
            <div className="container">
                <button className="btn btn-info" key={products} onClick={() => { getProduct(); }}>All</button>

                {categories.map((cat) => {
                    return (
                        <button className="btn btn-info" key={cat} onClick={() => { filter(cat) }}>{cat}</button>
                    )
                })}
                <div className="row">

                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} showButton={true} showDes={false} />
                            </div>
                        )

                    })}


                </div>

            </div>
        </>
    )
}

export default ProductsList;