import React from 'react';
import Card from 'react-bootstrap/Card';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const ProductsDetails = ({product}) => {
    const{name,price}=product;
    const[user]=useAuthState(auth)
    const handelOrder=(pd)=>{
        const url='http://localhost:5000/order'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
             name,
             price,
             email:user.email
            
            }),
            headers: {
            
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
       <div>
           <Card style={{ width: '18rem' }} >
                        <Card.Body >
                            <Card.Title>{name}</Card.Title>
                            <Card.Text >{price}</Card.Text>
                            <Card.Link onClick={()=>handelOrder(product)} className='btn btn-primary'>Order Now</Card.Link>
                        </Card.Body>
          </Card>  
       </div>
                     
                
         
    );
};

export default ProductsDetails;