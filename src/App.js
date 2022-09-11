import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import MenuCard from './Components/MenuCard';
import MenuContainer from './Components/MenuContainer';
import SubMenuContainer from './Components/SubMenuContainer';

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active')
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))
  }, [])
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
              <MenuCard imgSrc={'https://i.ibb.co/jLh19BW/thanos-pal-598887-unsplash.png'} name={'Burger'}></MenuCard>
              <MenuCard imgSrc={'https://i.ibb.co/jLh19BW/thanos-pal-598887-unsplash.png'} name={'Burger'}></MenuCard>
              <MenuCard imgSrc={'https://i.ibb.co/jLh19BW/thanos-pal-598887-unsplash.png'} name={'Burger'}></MenuCard>
              <MenuCard imgSrc={'https://i.ibb.co/jLh19BW/thanos-pal-598887-unsplash.png'} name={'Burger'}></MenuCard>
              <MenuCard imgSrc={'https://i.ibb.co/jLh19BW/thanos-pal-598887-unsplash.png'} name={'Burger'}></MenuCard>
            </div>



            <div className="dishItemContainer"></div>
          </div>
        </div>
        <div className="rightMenu"></div>
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
