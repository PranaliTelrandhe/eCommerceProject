import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../App';
import "./WomenGallery.css";

const WomenCard = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    // Calculate the discounted price
    const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);

    return (
        <div className="card women-card position-relative shadow-sm border-0">
            {/* Product Image */}
            <div className="position-relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                {/* Hover Overlay */}
                <div className="hover-overlay d-flex flex-column justify-content-center align-items-center">
                    <button
                        className="btn btn-primary mt-2 w-100"
                        onClick={() => {
                            addToCart(product);
                            alert(`${product.name} added to cart!`);
                        }}
                    >
                        Add to Cart
                    </button> &nbsp;
                    <Link to={`/women/detail/${product.id}`} className="btn btn-outline-light btn-sm mp-10 mr-2 ">
                        View Details
                    </Link>
                </div>
            </div>
            {/* Product Details */}
            <div className="card-body text-center">
                <h6 className="text-truncate btn btn-primary text-center">{product.brand}</h6>
                <p className="text-muted mb-1">
                    <span className="text-danger fw-bold">
                        &#8377;{discountedPrice} {/* Discounted Price */}
                    </span>
                    &nbsp;
                    <span className="text-decoration-line-through text-secondary">
                        &#8377;{product.price.toFixed(2)} {/* Original Price */}
                    </span>
                </p>
                <small className="text-success">Save {product.discount}%</small>
            </div>
        </div>
    );
};

export default WomenCard;
