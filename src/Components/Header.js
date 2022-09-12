import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle("active");
        });
    }, []);
    return (
        <header>
            <img src="https://i.ibb.co/64HNVs8/logo2.png" alt="" className='logo' />
            <div className="inputBox">
                <SearchRounded className='searchIcon'></SearchRounded>
                <input type="text" placeholder='Search' />
            </div>
            <div className="shoppingCart">
                <ShoppingCartRounded className='cart'></ShoppingCartRounded>
                <div className="cart-content">
                    <p>2</p>
                </div>
            </div>
            <div className="profileContainer">
                <div className="imgBox">
                    <img src="https://i.ibb.co/n688tmJ/Untitled-design-6.png" alt=""
                        className='profilePic' />
                </div>
                <h2 className='userName'>Roctim</h2>
            </div>
            <div className="toggleMenu">
                <BarChart className='toggleIcon'></BarChart>
            </div>
        </header>
    );
};

export default Header;