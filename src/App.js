import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import CartItem from './Components/CartItem';
import { Items, MenuItems } from './Components/Data';
import DebitCard from './Components/DebitCard';
import Header from './Components/Header';
import ItemCard from './Components/ItemCard';
import MenuCard from './Components/MenuCard';
import MenuContainer from './Components/MenuContainer';
import { useStateValue } from './Components/StateProvider';
import SubMenuContainer from './Components/SubMenuContainer';

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  )
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active')
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))

    const menuCards = document.querySelector('.rowContainer')
      .querySelectorAll('.rowMenuCard')

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove('active'));
      this.classList.add('active')
    }
    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))

  }, [isMainData, cart]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId))
  }


  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="mainContainer">
          <div className="banner">
            <Banner name={"Roctim"} discount={"20"} link={"#"}></Banner>
            <img src="https://i.ibb.co/nBxzgSs/Group-1151.png" alt=""
              className='deliveryPic'
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={'Menu Category'}></SubMenuContainer>
            </div>

            <div className="rowContainer">
              {
                MenuItems && MenuItems.map(data => (

                  <div className="" key={data.id}
                    onClick={() => setData(data.itemId)}
                  >
                    <MenuCard imgSrc={data.imgSrc} name={data.name}
                      isActive={data.id === 1 ? true : false} ></MenuCard>
                  </div>
                ))
              }

            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>

          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard></DebitCard>
            </div>
          </div>
          {

            !cart ? <div></div> :

              <div className="cartCheckOutContainer">
                <SubMenuContainer name={"carts Items"}></SubMenuContainer>
                <div className="cartContainer">
                  <div className="cartItems">
                    {
                      cart && cart.map(data => (

                        <CartItem
                          key={data.id}
                          itemId={data.id}
                          name={data.name}
                          imgSrc={data.imgSrc}
                          price={data.price}
                        ></CartItem>
                      ))
                    }



                  </div>
                </div>
                <div className="totalSection">
                  <h3>Total</h3>
                  <p>
                    <span>$ 45.0</span>
                  </p>
                </div>
                <button className="checkOut">Check Out</button>
              </div>
          }
        </div>
      </main>
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome></MenuContainer>
          <MenuContainer link={'#'} icon={<Chat />}></MenuContainer>
          <MenuContainer link={'#'} icon={<AccountBalanceRounded />}></MenuContainer>
          <MenuContainer link={'#'} icon={<Favorite />}></MenuContainer>
          <MenuContainer link={'#'} icon={<SummarizeRounded />}></MenuContainer>
          <MenuContainer link={'#'} icon={<Settings />}></MenuContainer>

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
