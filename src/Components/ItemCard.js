import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';

const ItemCard = ({ imgSrc, name, ratings, price }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <div className='itemCard'>
            <div className={`isFavorite ${isFavorite ? 'active' : ""}`}
                onClick={() => setIsFavorite(!isFavorite)}
            >
                <Favorite></Favorite>
            </div>
            <div className="imgBox">
                <img src={imgSrc} alt="" className='itemImg' />
            </div>
            <div className="itemContent">
                <h3 className='itemName'>{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i key={i} className="rating">
                                <StarRounded></StarRounded>
                            </i>
                        ))}
                        <h3 className="price"><span>$</span> {price}</h3>
                    </div>
                    <i className="addToCart">
                        <AddRounded></AddRounded>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;