
import React from 'react';
import Form from 'react-bootstrap/Form';

const UploadProduct = () => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        const name=event.target.name.value;
        const price=event.target.price.value;
        console.log(name,price)
    }
    return (
        <div className='mx-auto w-50'>
            <h1 className='text-center mt-5 '>Upload product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Product price" name='price' />
                </Form.Group>
                
                <input className='btn btn-primary' variant="primary" type="submit" value='Upload Product'>
                    
                </input>
            </Form>
        </div>
    );
};

export default UploadProduct;