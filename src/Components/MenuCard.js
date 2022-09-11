import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react';

const MenuCard = ({ imgSrc, name }) => {
    return (
        <div className='rowMenuCard'>
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>
            <i className="loadMenu">
                <ChevronRightRounded></ChevronRightRounded>
            </i>
        </div>
    );
};

export default MenuCard;