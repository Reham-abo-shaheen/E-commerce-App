import './Product.css'
import { Link } from 'react-router-dom';


function Product(props) {

    const { product, showButton, showDes } = props;

    return (
        <>
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    {showDes && <p className="card-text">{product.description}</p>}
                    {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>}
                </div>
            </div>
        </>
    );
}

export default Product;