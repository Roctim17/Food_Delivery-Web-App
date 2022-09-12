import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React from 'react';

const CartItem = ({ name, imgSrc, quantity, price }) => {
    return (
        <div className='cartItem'>
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>X {quantity}</span>
                    <div className="quantity">
                        <RemoveRounded className='itemRemove'></RemoveRounded>

                        <AddRounded className='itemAdd'></AddRounded>
                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">$</span>
                <span className="itemPriceValue">{price}</span>
            </p>
        </div>
    );
};

export default CartItem;