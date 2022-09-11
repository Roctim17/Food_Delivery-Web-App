import React from 'react';

const DebitCard = () => {
    return (
        <div className='cardGroup'>
            <img src="https://i.ibb.co/X8D2D63/VisaLogo.png" alt="" className='card_logo' />
            <img src="https://i.ibb.co/284MLkr/chip.png" alt="" className='card_chip' />
            <div className="card_number">1238 8017 7259 4042</div>
            <div className="card_name">Md. Rokibul Islam Roctim</div>
            <div className="card_from">20/22</div>
            <div className="card_to">20/24</div>
            <div className="card_ring"></div>
        </div>
    );
};

export default DebitCard;