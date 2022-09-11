import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';

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
