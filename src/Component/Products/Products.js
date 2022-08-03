import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ProductsDetails from '../ProductsDetails/ProductsDetails';
const Products = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='text-center container'>
            <h1>this is products</h1>
            <Row xs={1} md={3} lg={4} className="g-4 ">
            {
                products.map(product =><ProductsDetails
                key={product._id}
                product={product}
                ></ProductsDetails> )
            }
            </Row>
        </div>
    );
};

export default Products;