import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = ({ item }) => {
    const { _id, img, name, description, price, quantity, supplier } = item
    const navigate = useNavigate()
    const navigateToInventoryDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div className='card'>
            <img src={img} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className="title">
                    <h3 className='text-center'>{name}</h3>
                </div>
                <div className="content">
                    <p><span className='head'>Price:</span> {price}</p>
                    <p><span className='head'>Quantity:</span> {quantity}</p>
                    <p><span className='head'>Supplier:</span> {supplier}</p>
                    <p><span className='head'>About This Item:</span></p>
                    <p>
                        {description}
                    </p>
                </div>
                <Button onClick={() => navigateToInventoryDetail(_id)} className="update-btn">Update</Button>
            </div>
        </div>
    );
};

export default Item;