import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])
    const handelDelete = (id) => {
        // console.log(id)
        const url=`http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            const remaing=lists.filter(list=>list._id!==id)
            setLists(remaing)
        })
    }
    return (
        <div className='text-center'>
            <h1 className='text-center'>this is order list</h1>
            {
                lists.map(list => <div className="mx-auto">

                    <h1>{list.name}</h1>
                    <h1>{list.price}</h1>
                    <h1>{list.email}</h1>
                    <button className='w-50' onClick={() => handelDelete(list._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default OrderList;