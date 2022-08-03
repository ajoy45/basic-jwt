import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const[products,setProducts]=useState([])
    console.log(products)
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='text-center'>
            <h1 className='text-center'>this is order list {products.length}</h1>
            {
                products.map(product=><li>{product.name}</li>)
            }
        </div>
    );
};

export default OrderList;