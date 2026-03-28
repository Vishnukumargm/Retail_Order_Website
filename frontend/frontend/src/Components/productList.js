import React, { useEffect, useState } from "react";
import API from "../api";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.get("/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const addToCart = (productId) => {
        API.post(`/cart/add?userId=1&productId=${productId}&quantity=1`)
            .then(() => alert("Added to cart"))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Products</h2>
            {products.map(p => (
                <div key={p.id}>
                    <h4>{p.name}</h4>
                    <p>Price: ₹{p.price}</p>
                    <p>Stock: {p.stock}</p>
                    <button onClick={() => addToCart(p.id)}>
                        Add to Cart
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ProductList;